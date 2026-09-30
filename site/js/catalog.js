/* T&L Nails — service catalog.
   Service pages, the menu and the homepage price hints are filled from the owner's
   intake answers in Supabase (project "tl-nails", public read-only feed site_catalog()).
   Anything she hasn't answered yet shows "Still waiting for details". */
(function () {
  'use strict';

  var SB_URL = 'https://xiuijjwmmxssvlxqcjju.supabase.co';
  var SB_KEY = 'sb_publishable_tRMgJ6sdwxkH1UFSgDGZdQ__scd8cTX';
  var PHOTO_BASE = SB_URL + '/storage/v1/object/public/intake-photos/';
  var TBD = 'Still waiting for details';
  var FEATURED = 'pedicures--signature-citrus-pedicure';

  var CATS = [
    { key: 'manicures', title: 'Manicures', short: 'Manicures', blurb: 'Shaped, cuticles tidied, finished properly. Add French, chrome or art to any of these.', ph: '', cap: 'manicure detail', h: 280 },
    { key: 'pedicures', title: 'Pedicures', short: 'Pedicures', blurb: 'Massage chairs with settings that actually reach short people. Bring a book.', feature: true },
    { key: 'enhancements', title: 'Enhancements', short: 'Enhance', blurb: 'Acrylic, builder gel and Gel-X. Length beyond short is quoted before we start.', ph: 'ph--e', cap: 'enhancement detail', h: 320 },
    { key: 'nail-art', title: 'Nail art', short: 'Nail art', blurb: 'Bring a screenshot. Designs are priced per nail or per set.', ph: 'ph--f', cap: 'hand-painted art detail', h: 250 },
    { key: 'lashes', title: 'Lashes', short: 'Lashes', blurb: 'Classic, volume and hybrid sets, with fills to keep them full.', ph: 'ph--g', cap: 'lash detail', h: 250 },
    { key: 'waxing', title: 'Waxing', short: 'Waxing', blurb: 'Quick, gentle waxing for brows, face and body.', ph: 'ph--b', cap: 'waxing', h: 220 }
  ];
  var catOf = function (key) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].key === key) return CATS[i];
    var t = String(key || 'Other').replace(/-/g, ' ').replace(/^./, function (c) { return c.toUpperCase(); });
    return { key: key, title: t, short: t, blurb: '', ph: '', cap: '', h: 240 };
  };

  // ---------- helpers ----------
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'text') n.textContent = v;
      else if (k === 'class') n.className = v;
      else n.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function str(v) { return v == null ? '' : Array.isArray(v) ? v.join(', ') : String(v).trim(); }
  function has(v) { return Array.isArray(v) ? v.length > 0 : str(v) !== ''; }
  function lines(v) { return str(v).split(/\n+/).map(function (l) { return l.replace(/^[-•✦*\s]+/, '').trim(); }).filter(Boolean); }
  // Menu fallback when she hasn't written a one-line summary yet: first sentence of the full description.
  function firstSentence(v) {
    var t = str(v); if (!t) return '';
    var m = t.match(/^(.{20,}?[.!?])(\s|$)/); t = m ? m[1] : t;
    return t.length > 110 ? t.slice(0, 108).replace(/[\s,;]+\S*$/, '') + '…' : t;
  }
  function priceNum(v) { var m = str(v).match(/\$\s?(\d+(?:\.\d+)?)/); return m ? +m[1] : null; }
  function minNum(v) { var m = str(v).match(/^(\d+)\s*(m|min|mins|minutes)?\.?$/i); return m ? +m[1] : null; }
  function mins(v) { var n = minNum(v); return n != null ? n + ' min' : str(v); }
  function longMins(v) { var n = minNum(v); return n != null ? n + ' minutes' : str(v); }
  function tbd(tag, cls) { return el(tag || 'span', { class: 'tbd' + (cls ? ' ' + cls : ''), text: TBD }); }
  function setText(node, value) {
    if (!node) return;
    node.classList.toggle('tbd', !has(value));
    node.textContent = has(value) ? str(value) : TBD;
  }
  function root() { return document.documentElement.getAttribute('data-root') || ''; }
  function svcUrl(id) { return root() + 'services/?s=' + encodeURIComponent(id); }
  function photo(path) { return PHOTO_BASE + String(path).split('/').map(encodeURIComponent).join('/'); }
  function done() { if (window.TLSite) { window.TLSite.align(); setTimeout(window.TLSite.align, 400); } }

  var feed;
  function load() {
    if (!feed) feed = fetch(SB_URL + '/rest/v1/rpc/site_catalog', {
      method: 'POST', headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY, 'Content-Type': 'application/json' }, body: '{}'
    }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
    return feed;
  }
  function addonPrice(ad) { return str(ad.price) || str(ad.sug && ad.sug.price); }
  function findAddon(cat, name) { for (var i = 0; i < cat.addons.length; i++) if (cat.addons[i].name === name) return cat.addons[i]; return null; }
  function byCat(cat) {
    var out = {};
    cat.services.forEach(function (s) { (out[s.cat] = out[s.cat] || []).push(s); });
    Object.keys(out).forEach(function (k) { out[k].sort(function (a, b) { return (a.order || 999) - (b.order || 999) || a.name.localeCompare(b.name); }); });
    return out;
  }
  function catOrder(groups) {
    var keys = CATS.map(function (c) { return c.key; }).filter(function (k) { return groups[k]; });
    Object.keys(groups).forEach(function (k) { if (keys.indexOf(k) < 0) keys.push(k); });
    return keys;
  }
  function ph(cls, cap, h) {
    return el('div', { class: 'ph' + (cls ? ' ' + cls : ''), style: h ? '--h:' + h + 'px' : null }, [cap ? el('span', { class: 'cap', text: cap }) : null]);
  }
  function imgTile(path, alt) { return el('img', { class: 'tile__img', src: photo(path), alt: alt, loading: 'lazy' }); }

  // ---------- Service page ----------
  function renderService(cat) {
    var id = (location.search.match(/[?&]s=([^&]+)/) || [])[1];
    id = id ? decodeURIComponent(id) : '';
    var svc = cat.services.filter(function (s) { return s.id === id; })[0];
    var main = $('#main');
    if (!svc) {
      main.textContent = '';
      main.appendChild(el('section', { class: 'wrap svc-missing' }, [
        el('div', { class: 'eyebrow', text: 'Service' }),
        el('h1', { text: 'We couldn’t find that service' }),
        el('p', { text: 'It may have been renamed or removed from the menu.' }),
        el('a', { class: 'btn btn--mauve', href: root() + 'menu.html', text: 'See the full menu' })
      ]));
      return;
    }
    var a = svc.a || {}, c = catOf(svc.cat), incl = lines(a.included);
    document.title = svc.name + ' — T&L Nails Tampa';
    var md = document.querySelector('meta[name="description"]');
    if (md && has(a.short || a.desc)) md.setAttribute('content', str(a.short || a.desc).slice(0, 160));

    // breadcrumb + headings
    var crumbCat = $('#crumb-cat'); crumbCat.textContent = c.title; crumbCat.href = root() + 'menu.html#' + c.key;
    $('#crumb-name').textContent = svc.name;
    $('#pdp-cat').textContent = c.title;
    $('#pdp-badge').hidden = svc.id !== FEATURED;
    $('#pdp-h').textContent = svc.name;
    setText($('#pdp-price'), a.price);
    setText($('#pdp-duration'), has(a.duration) ? mins(a.duration) : '');
    setText($('#pdp-where'), has(a.locations) ? (Array.isArray(a.locations) && a.locations.length > 1 ? 'Both locations' : str(a.locations)) : '');
    setText($('#pdp-desc'), a.desc);

    // gallery
    var photos = Array.isArray(a.photos) ? a.photos : [];
    var hero = $('#pdp-hero'); hero.textContent = '';
    hero.appendChild(photos[0] ? imgTile(photos[0], svc.name) : ph('', 'service photo coming soon'));
    var thumbs = $('#pdp-thumbs'); thumbs.textContent = '';
    ['ph--e', 'ph--f', 'ph--g'].forEach(function (g, i) {
      var p = photos[i + 1];
      thumbs.appendChild(p ? el('div', { class: 'tile thumb' }, [imgTile(p, svc.name + ' photo ' + (i + 2))]) : ph(g));
    });

    // what's included
    var ul = $('#pdp-incl'); ul.textContent = '';
    if (incl.length) incl.forEach(function (l) { ul.appendChild(el('li', { text: l })); });
    else ul.appendChild(el('li', { class: 'tbd', text: TBD }));

    // good to know (optional; only shown when she has written something)
    var notes = $('#pdp-notes-block');
    notes.hidden = !has(a.notes);
    if (has(a.notes)) $('#pdp-notes').textContent = str(a.notes);

    // add-ons (detail column + booking card share values so they stay in sync)
    var base = priceNum(a.price);
    var chipsFor = function (box) {
      box.textContent = '';
      var names = Array.isArray(a.addons) ? a.addons : [];
      names.forEach(function (n) {
        var ad = findAddon(cat, n), p = ad ? addonPrice(ad) : '', num = priceNum(p);
        box.appendChild(el('label', { class: 'chip' }, [
          el('input', { type: 'checkbox', name: 'addons', value: n, 'data-addon': num != null ? String(num) : '0' }),
          el('span', { text: n + (!p ? '' : /^\+?\$/.test(p) ? ' ' + p : ' (' + p.toLowerCase() + ')') })
        ]));
      });
      return names.length;
    };
    var nDetail = chipsFor($('#pdp-addons'), false);
    $('#pdp-addons-block').hidden = !nDetail;
    var nBook = chipsFor($('#book-addons'), true);
    $('#book-addons-label').hidden = !nBook; $('#book-addons').hidden = !nBook;

    // highlights band (duration + included steps)
    var band = $('#pdp-creds'), bits = [];
    if (has(a.duration)) bits.push(longMins(a.duration));
    incl.slice(0, 5).forEach(function (l) { bits.push(l.length > 38 ? l.slice(0, 36).replace(/\s+\S*$/, '') + '…' : l); });
    band.hidden = !bits.length;
    var inner = $('#pdp-creds-in'); inner.textContent = '';
    bits.forEach(function (b, i) { if (i) inner.appendChild(el('i', { 'aria-hidden': 'true', text: '✦' })); inner.appendChild(el('span', { text: b })); });

    // how it goes: included steps grouped into (up to) three
    $('#steps-h').textContent = minNum(a.duration) != null ? minNum(a.duration) + ' minutes, start to finish' : 'Start to finish';
    var rail = $('#pdp-steps'); rail.textContent = '';
    if (!incl.length) rail.appendChild(el('div', null, [el('h3', { text: 'The steps' }), tbd('p')]));
    else {
      var n = Math.min(3, incl.length), size = Math.ceil(incl.length / n);
      for (var i = 0; i < n; i++) {
        var chunk = incl.slice(i * size, (i + 1) * size);
        if (!chunk.length) break;
        rail.appendChild(el('div', null, [
          el('div', { class: 'rail3__n', text: '0' + (i + 1) }),
          el('h3', { text: chunk[0] }),
          chunk.length > 1 ? el('p', { text: chunk.slice(1).join(' · ') }) : null
        ]));
      }
    }

    // pairs well with: others in the same category
    var others = cat.services.filter(function (s) { return s.cat === svc.cat && s.id !== svc.id; }).slice(0, 3);
    $('#pairs').hidden = !others.length;
    var pg = $('#pairs-grid'); pg.textContent = '';
    others.forEach(function (o, i) {
      var op = (o.a && Array.isArray(o.a.photos) && o.a.photos[0]) || null;
      pg.appendChild(el('a', { class: 'pair-card', href: svcUrl(o.id) }, [
        el('div', { class: 'tile' }, [op ? imgTile(op, o.name) : ph(['ph--d', 'ph--e', 'ph--f'][i])]),
        el('div', { class: 'pair-card__body' }, [el('span', { text: o.name }), has(o.a && o.a.price) ? el('span', { text: str(o.a.price).split(' · ')[0] }) : el('span', { class: 'tbd', text: TBD })])
      ]));
    });
    $('#pairs-link').href = root() + 'menu.html#' + c.key;

    // booking card
    $('#book-h').textContent = 'Book the ' + svc.name;
    $('#book-svc').value = svc.name;
    $('#sum-name').textContent = svc.name;
    var sum = [str(a.price).split(' · ')[0], has(a.duration) ? mins(a.duration) : ''].filter(Boolean).join(' · ');
    setText($('#sum-price'), sum);
    var root2 = $('#pdp');
    if (base != null) { root2.setAttribute('data-base-price', String(base)); $('#book-total').hidden = false; }
    else { root2.removeAttribute('data-base-price'); $('#book-total').hidden = true; }
    var sbl = $('#sbar-label'); if (sbl) sbl.textContent = base != null ? 'Book this · $' + base : 'Book this service';
    if (window.TLSite) window.TLSite.addons();
  }

  // ---------- Menu page ----------
  function renderMenu(cat) {
    var groups = byCat(cat), keys = catOrder(groups);
    var rail = $('#menu-rail'), box = $('#menu-cats');
    rail.textContent = ''; box.textContent = '';
    keys.forEach(function (k, i) {
      var c = catOf(k);
      rail.appendChild(el('a', { href: '#' + k, class: i === 0 ? 'is-active' : null }, [el('span', { class: 'd-only', text: c.title }), el('span', { class: 'm-only', text: c.short })]));
      var side = el('div', { class: 'mcat__side' }, [el('h2', { class: 'h2', id: 'c-' + k, text: c.title }), c.blurb ? el('p', { text: c.blurb }) : null]);
      var feat = c.feature && cat.services.filter(function (s) { return s.id === FEATURED; })[0];
      if (feat) {
        side.appendChild(el('div', { class: 'feature' }, [
          el('div', { class: 'feature__tag', text: 'Most requested' }),
          el('h3', { text: feat.name }),
          el('p', { text: has(feat.a.short) ? str(feat.a.short) : 'Our most-loved pedicure.' }),
          el('a', { class: 'btn btn--light', href: svcUrl(feat.id), text: 'See the service' })
        ]));
      } else if (c.cap) side.appendChild(ph(c.ph, c.cap, c.h));
      var list = el('div', { class: 'mlist' });
      groups[k].forEach(function (s) {
        var a = s.a || {}, hl = s.id === FEATURED;
        var desc = has(a.short) ? str(a.short) : firstSentence(a.desc);
        var meta = has(a.duration) ? mins(a.duration) : '';
        list.appendChild(el('a', { class: 'mrow' + (hl ? ' mrow--hl' : ''), href: svcUrl(s.id) }, [
          el('span', { class: 'mrow__name' }, [s.name, hl ? el('span', { class: 'mrow__tag', text: 'Most requested' }) : null]),
          desc || meta ? el('span', { class: 'mrow__desc', text: [desc, meta].filter(Boolean).join(' · ') }) : el('span', { class: 'mrow__desc tbd', text: TBD }),
          has(a.price) ? el('span', { class: 'mrow__price', text: str(a.price).split(' · ')[0] }) : el('span', { class: 'mrow__price tbd', text: TBD })
        ]));
      });
      box.appendChild(el('section', { class: 'mcat', id: k, 'aria-labelledby': 'c-' + k }, [side, list]));
    });
    var add = $('#menu-addons');
    if (add) add.textContent = cat.addons.length ? cat.addons.map(function (ad) { return ad.name + ' ' + addonPrice(ad); }).join(' · ') : TBD;
    if (window.TLSite) window.TLSite.menuRail();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  }

  // ---------- Homepage price hints ----------
  var FILTERS = {
    manicures: function (s) { return s.cat === 'manicures'; },
    pedicures: function (s) { return s.cat === 'pedicures'; },
    acrylics: function (s) { return s.cat === 'enhancements' && /acrylic/i.test(s.name); },
    geldip: function (s) { return s.cat === 'manicures' && /gel|dip/i.test(s.name); },
    lashes: function (s) { return s.cat === 'lashes'; },
    waxing: function (s) { return s.cat === 'waxing'; }
  };
  function renderHome(cat) {
    document.querySelectorAll('[data-from]').forEach(function (n) {
      var f = FILTERS[n.getAttribute('data-from')]; if (!f) return;
      var nums = cat.services.filter(f).map(function (s) { return priceNum(s.a && s.a.price); }).filter(function (x) { return x != null; });
      n.classList.toggle('tbd', !nums.length);
      n.textContent = nums.length ? 'from $' + Math.min.apply(null, nums) : TBD;
    });
    var feat = cat.services.filter(function (s) { return s.id === FEATURED; })[0];
    document.querySelectorAll('[data-feature]').forEach(function (n) {
      var what = n.getAttribute('data-feature');
      if (!feat) return;
      if (what === 'name') n.textContent = feat.name;
      if (what === 'short') setText(n, feat.a.short || feat.a.desc);
      if (what === 'price') setText(n, str(feat.a.price).split(' · ')[0]);
      if (what === 'link') n.href = svcUrl(feat.id) + (n.getAttribute('data-hash') || '');
    });
  }

  function start() {
    var page = document.documentElement.getAttribute('data-page');
    if (!page) return;
    load().then(function (cat) {
      if (page === 'service') renderService(cat);
      else if (page === 'menu') renderMenu(cat);
      else if (page === 'home') renderHome(cat);
      done();
    }, function () {
      var msg = $('[data-catalog-status]');
      if (msg) { msg.hidden = false; msg.textContent = 'The menu couldn’t load. Please refresh, or call us at (813) 304-0330.'; }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

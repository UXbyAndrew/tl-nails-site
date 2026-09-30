/* T&L Nails — site behavior. No dependencies. */
(function () {
  'use strict';

  var CONTACT_EMAIL = 'info@tlnailstampa.com';
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- Petal trail alignment ----------
     The body paints the tile centered at the top of the page. Every [data-petals]
     section repeats the same tile over its own ground, so shift each layer by the
     section's page offset to keep one continuous trail. */
  function alignPetals() {
    var cs = getComputedStyle(document.documentElement);
    var tileW = parseFloat(cs.getPropertyValue('--tile-w')) || 1440;
    var tileH = parseFloat(cs.getPropertyValue('--tile-h')) || 2600;
    var pageX = (document.body.clientWidth - tileW) / 2;
    $$('[data-petals]').forEach(function (el) {
      var r = el.getBoundingClientRect();
      var top = r.top + window.pageYOffset;
      var left = r.left + window.pageXOffset;
      el.style.setProperty('--px', (pageX - left).toFixed(1) + 'px');
      el.style.setProperty('--py', (-(top % tileH)).toFixed(1) + 'px');
    });
  }

  /* ---------- Reveal on entry ---------- */
  function initReveal() {
    var els = $$('[data-rv]');
    var show = function (el) { el.classList.add('is-in'); };
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(show); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.02 });
    els.forEach(function (el) { io.observe(el); });
    // Failsafe: nothing stays hidden if the observer never fires.
    setTimeout(function () { els.forEach(show); }, 4000);
  }

  /* ---------- Hero image drift ---------- */
  function initDrift() {
    var drifts = $$('[data-drift]');
    if (!drifts.length || reduceMotion) return;
    var raf = 0;
    var paint = function () {
      raf = 0;
      var vh = window.innerHeight || 900;
      drifts.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = 'translate3d(0,' + (p * (+el.dataset.drift || 0)).toFixed(2) + 'px,0)';
      });
    };
    var onScroll = function () { if (!raf) raf = requestAnimationFrame(paint); };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    paint();
  }

  /* ---------- Mobile sticky bar: hidden over the hero, slides up after ---------- */
  function initStickyBar() {
    var bar = document.querySelector('.sbar');
    var hero = document.querySelector('[data-hero]');
    if (!bar) return;
    document.body.classList.add('has-sbar');
    if (!hero || !('IntersectionObserver' in window)) { bar.classList.add('is-on'); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var past = !e.isIntersecting && e.boundingClientRect.top < 0;
        bar.classList.toggle('is-on', past);
        bar.setAttribute('aria-hidden', past ? 'false' : 'true');
      });
    }).observe(hero);
  }

  /* ---------- Mobile nav drawer ---------- */
  function initDrawer() {
    var drawer = document.getElementById('drawer');
    var open = document.querySelector('.burger');
    if (!drawer || !open) return;
    var close = drawer.querySelector('.drawer__close');
    var set = function (on) {
      drawer.classList.toggle('is-open', on);
      drawer.setAttribute('aria-hidden', on ? 'false' : 'true');
      open.setAttribute('aria-expanded', on ? 'true' : 'false');
      document.body.classList.toggle('no-scroll', on);
      if (on) close.focus(); else open.focus();
    };
    open.addEventListener('click', function () { set(true); });
    close.addEventListener('click', function () { set(false); });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.classList.contains('is-open')) set(false); });
  }

  /* ---------- Menu category rail scroll-spy ---------- */
  function initMenuRail() {
    var rail = document.querySelector('.mrail');
    if (!rail || !('IntersectionObserver' in window)) return;
    var links = $$('a[href^="#"]', rail);
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var activate = function (id) {
      links.forEach(function (a) { a.classList.toggle('is-active', a === byId[id]); });
      var a = byId[id];
      var box = a && a.parentNode;
      if (box && box.scrollWidth > box.clientWidth && box.scrollTo) {
        box.scrollTo({ left: a.offsetLeft - 20, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) activate(e.target.id); });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- Add-on chips + running total (service page) ---------- */
  function initAddons() {
    var base = document.querySelector('[data-base-price]');
    if (!base) return;
    var price = +base.dataset.basePrice || 0;
    var boxes = $$('input[data-addon]');
    var totals = $$('[data-total]');
    var sync = function (src) {
      // Mirror the same add-on across the detail column and the booking card.
      if (src) boxes.forEach(function (b) { if (b !== src && b.value === src.value) b.checked = src.checked; });
      var seen = {}, sum = price;
      boxes.forEach(function (b) { if (b.checked && !seen[b.value]) { seen[b.value] = 1; sum += +b.dataset.addon; } });
      totals.forEach(function (t) { t.textContent = '$' + sum; });
    };
    boxes.forEach(function (b) { b.addEventListener('change', function () { sync(b); }); });
    sync();
  }

  /* ---------- Forms ----------
     Set data-endpoint on a form (Formspree, Netlify, your booking API…) to POST it.
     Without one, the request opens the visitor's email app addressed to the salon. */
  function initForms() {
    // Preselect a location from ?loc=kennedy|davis (location page CTAs).
    var loc = (location.search.match(/[?&]loc=(\w+)/) || [])[1];
    if (loc) $$('select[name="location"]').forEach(function (s) {
      $$('option', s).forEach(function (o) { if (o.value.toLowerCase().indexOf(loc) === 0) s.value = o.value; });
    });

    $$('select.field').forEach(function (s) {
      var mark = function () { s.classList.toggle('is-empty', !s.value); };
      s.addEventListener('change', mark); mark();
    });

    // Show a native date picker while keeping the "Preferred date" placeholder.
    $$('input[data-date]').forEach(function (i) {
      i.addEventListener('focus', function () { if (i.type !== 'date') { i.type = 'date'; i.min = new Date().toISOString().slice(0, 10); } });
      i.addEventListener('blur', function () { if (!i.value) i.type = 'text'; });
    });

    $$('form[data-form]').forEach(function (form) {
      var next = form.nextElementSibling;
      var note = form.querySelector('.form-note') || (next && next.classList.contains('form-note') ? next : null);
      var say = function (msg, ok) { if (note) { note.textContent = msg; note.classList.toggle('is-ok', !!ok); } };
      var booking = form.dataset.form === 'booking';
      var done = form.dataset.success || (booking ? 'Thank you \u2014 we\u2019ll confirm within the hour.' : 'You\u2019re on the list. Thank you!');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var data = new FormData(form);
        var endpoint = form.getAttribute('data-endpoint');
        if (endpoint) {
          say('Sending…');
          fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
            .then(function (r) { if (!r.ok) throw new Error(r.status); form.reset(); say(done, true); })
            .catch(function () { say('Something went wrong. Please call us instead.'); });
          return;
        }
        var lines = [];
        data.forEach(function (v, k) { if (v) lines.push(k.replace(/_/g, ' ') + ': ' + v); });
        var subject = form.dataset.form === 'newsletter' ? 'Newsletter sign-up' : 'Appointment request';
        location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        say(booking ? 'Opening your email app \u2014 send it and we\u2019ll confirm within the hour.' : 'Opening your email app to send this to us\u2026', true);
      });
    });
  }

  function init() {
    initReveal();
    initDrift();
    initStickyBar();
    initDrawer();
    initMenuRail();
    initAddons();
    initForms();
    alignPetals();
    var t;
    addEventListener('resize', function () { clearTimeout(t); t = setTimeout(alignPetals, 120); });
    addEventListener('load', alignPetals);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(alignPetals);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

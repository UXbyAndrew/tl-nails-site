import React from "react";

/** Hard-edged image frame with the site's hover scale and optional scroll drift. */
export function FramedImage({ src, caption, height = 210, gradient = "linear-gradient(160deg,#F3D6DD,#E3BCC6)", drift = 0, bezel }) {
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    if (!drift || !ref.current) return;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      ref.current.style.transform = `translate3d(0,${(p * drift).toFixed(2)}px,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [drift]);

  return (
    <div style={{ height, overflow: "hidden", border: bezel ? "var(--border-bezel)" : undefined,
      boxShadow: bezel ? "var(--shadow-overlay)" : undefined }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div ref={ref} style={{ height: drift ? "114%" : "100%", marginTop: drift ? "-7%" : 0 }}>
        <div style={{ height: "100%", background: src ? `url(${src}) center/cover` : `var(--hatch), ${gradient}`,
          display: "flex", alignItems: "flex-end", padding: 20,
          transform: hover ? "scale(1.05)" : "none", transition: "transform var(--dur-image) ease" }}>
          {caption && !src ? <span style={{ font: "500 10px/1 var(--font-mono)", letterSpacing: ".2em",
            textTransform: "uppercase", color: "var(--plum-700)", opacity: 0.65 }}>{caption}</span> : null}
        </div>
      </div>
    </div>
  );
}

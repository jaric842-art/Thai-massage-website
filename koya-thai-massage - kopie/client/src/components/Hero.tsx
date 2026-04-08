/* ============================================================
   HERO — Koya Thai Massage
   Design: Fullscreen dark jungle, parallax, smoke/glow effects
   Background: Generated hero_bg image
   ============================================================ */

import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/HvX39rUtcenGmnxw5FfmzQ/hero_bg-XfPRj3wKUTaof4tM42Xbxd.webp";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: "120%",
          top: "-10%",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(11,11,11,0.85) 0%, rgba(15,42,31,0.6) 50%, rgba(11,11,11,0.9) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, #0b0b0b)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(198,168,107,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              background: "#c6a86b",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.1,
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "#c6a86b" }} />
            <span className="section-label">Koya Thai Massage · Duffel</span>
          </div>

          {/* Main headline */}
          <h1
            className="leading-none mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 300,
              color: "#f5f1e8",
              lineHeight: 1.05,
            }}
          >
            Ontsnap.
            <br />
            <span style={{ color: "#c6a86b", fontStyle: "italic" }}>Ontspan.</span>
            <br />
            Herstel.
          </h1>

          {/* Gold divider */}
          <div className="gold-divider mb-6" />

          {/* Subheadline */}
          <p
            className="mb-10 max-w-xl"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "rgba(245, 241, 232, 0.8)",
              lineHeight: 1.7,
            }}
          >
            Ervaar authentieke Thaise massage in Duffel. Een moment van pure rust,
            diep in het hart van de Thaise traditie.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <button onClick={handleBookClick} className="btn-gold">
              <span>Boek je massage</span>
            </button>
            <a
              href="#massages"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#massages")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-sm tracking-widest uppercase"
              style={{ color: "rgba(245,241,232,0.6)", fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              <span>Bekijk massages</span>
              <svg width="20" height="1" viewBox="0 0 20 1" fill="none">
                <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor" />
              </svg>
            </a>
          </div>

          {/* Trust line */}
          <div
            className="flex flex-wrap items-center gap-3"
            style={{ color: "rgba(198, 168, 107, 0.7)", fontSize: "0.7rem", letterSpacing: "0.15em" }}
          >
            <span>Professionele technieken</span>
            <span style={{ color: "#c6a86b" }}>·</span>
            <span>Diepe ontspanning</span>
            <span style={{ color: "#c6a86b" }}>·</span>
            <span>Authentieke Thaise ervaring</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(198,168,107,0.5)", fontSize: "0.6rem", letterSpacing: "0.25em" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12 relative overflow-hidden"
          style={{ background: "rgba(198,168,107,0.2)" }}
        >
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              background: "#c6a86b",
              height: "40%",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}

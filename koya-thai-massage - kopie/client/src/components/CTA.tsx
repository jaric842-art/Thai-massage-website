/* ============================================================
   CTA — Koya Thai Massage
   Design: Full-width dark with golden particles background
   Image: Generated cta_bg (dark bokeh particles)
   ============================================================ */

import { useEffect, useRef } from "react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/HvX39rUtcenGmnxw5FfmzQ/cta_bg-Sfqe4efvcbNZngr6YzUwkC.webp";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 overflow-hidden"
    >
      {/* Background image */}
      <img
        src={CTA_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.6)" }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(11,11,11,0.85) 0%, rgba(15,42,31,0.5) 50%, rgba(11,11,11,0.85) 100%)",
        }}
      />

      {/* Gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(198,168,107,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="fade-in flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px" style={{ background: "rgba(198,168,107,0.5)" }} />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c6a86b",
            }}
          >
            Reserveer uw moment
          </span>
          <div className="w-16 h-px" style={{ background: "rgba(198,168,107,0.5)" }} />
        </div>

        <h2
          className="fade-in mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#f5f1e8",
            lineHeight: 1.1,
          }}
        >
          Gun jezelf een moment
          <br />
          <span style={{ color: "#c6a86b", fontStyle: "italic" }}>van pure rust.</span>
        </h2>

        <p
          className="fade-in mb-12 mx-auto"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: "rgba(245,241,232,0.65)",
            lineHeight: 1.8,
            maxWidth: "480px",
          }}
        >
          Neem vandaag nog contact op en plan uw persoonlijke massagebehandeling in Duffel.
        </p>

        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold pulse-glow"
            style={{ padding: "1rem 3rem", fontSize: "0.75rem", letterSpacing: "0.25em" }}
          >
            <span>Boek je massage</span>
          </button>
        </div>

        {/* Decorative bottom */}
        <div className="fade-in mt-16 flex items-center justify-center gap-6">
          {["Rust", "Warmte", "Herstel"].map((word, i) => (
            <div key={word} className="flex items-center gap-6">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "rgba(198,168,107,0.5)",
                }}
              >
                {word}
              </span>
              {i < 2 && (
                <span style={{ color: "rgba(198,168,107,0.3)", fontSize: "0.5rem" }}>✦</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

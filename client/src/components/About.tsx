/* ============================================================
   ABOUT — Koya Thai Massage
   Design: Asymmetric layout, image left, text right
   Image: Generated about_image (Thai massage scene)
   ============================================================ */

import { useEffect, useRef } from "react";

const ABOUT_IMG = "/manus-storage/thai-massage_0f8387c4.jpg";

export default function About() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="over-koya"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Subtle jungle green glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(15,42,31,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="fade-in relative">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", maxHeight: "600px" }}
            >
              <img
                src={ABOUT_IMG}
                alt="Authentieke Thaise massage bij Koya"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.9) contrast(1.05)" }}
              />
              {/* Gold frame accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "1px solid rgba(198,168,107,0.2)",
                  boxShadow: "inset 0 0 60px rgba(0,0,0,0.4)",
                }}
              />
            </div>
            {/* Decorative offset border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{
                border: "1px solid rgba(198,168,107,0.15)",
                zIndex: -1,
              }}
            />
            {/* Experience badge */}
            <div
              className="absolute -bottom-6 -left-6 p-6 flex flex-col items-center justify-center"
              style={{
                background: "#0f2a1f",
                border: "1px solid rgba(198,168,107,0.3)",
                minWidth: "120px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color: "#c6a86b",
                  lineHeight: 1,
                }}
              >
                100%
              </span>
              <span
                className="text-center mt-1"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "rgba(245,241,232,0.6)",
                  textTransform: "uppercase",
                }}
              >
                Authentiek
                <br />
                Thais
              </span>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:pl-8">
            <div className="fade-in flex items-center gap-4 mb-6">
              <div className="w-12 h-px" style={{ background: "#c6a86b" }} />
              <span className="section-label">Over Koya</span>
            </div>

            <h2
              className="fade-in mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "#f5f1e8",
                lineHeight: 1.15,
              }}
            >
              Waar traditie
              <br />
              <span style={{ color: "#c6a86b", fontStyle: "italic" }}>
                ontmoet rust
              </span>
            </h2>

            <div className="gold-divider fade-in" />

            <p
              className="fade-in mb-6"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(245,241,232,0.75)",
                lineHeight: 1.9,
              }}
            >
              Bij Koya Thai Massage geloven we dat echte ontspanning verder gaat dan het
              lichaam. Onze authentieke Thaise technieken, overgedragen van generatie op
              generatie, richten zich op het herstel van de balans tussen lichaam en geest.
            </p>

            <p
              className="fade-in mb-10"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(245,241,232,0.75)",
                lineHeight: 1.9,
              }}
            >
              In ons salon in Duffel creëren we een sfeer van rust en warmte, waar elke
              behandeling persoonlijk en met zorg wordt afgestemd op uw noden. Geen haast,
              geen ruis — alleen pure ontspanning.
            </p>

            {/* Features */}
            <div className="fade-in grid grid-cols-2 gap-6">
              {[
                { icon: "✦", title: "Authentieke technieken", desc: "Traditionele Thaise methoden" },
                { icon: "✦", title: "Lichaam & geest", desc: "Holistische benadering" },
                { icon: "✦", title: "Persoonlijke aanpak", desc: "Op maat van uw noden" },
                { icon: "✦", title: "Rustige omgeving", desc: "Zen sfeer in Duffel" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <span style={{ color: "#c6a86b", fontSize: "0.7rem" }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#f5f1e8",
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(245,241,232,0.5)",
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

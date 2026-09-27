/* ============================================================
   ATMOSPHERE — Koya Thai Massage
   Design: Full-width dark image with overlay text
   Image: Generated massage_atmosphere (luxury room)
   ============================================================ */

import { useEffect, useRef } from "react";

const ATMOSPHERE_IMG = "/manus-storage/spa-atmosphere_65ec7ade.jpg";

const vibes = [
  {
    icon: "🕯️",
    title: "Kaarslicht & warmte",
    desc: "Elke ruimte is gevuld met zachte kaarsgeur en warme verlichting die u onmiddellijk tot rust brengt.",
  },
  {
    icon: "🌿",
    title: "Jungle & natuur",
    desc: "Tropische planten, bamboe en Thaise elementen creëren een authentieke jungle-sfeer.",
  },
  {
    icon: "🪨",
    title: "Warme stenen",
    desc: "Vulkanische stenen, verwarmde kruiden en aromatische oliën voor een complete zintuiglijke ervaring.",
  },
];

export default function Atmosphere() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="beleving"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Full-width image with overlay */}
      <div className="relative" style={{ minHeight: "600px" }}>
        <img
          src={ATMOSPHERE_IMG}
          alt="Sfeer bij Koya Thai Massage"
          className="w-full object-cover"
          style={{ height: "600px", filter: "brightness(0.68) contrast(1.06)" }}
        />

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(11,11,11,0.9) 0%, rgba(11,11,11,0.3) 50%, rgba(11,11,11,0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(11,11,11,0.3) 0%, transparent 30%, transparent 70%, rgba(11,11,11,1) 100%)",
          }}
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <div className="fade-in flex items-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: "#c6a86b" }} />
                <span className="section-label">De beleving</span>
              </div>

              <h2
                className="fade-in mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: "#f5f1e8",
                  lineHeight: 1.15,
                }}
              >
                Meer dan een massage.
                <br />
                <span style={{ color: "#c6a86b", fontStyle: "italic" }}>
                  Een complete beleving.
                </span>
              </h2>

              <p
                className="fade-in"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(245,241,232,0.8)",
                  lineHeight: 1.8,
                  maxWidth: "480px",
                }}
              >
                Van het moment dat u binnenstapt, wordt u omhuld door warmte, geur en rust.
                Onze salon is ontworpen als een Thais heiligdom — een plek waar de wereld
                buiten even niet bestaat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vibe cards below */}
      <div
        className="relative py-20"
        style={{
          background: "linear-gradient(180deg, #0b0b0b 0%, #0a0f0a 100%)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {vibes.map((vibe, i) => (
              <div
                key={vibe.title}
                className="fade-in flex flex-col gap-4 p-8 relative"
                style={{
                  borderTop: "1px solid rgba(198,168,107,0.2)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="text-3xl">{vibe.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "#f5f1e8",
                  }}
                >
                  {vibe.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: "rgba(245,241,232,0.55)",
                    lineHeight: 1.8,
                  }}
                >
                  {vibe.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

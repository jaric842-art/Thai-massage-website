/* ============================================================
   WHY KOYA — Koya Thai Massage
   Design: Dark section with gold accent features
   Layout: Horizontal feature list with icons
   ============================================================ */

import { useEffect, useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Authentieke Thaise technieken",
    desc: "Onze masseurs zijn opgeleid in de traditionele Thaise massage, rechtstreeks van de bron.",
  },
  {
    number: "02",
    title: "Diepe ontspanning",
    desc: "Elke behandeling is gericht op het loslaten van spanning op alle niveaus — fysiek en mentaal.",
  },
  {
    number: "03",
    title: "Professionele aanpak",
    desc: "Gecertificeerde therapeuten met jarenlange ervaring en passie voor hun vak.",
  },
  {
    number: "04",
    title: "Rustige omgeving",
    desc: "Een zorgvuldig gecreëerde sfeer van stilte, warmte en Thaise elegantie in Duffel.",
  },
  {
    number: "05",
    title: "Persoonlijke aandacht",
    desc: "Elke massage wordt afgestemd op uw lichaam, uw noden en uw moment.",
  },
];

export default function WhyKoya() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="waarom-koya"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,168,107,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <div className="fade-in flex items-center gap-4 mb-6">
              <div className="w-12 h-px" style={{ background: "#c6a86b" }} />
              <span className="section-label">Waarom Koya</span>
            </div>

            <h2
              className="fade-in mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                fontWeight: 300,
                color: "#f5f1e8",
                lineHeight: 1.1,
              }}
            >
              Vijf redenen om
              <br />
              <span style={{ color: "#c6a86b", fontStyle: "italic" }}>
                voor Koya te kiezen
              </span>
            </h2>

            <div className="gold-divider fade-in" />

            <p
              className="fade-in mt-4"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(245,241,232,0.6)",
                lineHeight: 1.9,
                maxWidth: "380px",
              }}
            >
              Wij zijn meer dan een massagesalon. Wij zijn een bestemming voor
              iedereen die echt wil ontsnappen aan de dagelijkse drukte.
            </p>

            {/* Decorative lotus */}
            <div
              className="fade-in mt-12 text-6xl opacity-10"
              style={{ color: "#c6a86b" }}
            >
              ❋
            </div>
          </div>

          {/* Right: reasons */}
          <div className="flex flex-col">
            {reasons.map((reason, i) => (
              <div
                key={reason.number}
                className="fade-in flex gap-8 py-8 group"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 transition-colors duration-300 group-hover:text-gold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.85rem",
                    color: "rgba(198,168,107,0.4)",
                    letterSpacing: "0.1em",
                    paddingTop: "4px",
                    minWidth: "32px",
                  }}
                >
                  {reason.number}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="mb-2 transition-colors duration-300"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 400,
                      color: "#f5f1e8",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "rgba(245,241,232,0.5)",
                      lineHeight: 1.8,
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

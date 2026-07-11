/* ============================================================
   MASSAGES — Koya Thai Massage
   Design: Tab-based layout — knoppen bovenaan, één kaart zichtbaar
   Compact, overzichtelijk, luxe
   60 / 90 / 120 minuten alleen
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const massages = [
  {
    name: "Traditionele Thaise Massage",
    shortName: "Thaise massage",
    description:
      "De klassieke Thaise massage werkt op energiebanen en spieren voor diepe ontspanning. Door een combinatie van drukpunten, stretching en ritmische bewegingen wordt spanning losgelaten en de energiestroom hersteld.",
    icon: "🧘",
    prices: [
      { duration: "60 min", price: "€60" },
      { duration: "90 min", price: "€90" },
      { duration: "120 min", price: "€115" },
    ],
    featured: false,
  },
  {
    name: "Aroma Olie Massage",
    shortName: "Aroma olie",
    description:
      "Zachte, vloeiende bewegingen met geurige essentiële oliën voor totale ontspanning van lichaam en geest. De warme oliën dringen diep in de huid en laten u heerlijk geurig achter.",
    icon: "🌸",
    prices: [
      { duration: "60 min", price: "€60" },
      { duration: "90 min", price: "€90" },
      { duration: "120 min", price: "€115" },
    ],
    featured: false,
  },
  {
    name: "Rug-, Nek- & Schoudermassage",
    shortName: "Rug & nek",
    description:
      "Gerichte behandeling van de meest gespannen zones voor directe verlichting. Ideaal voor mensen met een zittend beroep of chronische spanning in de bovenrug en nek.",
    icon: "🤝",
    prices: [
      { duration: "60 min", price: "€60" },
      { duration: "90 min", price: "€90" },
      { duration: "120 min", price: "€115" },
    ],
    featured: false,
  },
  {
    name: "Sportmassage",
    shortName: "Sportmassage",
    description:
      "Intensieve massage voor sporters en actieve mensen, gericht op spierherstel en het voorkomen van blessures. Verhoogt de doorbloeding en versnelt het herstelproces na inspanning.",
    icon: "⚡",
    prices: [
      { duration: "60 min", price: "€65" },
      { duration: "90 min", price: "€95" },
      { duration: "120 min", price: "€120" },
    ],
    featured: false,
  },
  {
    name: "Hot Stone Massage",
    shortName: "Hot stone",
    description:
      "Verwarmde vulkanische stenen ontspannen de diepste spierlagen. De stenen worden langs energiebanen geplaatst en bewogen, wat zorgt voor een uniek gevoel van warmte en diepe rust.",
    icon: "🪨",
    prices: [
      { duration: "90 min", price: "€100" },
      { duration: "120 min", price: "€125" },
    ],
    featured: true,
  },
  {
    name: "Kruidenstempel Massage",
    shortName: "Kruidenstempel",
    description:
      "Warme kruidenstempels gevuld met aromatische Thai kruiden worden op het lichaam gedrukt voor diepe warmte en ontspanning. Een ware verwenbehandeling met een authentieke Thaise touch.",
    icon: "🌿",
    prices: [
      { duration: "90 min", price: "€100" },
      { duration: "120 min", price: "€125" },
    ],
    featured: true,
  },
  {
    name: "Kindermassage",
    shortName: "Kindermassage",
    description:
      "Zachte, ontspannende massage speciaal afgestemd op kinderen. Bevordert een goede nachtrust, vermindert stress en versterkt het lichaamsbesef op een veilige, speelse manier.",
    icon: "👶",
    prices: [
      { duration: "60 min", price: "€50" },
      { duration: "90 min", price: "€70" },
      { duration: "120 min", price: "€95" },
    ],
    featured: false,
  },
  {
    name: "Aroma Olie Massage + Bodyscrub",
    shortName: "Body scrub",
    description:
      "Een complete verwenbehandeling: een zachte scrub verwijdert dode huidcellen voor een stralende huid, gevolgd door een diepe aroma olie massage. Het ultieme moment van zelfzorg.",
    icon: "✨",
    prices: [
      { duration: "120 min", price: "€135" },
    ],
    featured: true,
  },
];

export default function Massages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const active = massages[activeIndex];

  const handleTabClick = (i: number) => {
    if (i === activeIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(i);
      setAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
      id="massages"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0b0b0b 0%, #0a0f0a 50%, #0b0b0b 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(15,42,31,0.2) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(198,168,107,0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="fade-in flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ background: "#c6a86b" }} />
            <span className="section-label">Onze behandelingen</span>
            <div className="w-12 h-px" style={{ background: "#c6a86b" }} />
          </div>
          <h2
            className="fade-in mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#f5f1e8",
              lineHeight: 1.1,
            }}
          >
            Massages &{" "}
            <span style={{ color: "#c6a86b", fontStyle: "italic" }}>Prijzen</span>
          </h2>
          <p
            className="fade-in max-w-xl mx-auto"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "rgba(245,241,232,0.55)",
              lineHeight: 1.8,
            }}
          >
            Kies uw behandeling en ontdek de details en prijzen.
          </p>
        </div>

        {/* Tab buttons — scrollable on mobile */}
        <div className="fade-in mb-10 overflow-x-auto pb-2">
          <div
            className="flex gap-2 min-w-max mx-auto"
            style={{ justifyContent: "center", flexWrap: "wrap" }}
          >
            {massages.map((m, i) => (
              <button
                key={m.name}
                onClick={() => handleTabClick(i)}
                className="relative transition-all duration-300 whitespace-nowrap"
                style={{
                  padding: "0.6rem 1.2rem",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: activeIndex === i ? 500 : 300,
                  color: activeIndex === i ? "#0b0b0b" : "rgba(245,241,232,0.6)",
                  background: activeIndex === i ? "#c6a86b" : "transparent",
                  border: `1px solid ${activeIndex === i ? "#c6a86b" : "rgba(198,168,107,0.25)"}`,
                  boxShadow: activeIndex === i ? "0 0 20px rgba(198,168,107,0.25)" : "none",
                }}
              >
                {m.shortName}
                {m.featured && activeIndex !== i && (
                  <span
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                    style={{ background: "#c6a86b" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active card */}
        <div
          ref={cardRef}
          className="max-w-2xl mx-auto transition-all duration-200"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
          }}
        >
          <div
            className="p-8 md:p-10 relative overflow-hidden"
            style={{
              background: active.featured
                ? "rgba(15, 42, 31, 0.4)"
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${active.featured ? "rgba(198,168,107,0.35)" : "rgba(198,168,107,0.2)"}`,
              boxShadow: "0 0 60px rgba(198,168,107,0.06)",
            }}
          >
            {/* Featured badge */}
            {active.featured && (
              <div
                className="absolute top-0 right-0 px-3 py-1"
                style={{
                  background: "rgba(198,168,107,0.15)",
                  borderLeft: "1px solid rgba(198,168,107,0.3)",
                  borderBottom: "1px solid rgba(198,168,107,0.3)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    color: "#c6a86b",
                    textTransform: "uppercase",
                  }}
                >
                  Premium
                </span>
              </div>
            )}

            <div className="flex items-start gap-5 mb-6">
              <div className="text-3xl mt-1">{active.icon}</div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 400,
                    color: "#f5f1e8",
                    lineHeight: 1.2,
                  }}
                >
                  {active.name}
                </h3>
              </div>
            </div>

            {/* Gold divider */}
            <div
              className="mb-6"
              style={{
                width: "50px",
                height: "1px",
                background: "linear-gradient(90deg, #c6a86b, transparent)",
              }}
            />

            {/* Description */}
            <p
              className="mb-8"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(245,241,232,0.7)",
                lineHeight: 1.9,
              }}
            >
              {active.description}
            </p>

            {/* Prices */}
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: `repeat(${active.prices.length}, 1fr)` }}
            >
              {active.prices.map((p) => (
                <div
                  key={p.duration}
                  className="flex flex-col items-center justify-center py-5 px-4 text-center"
                  style={{
                    background: "rgba(198,168,107,0.06)",
                    border: "1px solid rgba(198,168,107,0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(198,168,107,0.6)",
                      marginBottom: "0.4rem",
                      display: "block",
                    }}
                  >
                    {p.duration}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      color: "#c6a86b",
                      lineHeight: 1,
                    }}
                  >
                    {p.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Book CTA */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gold"
                style={{ padding: "0.75rem 2.5rem", fontSize: "0.7rem" }}
              >
                <span>Boek {active.shortName}</span>
              </button>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={() => handleTabClick((activeIndex - 1 + massages.length) % massages.length)}
              className="flex items-center gap-2 transition-colors duration-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(198,168,107,0.5)",
              }}
            >
              ← Vorige
            </button>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                color: "rgba(198,168,107,0.35)",
                letterSpacing: "0.1em",
              }}
            >
              {activeIndex + 1} / {massages.length}
            </span>
            <button
              onClick={() => handleTabClick((activeIndex + 1) % massages.length)}
              className="flex items-center gap-2 transition-colors duration-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(198,168,107,0.5)",
              }}
            >
              Volgende →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


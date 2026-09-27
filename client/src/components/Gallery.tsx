/* ============================================================
   GALLERY — Koya Thai Massage
   Design: Sacred Jungle Noir
   - Unieke salonfoto's, elk één keer gebruikt op de website
   - Vaste grid: 4 kolommen desktop, 2 kolommen mobiel
   - Alleen zichtbare foto's in DOM → knop staat altijd direct eronder
   - Alle foto's vooraf geladen via hidden <img> tags
   - Lightbox met pijlnavigatie
   ============================================================ */

import { useEffect, useRef, useState, useCallback } from "react";

const photos = [
  { url: "/manus-storage/salon-welcome_b8e107e9.jpg", alt: "Welkom bij Koya Thai Massage" },
  { url: "/manus-storage/massage-bed_3563eef0.jpg", alt: "Sfeervol opgemaakte massagetafel" },
  { url: "/manus-storage/hot-stone-massage_a7437c2d.jpg", alt: "Hot stone massage bij Koya" },
  { url: "/manus-storage/salon-atmosphere_14324738.jpg", alt: "Sfeer in de salon van Koya" },
  { url: "/manus-storage/massage-session_57ba07b4.jpg", alt: "Massagebehandeling in de salon" },
];

const INITIAL_VISIBLE = 5;

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Only the photos that should be rendered in the grid
  const visiblePhotos = showAll ? photos : photos.slice(0, INITIAL_VISIBLE);
  const hiddenCount = photos.length - INITIAL_VISIBLE;

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightbox === null) return;
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") setLightbox((prev) => prev !== null ? (prev + 1) % photos.length : null);
    if (e.key === "ArrowLeft") setLightbox((prev) => prev !== null ? (prev - 1 + photos.length) % photos.length : null);
  }, [lightbox]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section
      id="galerij"
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Preload all images silently so they're ready when revealed */}
      <div style={{ display: "none" }} aria-hidden="true">
        {photos.map((p) => (
          <img key={p.url} src={p.url} alt="" />
        ))}
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(198,168,107,0.25), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px" style={{ background: "#c6a86b" }} />
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c6a86b",
            }}>
              Onze salon
            </span>
            <div className="w-10 h-px" style={{ background: "#c6a86b" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            color: "#f5f1e8",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          }}>
            Een blik in{" "}
            <span style={{ color: "#c6a86b", fontStyle: "italic" }}>onze wereld</span>
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "rgba(245,241,232,0.45)",
            lineHeight: 1.7,
            maxWidth: "420px",
            margin: "0 auto",
          }}>
            Sfeer, warmte en authenticiteit van Koya Thai Massage in Duffel.
          </p>
        </div>

        {/* Grid — only visible photos rendered */}
        <div className="gallery-grid">
          {visiblePhotos.map((photo, i) => (
            <div
              key={photo.url}
              className="gallery-item"
              onClick={() => setLightbox(photos.indexOf(photo))}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <div className="gallery-plus">+</div>
              </div>
            </div>
          ))}
        </div>

        {/* Button directly below grid */}
        {hiddenCount > 0 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1.25rem", gap: "0.4rem" }}>
            <button
              className="gallery-btn"
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  setTimeout(() => {
                    document.getElementById("galerij")?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                } else {
                  setShowAll(true);
                }
              }}
            >
              <span>{showAll ? "Minder tonen" : `Meer foto's bekijken (${hiddenCount})`}</span>
              <span className={`gallery-arrow ${showAll ? "flipped" : ""}`}>↓</span>
            </button>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.12em",
              color: "rgba(198,168,107,0.22)",
            }}>
              {visiblePhotos.length} / {photos.length} foto's
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(5,5,5,0.96)" }}
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="lightbox-close">×</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }} className="lightbox-prev">‹</button>
          <div style={{ maxWidth: "90vw", padding: "0 3.5rem" }} onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].url}
              alt={photos[lightbox].alt}
              style={{
                maxWidth: "100%", maxHeight: "82vh",
                objectFit: "contain", display: "block", margin: "0 auto",
                boxShadow: "0 0 60px rgba(198,168,107,0.08)",
                border: "1px solid rgba(198,168,107,0.12)",
              }}
            />
            <p style={{
              textAlign: "center", marginTop: "0.75rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.85rem", fontStyle: "italic",
              color: "rgba(198,168,107,0.4)",
            }}>
              {lightbox + 1} / {photos.length}
            </p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }} className="lightbox-next">›</button>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 180px;
          border: 1px solid rgba(198,168,107,0.08);
          cursor: pointer;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.07);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,11,11,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-plus {
          width: 32px; height: 32px;
          border: 1px solid rgba(198,168,107,0.7);
          color: #c6a86b;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .gallery-btn {
          padding: 0.8rem 2.5rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c6a86b;
          background: transparent;
          border: 1px solid rgba(198,168,107,0.45);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.3s ease;
        }
        .gallery-btn:hover {
          background: rgba(198,168,107,0.08);
        }
        .gallery-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .gallery-arrow.flipped {
          transform: rotate(180deg);
        }
        .lightbox-close {
          position: absolute; top: 1.5rem; right: 1.5rem;
          width: 40px; height: 40px;
          border: 1px solid rgba(198,168,107,0.4);
          color: #c6a86b; font-size: 1.3rem;
          background: rgba(11,11,11,0.85);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10;
        }
        .lightbox-prev {
          position: absolute; left: 1rem;
          width: 44px; height: 44px;
          border: 1px solid rgba(198,168,107,0.3);
          color: #c6a86b; font-size: 1.6rem;
          background: rgba(11,11,11,0.8);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10;
        }
        .lightbox-next {
          position: absolute; right: 1rem;
          width: 44px; height: 44px;
          border: 1px solid rgba(198,168,107,0.3);
          color: #c6a86b; font-size: 1.6rem;
          background: rgba(11,11,11,0.8);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-item {
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}

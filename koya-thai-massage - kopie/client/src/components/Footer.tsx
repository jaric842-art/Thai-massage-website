/* ============================================================
   FOOTER — Koya Thai Massage
   Design: Minimal dark footer with logo and links
   ============================================================ */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/HvX39rUtcenGmnxw5FfmzQ/logo_transparent_787bd3b2.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "#070707",
        borderTop: "1px solid rgba(198,168,107,0.1)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Koya Thai Massage"
              className="h-12 w-auto"
              style={{ filter: "drop-shadow(0 0 6px rgba(198,168,107,0.2))" }}
            />
          </div>

          {/* Center: tagline */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "rgba(198,168,107,0.4)",
            }}
          >
            Ontsnap. Ontspan. Herstel.
          </p>

          {/* Right: copyright */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "rgba(245,241,232,0.25)",
            }}
          >
            © {year} Koya Thai Massage · Duffel
          </p>
        </div>

        {/* Bottom gold line */}
        <div
          className="mt-8"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(198,168,107,0.2), transparent)",
          }}
        />
      </div>
    </footer>
  );
}

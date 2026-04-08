/* ============================================================
   NAVBAR — Koya Thai Massage
   Design: Transparent on hero, dark on scroll
   Logo: Transparent PNG with gold/green colors
   ============================================================ */

import { useEffect, useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/HvX39rUtcenGmnxw5FfmzQ/logo_transparent_787bd3b2.png";

const navLinks = [
  { label: "Over Koya", href: "#over-koya" },
  { label: "Massages", href: "#massages" },
  { label: "Galerij", href: "#galerij" },
  { label: "Beleving", href: "#beleving" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(11, 11, 11, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(198, 168, 107, 0.15)" : "none",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
          >
            <img
              src={LOGO_URL}
              alt="Koya Thai Massage"
              className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 0 8px rgba(198, 168, 107, 0.3))" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm tracking-widest uppercase font-light transition-colors duration-300 group"
                style={{ color: "#f5f1e8", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: "#c6a86b" }}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold"
              style={{ padding: "0.6rem 1.5rem", fontSize: "0.65rem" }}
            >
              <span>Boek nu</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "#c6a86b",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "#c6a86b",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "#c6a86b",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(11, 11, 11, 0.97)",
          backdropFilter: "blur(12px)",
          borderTop: menuOpen ? "1px solid rgba(198, 168, 107, 0.15)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm tracking-widest uppercase font-light"
              style={{ color: "#f5f1e8", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold self-start"
            style={{ padding: "0.7rem 2rem", fontSize: "0.7rem" }}
          >
            <span>Boek nu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

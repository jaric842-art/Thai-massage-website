/* ============================================================
   CONTACT / BOEKING — Koya Thai Massage
   Design: Sacred Jungle Noir — premium WhatsApp booking form
   WhatsApp: +32467042321
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  "Traditionele Thaise Massage",
  "Aroma Olie Massage",
  "Hot Stone Massage",
  "Voetreflexologie",
  "Rug, Nek & Schouder Massage",
  "Zwangerschapsmassage",
  "Sportmassage",
  "Combinatiemassage",
];

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
];

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}

const EMPTY: FormData = { name: "", phone: "", date: "", time: "", service: "", notes: "" };

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = (data: FormData) => {
    const e: Partial<FormData> = {};
    if (!data.name.trim()) e.name = "Naam is verplicht";
    if (!data.phone.trim()) e.phone = "Telefoonnummer is verplicht";
    if (!data.date) e.date = "Datum is verplicht";
    if (!data.time) e.time = "Tijdstip is verplicht";
    if (!data.service) e.service = "Kies een behandeling";
    return e;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const e = validate(updated);
      setErrors(e);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    setTouched(allTouched as any);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const msg =
      `Hallo, ik wil graag een afspraak maken.\n\n` +
      `Naam: ${form.name}\n` +
      `Telefoon: ${form.phone}\n` +
      `Gewenste datum: ${form.date}\n` +
      `Gewenst tijdstip: ${form.time}\n` +
      `Behandeling: ${form.service}\n` +
      `Notities: ${form.notes || "—"}\n\n` +
      `Gelieve beschikbaarheid te bevestigen. Alvast bedankt!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/32467042321?text=${encoded}`, "_blank");
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(198,168,107,0.2)",
    padding: "0.9rem 1rem",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 300,
    color: "#f5f1e8",
    outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease",
    borderRadius: "0",
    appearance: "none" as any,
    WebkitAppearance: "none" as any,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.62rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(198,168,107,0.75)",
    display: "block",
    marginBottom: "0.45rem",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.68rem",
    color: "rgba(220,100,80,0.85)",
    marginTop: "0.35rem",
    letterSpacing: "0.05em",
  };

  const fieldBorder = (field: keyof FormData) =>
    touched[field] && errors[field]
      ? "rgba(220,100,80,0.6)"
      : "rgba(198,168,107,0.2)";

  // Today's date as min for date picker
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(198,168,107,0.3), transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(15,42,31,0.3) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="fade-in text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-10 h-px" style={{ background: "#c6a86b" }} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c6a86b" }}>
                Afspraak maken
              </span>
              <div className="w-10 h-px" style={{ background: "#c6a86b" }} />
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#f5f1e8",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}>
              Boek uw{" "}
              <span style={{ color: "#c6a86b", fontStyle: "italic" }}>behandeling</span>
            </h2>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 300,
              color: "rgba(245,241,232,0.45)",
              lineHeight: 1.8,
            }}>
              Maak uw afspraak in minder dan 1 minuut.
            </p>
          </div>

          {/* Contact info strip */}
          <div className="fade-in flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: "📍", label: "Duffel, België" },
              { icon: "📞", label: "+32 467 04 23 21" },
              { icon: "🕐", label: "Op afspraak — Ma t/m Za" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "rgba(245,241,232,0.5)", letterSpacing: "0.05em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div
            className="fade-in"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(198,168,107,0.15)",
              padding: "2.5rem",
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>

                {/* Full name */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Volledige naam <span style={{ color: "#c6a86b" }}>*</span></label>
                  <input
                    type="text"
                    placeholder="Uw voor- en achternaam"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.6)")}
                    onBlur={(e) => { e.target.style.borderColor = fieldBorder("name"); handleBlur("name"); }}
                    style={{ ...inputBase, borderColor: fieldBorder("name") }}
                  />
                  {touched.name && errors.name && <p style={errorStyle}>{errors.name}</p>}
                </div>

                {/* Phone */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Telefoonnummer <span style={{ color: "#c6a86b" }}>*</span></label>
                  <input
                    type="tel"
                    placeholder="+32 4XX XX XX XX"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.6)")}
                    onBlur={(e) => { e.target.style.borderColor = fieldBorder("phone"); handleBlur("phone"); }}
                    style={{ ...inputBase, borderColor: fieldBorder("phone") }}
                  />
                  {touched.phone && errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>Gewenste datum <span style={{ color: "#c6a86b" }}>*</span></label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.6)")}
                    onBlur={(e) => { e.target.style.borderColor = fieldBorder("date"); handleBlur("date"); }}
                    style={{ ...inputBase, borderColor: fieldBorder("date"), colorScheme: "dark" }}
                  />
                  {touched.date && errors.date && <p style={errorStyle}>{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label style={labelStyle}>Gewenst tijdstip <span style={{ color: "#c6a86b" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.6)")}
                      onBlur={(e) => { e.target.style.borderColor = fieldBorder("time"); handleBlur("time"); }}
                      style={{ ...inputBase, borderColor: fieldBorder("time"), cursor: "pointer" }}
                    >
                      <option value="" disabled style={{ background: "#1a1a1a" }}>Kies tijdstip</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t} style={{ background: "#1a1a1a" }}>{t}</option>
                      ))}
                    </select>
                    <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "rgba(198,168,107,0.5)", pointerEvents: "none", fontSize: "0.7rem" }}>▼</div>
                  </div>
                  {touched.time && errors.time && <p style={errorStyle}>{errors.time}</p>}
                </div>

                {/* Service */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Behandeling <span style={{ color: "#c6a86b" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.6)")}
                      onBlur={(e) => { e.target.style.borderColor = fieldBorder("service"); handleBlur("service"); }}
                      style={{ ...inputBase, borderColor: fieldBorder("service"), cursor: "pointer" }}
                    >
                      <option value="" disabled style={{ background: "#1a1a1a" }}>Kies uw behandeling</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} style={{ background: "#1a1a1a" }}>{s}</option>
                      ))}
                    </select>
                    <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "rgba(198,168,107,0.5)", pointerEvents: "none", fontSize: "0.7rem" }}>▼</div>
                  </div>
                  {touched.service && errors.service && <p style={errorStyle}>{errors.service}</p>}
                </div>

                {/* Notes */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Extra bericht / opmerkingen</label>
                  <textarea
                    placeholder="Eventuele opmerkingen, klachten of wensen..."
                    rows={3}
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(198,168,107,0.2)")}
                    style={{ ...inputBase, resize: "vertical", minHeight: "90px" }}
                  />
                </div>

              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(198,168,107,0.1)", margin: "1.75rem 0" }} />

              {/* Submit button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1.1rem 2rem",
                  background: "#25D366",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#fff",
                  transition: "background 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#1ebe5d";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 32px rgba(37,211,102,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#25D366";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(37,211,102,0.2)";
                }}
              >
                {/* WhatsApp icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Boek via WhatsApp</span>
              </button>

              {/* Sub text */}
              <p style={{
                textAlign: "center",
                marginTop: "0.85rem",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 300,
                color: "rgba(245,241,232,0.3)",
                letterSpacing: "0.05em",
                lineHeight: 1.6,
              }}>
                U wordt doorgestuurd naar WhatsApp om uw aanvraag te versturen.
              </p>
            </form>
          </div>

        </div>
      </div>

      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.6) sepia(1) saturate(2) hue-rotate(5deg);
          cursor: pointer;
          opacity: 0.6;
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(245,241,232,0.2);
        }
        select option {
          background: #1a1a1a;
          color: #f5f1e8;
        }
        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   HOME — Koya Thai Massage
   Design: Sacred Jungle Noir — dark luxury Thai spa
   Sections: Navbar, Hero, About, Massages, Atmosphere, WhyKoya, CTA, Contact, Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Massages from "@/components/Massages";
import Atmosphere from "@/components/Atmosphere";
import Gallery from "@/components/Gallery";
import WhyKoya from "@/components/WhyKoya";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0b0b0b", color: "#f5f1e8" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Massages />
      <Gallery />
      <Atmosphere />
      <WhyKoya />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

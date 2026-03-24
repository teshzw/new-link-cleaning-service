import "./index.css";

const SERVICES = [
  { title: "Office Cleaning", desc: "Daily and scheduled cleaning to keep offices clean, organized, and productive." },
  { title: "Commercial Cleaning", desc: "Reliable cleaning solutions for businesses, retail spaces, and commercial buildings." },
  { title: "Condominium Cleaning", desc: "Specialized cleaning for condos, including common areas, lobbies, and hallways." },
  { title: "Post-Construction Cleaning", desc: "Thorough cleaning after construction to remove dust, debris, and residues." },
  { title: "Move-In / Move-Out Cleaning", desc: "Deep cleaning services to prepare homes for new occupants or after moving out." },
  { title: "Floor Care", desc: "Professional floor maintenance including sweeping, mopping, polishing, and waxing." },
  { title: "Customized Cleaning Plans", desc: "Flexible cleaning plans tailored to your specific needs and schedule." },
];

const CONTACT = {
  owner: "Kert Roach",
  phone: "+16475687520",
  email: "info@newlinkcleaning.com",
};

const HERO_IMAGE2 = "/images/cleaner1.png";
const HERO_IMAGE4 = "/images/cleaner4.png";

/* FLOATING BUTTONS */
function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/16475687520?text=Hello%20I%20need%20cleaning%20service"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "14px 20px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        💬 WhatsApp
      </a>

      <a
        href="tel:+16475687520"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007BFF",
          color: "white",
          padding: "14px 20px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        📞 Call Now
      </a>
    </>
  );
}

export default function App() {
  return (
    <div style={{ width: "100%", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ color: "#1d4ed8", marginBottom: "6px" }}>
          New Link Cleaning Service
        </h1>
        <p style={{ color: "#ea580c", margin: 0 }}>
          Clean • Reliable • Professional
        </p>
      </header>

      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          alignItems: "center",
          padding: "40px 20px",
          background: "#f9fafb",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <h2 style={{ fontSize: "32px" }}>
            Trusted cleaning solutions for condominiums and commercial spaces
          </h2>

          <p style={{ color: "#4b5563", marginTop: "16px" }}>
            Led by {CONTACT.owner}, we deliver reliable, high-quality cleaning services with over 20 years of experience.
          </p>
        </div>

        <img
          src={HERO_IMAGE2}
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
          }}
        />
      </section>

      {/* SERVICES */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#1d4ed8" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              style={{
                padding: "20px",
                background: "#eff6ff",
                borderRadius: "12px",
                textAlign: "left",
              }}
            >
              <h3 style={{ color: "#1d4ed8" }}>{service.title}</h3>
              <p style={{ color: "#4b5563" }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "40px 20px", background: "#f9fafb" }}>
        <h2 style={{ color: "#1d4ed8", textAlign: "center" }}>
          About Kert Roach
        </h2>

        <p style={{ maxWidth: "800px", margin: "20px auto", color: "#4b5563", textAlign: "center" }}>
          Kert Roach brings over 20 years of experience in condominium and commercial cleaning. He leads and supervises all operations to ensure top-quality service and customer satisfaction.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#ea580c" }}>Contact Us</h2>

        <p><strong>{CONTACT.owner}</strong></p>
        <p><a href={`tel:${CONTACT.phone}`}>(647) 568-7520</a></p>
        <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px", color: "#888" }}>
        © 2026 New Link Cleaning Service
      </footer>

      <FloatingButtons />
    </div>
  );
}
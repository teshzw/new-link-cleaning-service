import "./index.css";

const SERVICES = [
  {
    title: "Office Cleaning",
    desc: "Daily and scheduled cleaning to keep offices clean, organized, and productive.",
  },
  {
    title: "Commercial Cleaning",
    desc: "Reliable cleaning solutions for businesses, retail spaces, and commercial buildings.",
  },
  {
    title: "Condominium Cleaning",
    desc: "Specialized cleaning for condos, including common areas, lobbies, and hallways.",
  },
  {
    title: "Post-Construction Cleaning",
    desc: "Thorough cleaning after construction to remove dust, debris, and residues.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    desc: "Deep cleaning services to prepare homes for new occupants or after moving out.",
  },
  {
    title: "Floor Care",
    desc: "Professional floor maintenance including sweeping, mopping, polishing, and waxing.",
  },
  {
    title: "Customized Cleaning Plans",
    desc: "Flexible cleaning plans tailored to your specific needs and schedule.",
  },
];

const CONTACT = {
  owner: "Kert Roach",
  phone: "+16475687520",
  email: "info@newlinkcleaning.com",
};

const HERO_IMAGE2 = "/images/cleaner1.png";
const HERO_IMAGE4 = "/images/cleaner4.png";

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
          padding: "12px 18px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        WhatsApp
      </a>

      <a
        href="tel:+16475687520"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007BFF",
          color: "white",
          padding: "12px 18px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        Call Now
      </a>
    </>
  );
}

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        padding: "16px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ color: "#1d4ed8", marginBottom: "6px" }}>
          New Link Cleaning Service
        </h1>
        <p style={{ color: "#ea580c", margin: 0 }}>
          Clean • Reliable • Professional
        </p>
      </header>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h2 style={{ fontSize: "clamp(22px, 5vw, 38px)" }}>
            Trusted cleaning solutions for condominiums and commercial spaces
          </h2>

          <p style={{ color: "#4b5563" }}>
            Led by {CONTACT.owner}, New Link Cleaning Service brings over 20
            years of experience delivering reliable, high-quality cleaning
            services tailored to your needs.
          </p>

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <img
              src={HERO_IMAGE4}
              alt="Cleaning team member"
              style={{
                width: "100%",
                maxWidth: "320px",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "260px" }}>
          <img
            src={HERO_IMAGE2}
            alt="Professional cleaning service"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "16px",
            }}
          />

          <div
            style={{
              background: "#f9fafb",
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ color: "#1d4ed8", marginTop: 0 }}>
              Why Clients Choose Us
            </h3>
            <ul style={{ paddingLeft: "18px", margin: 0 }}>
              <li>20+ years of experience</li>
              <li>Condominium specialist</li>
              <li>Reliable and detail-oriented service</li>
              <li>Professional communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1d4ed8" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              style={{
                padding: "14px",
                background: "#eff6ff",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#1d4ed8", marginTop: 0 }}>
                {service.title}
              </h3>
              <p style={{ color: "#4b5563", marginBottom: 0 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1d4ed8" }}>About Kert Roach</h2>

        <p style={{ color: "#4b5563" }}>
          Kert Roach is a highly experienced cleaning professional with over 20
          years of expertise in condominium and commercial cleaning services
          across Ontario.
        </p>

        <p style={{ color: "#4b5563" }}>
          He actively leads and supervises cleaning operations, ensuring that
          every team member performs their work according to professional
          standards and customer requirements.
        </p>

        <p style={{ color: "#4b5563" }}>
          His leadership ensures consistent quality, efficient service delivery,
          and clean, safe environments for all clients.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#ea580c" }}>Contact</h2>

        <p>
          <strong>{CONTACT.owner}</strong>
        </p>
        <p>
          <a href={`tel:${CONTACT.phone}`}>(647) 568-7520</a>
        </p>
        <p>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </section>

      <footer style={{ textAlign: "center", color: "#888" }}>
        © 2026 New Link Cleaning Service
      </footer>

      <FloatingButtons />
    </div>
  );
}
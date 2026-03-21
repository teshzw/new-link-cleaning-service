import "./index.css";

const SERVICES = [
  "Office Cleaning",
  "Commercial Cleaning",
  "Condominium Cleaning",
  "Post-Construction Cleaning",
  "Move-In / Move-Out Cleaning",
  "Floor Care",
  "Customized Cleaning Plans",
];

const CONTACT = {
  owner: "Kert Roach",
  phone: "437-673-5657",
  email: "kert.roach74@gmail.com",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px", 
        width: "100%", 
        margin: "0 auto",
        padding: "24px",
        color: "#222",
        lineHeight: 1.5,
        backgroundColor: "#ffffff",
      }}
    >
      <header
        style={{
          marginBottom: "32px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "16px",
        }}
      >
        <h1 style={{ margin: 0, color: "#1d4ed8" }}>New Link Cleaning Service</h1>
        <p style={{ margin: "8px 0 0", color: "#ea580c" }}>Clean • Fresh • Professional</p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        <div>
          <p
            style={{
              display: "inline-block",
              background: "#ffedd5",
              color: "#c2410c",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "14px",
              marginBottom: "16px",
            }}
          >
            Professional Cleaning Services in Ontario
          </p>

          <h2 style={{ fontSize: "40px", margin: "0 0 16px", color: "#1f2937" }}>
            Trusted cleaning solutions for condominiums and commercial spaces
          </h2>

          <p style={{ fontSize: "18px", color: "#4b5563", maxWidth: "700px" }}>
            Led by {CONTACT.owner}, New Link Cleaning Service brings over 20 years of hands-on
            experience in condominium and commercial cleaning, delivering reliable and high-quality
            results every time.
          </p>
        </div>

        <div>
          <img
            src={HERO_IMAGE}
            alt="Professional cleaner mopping a floor"
            style={{
              width: "100%",
              maxHeight: "360px",
              objectFit: "cover",
              borderRadius: "18px",
              display: "block",
              marginBottom: "20px",
            }}
          />

          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#1d4ed8" }}>Why Clients Choose Us</h3>
            <ul style={{ paddingLeft: "20px", marginBottom: 0 }}>
              <li>20+ years of experience</li>
              <li>Condominium specialist</li>
              <li>Reliable and detail-oriented service</li>
              <li>Professional communication and scheduling</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1d4ed8" }}>Our Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service}
              style={{
                border: "1px solid #dbeafe",
                borderRadius: "16px",
                padding: "18px",
                background: "#eff6ff",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#1d4ed8", fontSize: "18px" }}>{service}</h3>
              <p style={{ marginBottom: 0, color: "#4b5563" }}>
                High-quality cleaning tailored to your business needs and property type.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1d4ed8" }}>About Kert Roach</h2>
        <p style={{ color: "#4b5563", maxWidth: "800px" }}>
          Kert Roach is an experienced cleaning professional with more than 20 years of expertise,
          especially in condominium and commercial cleaning. His commitment to quality, reliability,
          and client satisfaction makes New Link Cleaning Service a trusted choice for property
          managers and businesses.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#ea580c" }}>Contact Us</h2>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "20px",
            background: "#fff7ed",
            maxWidth: "500px",
          }}
        >
          <p>
            <strong>Owner:</strong> {CONTACT.owner}
          </p>
          <p>
            <strong>Phone:</strong> <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #ddd", paddingTop: "16px", color: "#6b7280" }}>
        © 2026 New Link Cleaning Service
      </footer>
    </div>
  );
}
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
  phone: "437-673-5657",
  email: "kert.roach74@gmail.com",
};

const HERO_IMAGE2 = "/images/cleaner1.png";
const HERO_IMAGE3 = "/images/cleaner2.png";
const HERO_IMAGE4 = "/images/cleaner4.png";
const HERO_IMAGE5 = "/images/cleaner5.png";

export default function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>

      {/* HEADER */}
      <header style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "#1d4ed8" }}>New Link Cleaning Service</h1>
        <p style={{ color: "#ea580c" }}>
          Clean • Reliable • Professional
        </p>
      </header>

      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 40px)" }}>
            Trusted cleaning solutions for condominiums and commercial spaces
          </h2>

          <p style={{ color: "#4b5563" }}>
            Led by {CONTACT.owner}, New Link Cleaning Service brings over 20 years of experience
            delivering reliable, high-quality cleaning services tailored to your needs.
          </p>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={HERO_IMAGE4}
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "280px" }}>
          <img
            src={HERO_IMAGE2}
            style={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "12px",
              display: "block",
              margin: "0 auto 20px",
            }}
          />

          <div style={{ background: "#f9fafb", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ color: "#1d4ed8" }}>Why Clients Choose Us</h3>
            <ul>
              <li>20+ years of experience</li>
              <li>Condominium specialist</li>
              <li>Reliable and detail-oriented service</li>
              <li>Professional communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1d4ed8" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              style={{
                padding: "16px",
                background: "#eff6ff",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#1d4ed8" }}>{service.title}</h3>
              <p style={{ color: "#4b5563" }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ color: "#1d4ed8" }}>About Kert Roach</h2>

        <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
          Kert Roach is a highly experienced cleaning professional with over 20 years of expertise
          in condominium and commercial cleaning services across Ontario.
        </p>

        <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
          He actively leads and supervises cleaning operations, ensuring that every team member
          performs their work according to professional standards and customer requirements.
        </p>

        <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
          His leadership ensures consistent quality, efficient service delivery, and clean,
          safe environments for all clients.
        </p>

        <div
          style={{
            background: "#eff6ff",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          ✔ 20+ Years Experience <br />
          ✔ Condominium & Commercial Specialist <br />
          ✔ Strong Team Leadership <br />
          ✔ Customer-Focused Service
        </div>
      </section>

      {/* IMAGE ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <img src={HERO_IMAGE3} style={{ width: "100%", maxWidth: "300px", borderRadius: "12px" }} />
        <img src={HERO_IMAGE5} style={{ width: "100%", maxWidth: "200px", borderRadius: "12px" }} />
      </div>

      {/* CONTACT */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#ea580c" }}>Contact</h2>

        <p><strong>{CONTACT.owner}</strong></p>
        <p><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></p>
        <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", color: "#888" }}>
        © 2026 New Link Cleaning Service
      </footer>
    </div>
  );
}
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

const LOGO = "/images/logo.png";
const HERO_IMAGE1 = "/images/cleaner1.png";
const HERO_IMAGE2 = "/images/cleaner4.png";

/* FLOATING BUTTONS */
function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/16475687520"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("#25D366", "78px")}
      >
        💬 WhatsApp
      </a>
      <a href="tel:+16475687520" style={btnStyle("#007BFF", "18px")}>
        📞 Call Now
      </a>
    </>
  );
}

const btnStyle = (bg: string, bottom: string) => ({
  position: "fixed" as const,
  bottom,
  right: "16px",
  backgroundColor: bg,
  color: "white",
  padding: "12px 16px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
  zIndex: 1000,
});

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", overflowX: "hidden" }}>
      {/* HEADER */}
      <header style={{ padding: "20px 16px", borderBottom: "1px solid #eee" }}>
        <div style={containerFlex}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <img
              src={LOGO}
              alt="New Link Cleaning Service logo"
              style={{ width: "70px", borderRadius: "10px" }}
            />
            <div>
              <h1 style={{ color: "#1d4ed8", fontSize: "clamp(24px,4vw,34px)", margin: 0 }}>
                New Link Cleaning Service
              </h1>
              <p style={{ color: "#ea580c", fontSize: "14px", margin: "4px 0 0 0" }}>
                Clean • Reliable • Professional
              </p>
            </div>
          </div>

          <a href="tel:+16475687520" style={callBtn}>
            📞 Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={section}>
        <div style={containerFlex}>
          <div style={{ flex: 1, maxWidth: "500px" }}>
            <h2 style={{ fontSize: "clamp(24px,5vw,38px)", marginTop: 0 }}>
              Trusted cleaning solutions for condominiums and commercial spaces
            </h2>
            <p style={text}>
              Led by {CONTACT.owner}, we deliver reliable, high-quality cleaning services with over 20 years of experience.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="tel:+16475687520" style={callBtn}>Book by Phone</a>
              <a href="https://wa.me/16475687520" style={waBtn}>WhatsApp</a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[HERO_IMAGE1, HERO_IMAGE2].map((img) => (
              <img key={img} src={img} alt="Cleaning service" style={heroImg} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={section}>
        <div style={cardBox}>
          <h2 style={{ color: "#1d4ed8", marginTop: 0 }}>Why Clients Choose Us</h2>
          <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: 1.8 }}>
            <li>20+ years experience</li>
            <li>Condominium specialist</li>
            <li>Reliable & detailed service</li>
            <li>Professional communication</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={{ textAlign: "center", color: "#1d4ed8", marginTop: 0 }}>Our Services</h2>

        <div style={grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className="card" style={serviceCard}>
              <h3 style={{ marginTop: 0 }}>{s.title}</h3>
              <p style={{ marginBottom: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section style={section}>
        <h2 style={{ textAlign: "center", color: "#1d4ed8", marginTop: 0 }}>
          Book a Cleaning Service
        </h2>

        <p style={{ textAlign: "center", color: "#555", marginBottom: "10px" }}>
          Monday – Saturday: 8:00 AM – 6:00 PM <br />
          Sunday: Closed
        </p>

        <form
          action="https://formsubmit.co/info@newlinkcleaning.com"
          method="POST"
          style={form}
        >
          <input type="hidden" name="_subject" value="New Booking Request" />
          <input type="hidden" name="_captcha" value="false" />

          <input name="name" placeholder="Name" required />
          <input name="phone" placeholder="Phone" required />
          <input type="date" name="date" required />
          <input type="time" name="time" required />

          <select name="service" required>
            <option value="">Select Service</option>
            {SERVICES.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
          </select>

          <select name="schedule">
            <option value="">Preferred Time</option>
            <option>Morning (8 AM – 12 PM)</option>
            <option>Afternoon (12 PM – 4 PM)</option>
            <option>Evening (4 PM – 6 PM)</option>
          </select>

          <textarea name="message" placeholder="Details..." rows={4} />

          <button type="submit" style={submitBtn}>
            Submit
          </button>
        </form>
      </section>

      {/* CONTACT */}
      <section style={section}>
        <h2 style={{ color: "#ea580c", textAlign: "center", marginTop: 0 }}>Contact Us</h2>
        <p style={{ textAlign: "center", margin: "6px 0" }}>{CONTACT.owner}</p>
        <p style={{ textAlign: "center", margin: "6px 0" }}>{CONTACT.phone}</p>
        <p style={{ textAlign: "center", margin: "6px 0" }}>{CONTACT.email}</p>
      </section>

      <footer style={{ textAlign: "center", padding: "20px" }}>
        © 2026 New Link Cleaning Service
      </footer>

      <FloatingButtons />
    </div>
  );
}

/* STYLES */
const section = { padding: "40px 16px" };

const containerFlex = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const text = { color: "#555", margin: "15px 0", lineHeight: 1.6 };

const heroImg = {
  width: "100%",
  maxWidth: "320px",
  borderRadius: "12px",
};

const cardBox = {
  background: "#eef4ff",
  padding: "20px",
  borderRadius: "12px",
  maxWidth: "700px",
  margin: "0 auto",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
  gap: "16px",
  marginTop: "20px",
};

const serviceCard = {
  background: "#eef4ff",
  padding: "16px",
  borderRadius: "10px",
};

const form = {
  maxWidth: "400px",
  margin: "20px auto",
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
};

const submitBtn = {
  background: "#1d4ed8",
  color: "white",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const callBtn = {
  background: "#007BFF",
  color: "white",
  padding: "10px 14px",
  borderRadius: "20px",
  textDecoration: "none",
};

const waBtn = {
  background: "#25D366",
  color: "white",
  padding: "10px 14px",
  borderRadius: "20px",
  textDecoration: "none",
};
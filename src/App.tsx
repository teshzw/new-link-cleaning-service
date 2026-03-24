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

const HERO_IMAGE1 = "/images/cleaner1.png";
const HERO_IMAGE2 = "/images/cleaner4.png";
const LOGO = "/images/logo.png";

function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/16475687520?text=Hello%20I%20need%20cleaning%20service"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "78px",
          right: "16px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px 16px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
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
          bottom: "18px",
          right: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          padding: "12px 16px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
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
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        backgroundColor: "#ffffff",
        overflowX: "hidden",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "20px 16px",
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={LOGO}
              alt="New Link Cleaning Service logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                borderRadius: "12px",
                background: "#fff",
              }}
            />
            <div>
              <h1
                style={{
                  margin: 0,
                  color: "#1d4ed8",
                  fontSize: "clamp(24px, 4vw, 34px)",
                  lineHeight: 1.1,
                }}
              >
                New Link Cleaning Service
              </h1>
              <p
                style={{
                  color: "#ea580c",
                  margin: "6px 0 0 0",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Clean • Reliable • Professional
              </p>
            </div>
          </div>

          <a
            href="tel:+16475687520"
            style={{
              background: "#007BFF",
              color: "white",
              padding: "12px 18px",
              borderRadius: "24px",
              textDecoration: "none",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            📞 (647) 568-7520
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          background: "#f9fafb",
          padding: "clamp(24px, 5vw, 56px) 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              flex: "1 1 340px",
              maxWidth: "520px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 5vw, 40px)",
                lineHeight: 1.15,
                marginTop: 0,
                marginBottom: "16px",
              }}
            >
              Trusted cleaning solutions for condominiums and commercial spaces
            </h2>

            <p
              style={{
                color: "#4b5563",
                marginTop: "0",
                marginBottom: "20px",
                fontSize: "16px",
                lineHeight: 1.6,
              }}
            >
              Led by {CONTACT.owner}, we deliver reliable, high-quality cleaning
              services with over 20 years of experience. We focus on detail,
              professionalism, and consistent customer satisfaction.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <a
                href="tel:+16475687520"
                style={{
                  background: "#1d4ed8",
                  color: "white",
                  padding: "12px 18px",
                  borderRadius: "24px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Book by Phone
              </a>

              <a
                href="https://wa.me/16475687520?text=Hello%20I%20need%20cleaning%20service"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366",
                  color: "white",
                  padding: "12px 18px",
                  borderRadius: "24px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Book by WhatsApp
              </a>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 320px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <img
              src={HERO_IMAGE1}
              alt="Professional cleaner working"
              style={{
                width: "100%",
                maxWidth: "360px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            />
            <img
              src={HERO_IMAGE2}
              alt="Cleaning service in action"
              style={{
                width: "100%",
                maxWidth: "360px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "clamp(24px, 4vw, 40px) 16px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "#eff6ff",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h2
            style={{
              color: "#1d4ed8",
              marginTop: 0,
              marginBottom: "14px",
              textAlign: "center",
            }}
          >
            Why Clients Choose Us
          </h2>

          <ul
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#374151",
              lineHeight: 1.8,
              paddingLeft: "20px",
            }}
          >
            <li>20+ years of cleaning experience</li>
            <li>Condominium and commercial cleaning specialist</li>
            <li>Reliable, detail-oriented service</li>
            <li>Professional communication and customer care</li>
            <li>Flexible cleaning plans based on your needs</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "clamp(24px, 5vw, 48px) 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              color: "#1d4ed8",
              textAlign: "center",
              marginTop: 0,
              marginBottom: "24px",
              fontSize: "clamp(26px, 4vw, 34px)",
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.title}
                style={{
                  padding: "20px",
                  background: "#eff6ff",
                  borderRadius: "14px",
                  textAlign: "left",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  style={{
                    color: "#1d4ed8",
                    marginTop: 0,
                    marginBottom: "10px",
                    fontSize: "22px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "15px",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "clamp(24px, 5vw, 48px) 16px",
          background: "#f9fafb",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1d4ed8",
              marginTop: 0,
              fontSize: "clamp(26px, 4vw, 34px)",
            }}
          >
            About Kert Roach
          </h2>

          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.8,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Kert Roach brings over 20 years of experience in condominium and
            commercial cleaning. He actively leads and supervises operations to
            ensure quality work, professional standards, and customer
            satisfaction.
          </p>

          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.8,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Our goal is to provide clean, healthy, and professional environments
            for every client we serve.
          </p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section
        style={{
          padding: "clamp(24px, 5vw, 50px) 16px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1d4ed8",
              marginTop: 0,
              fontSize: "clamp(26px, 4vw, 34px)",
            }}
          >
            Book a Cleaning Service
          </h2>

          <p
            style={{
              color: "#4b5563",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Send us your request and we will get back to you as soon as
            possible.
          </p>

          <form
            action="https://formsubmit.co/info@newlinkcleaning.com"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              textAlign: "left",
            }}
          >
            <input type="hidden" name="_subject" value="New Booking Request" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
              }}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
              }}
            />

            <select
              name="service"
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
              }}
            >
              <option value="">Select Service</option>
              <option>Office Cleaning</option>
              <option>Commercial Cleaning</option>
              <option>Condominium Cleaning</option>
              <option>Post-Construction Cleaning</option>
              <option>Move-In / Move-Out Cleaning</option>
              <option>Floor Care</option>
              <option>Customized Cleaning Plans</option>
            </select>

            <textarea
              name="message"
              placeholder="Details (location, size, date, frequency...)"
              rows={5}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#1d4ed8",
                color: "white",
                padding: "14px 18px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit Booking
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "clamp(24px, 5vw, 48px) 16px",
          background: "#f9fafb",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#ea580c",
              marginTop: 0,
              fontSize: "clamp(26px, 4vw, 34px)",
            }}
          >
            Contact Us
          </h2>

          <p style={{ marginBottom: "8px" }}>
            <strong>{CONTACT.owner}</strong>
          </p>
          <p style={{ marginBottom: "8px" }}>
            <a
              href={`tel:${CONTACT.phone}`}
              style={{ color: "#1d4ed8", textDecoration: "none" }}
            >
              (647) 568-7520
            </a>
          </p>
          <p style={{ marginBottom: 0 }}>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{ color: "#1d4ed8", textDecoration: "none" }}
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "24px 16px 110px",
          color: "#888",
          fontSize: "14px",
        }}
      >
        © 2026 New Link Cleaning Service
      </footer>

      <FloatingButtons />
    </div>
  );
}
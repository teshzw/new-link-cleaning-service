const services = [
  {
    title: "Office Cleaning",
    desc: "Daily and scheduled cleaning for offices that need a clean, organized, and productive environment.",
  },
  {
    title: "Commercial Cleaning",
    desc: "Reliable cleaning for businesses, retail spaces, and commercial buildings.",
  },
  {
    title: "Condominium Cleaning",
    desc: "Specialized cleaning for condos, including common areas, lobbies, and hallways.",
  },
  {
    title: "Post-Construction Cleaning",
    desc: "Detailed cleaning to remove dust, debris, and residue after construction or renovation.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    desc: "Deep cleaning to prepare homes and apartments for new occupants or after moving out.",
  },
  {
    title: "Floor Care",
    desc: "Professional floor maintenance including sweeping, mopping, polishing, and waxing.",
  },
  {
    title: "Customized Cleaning Plans",
    desc: "Flexible cleaning plans tailored to your property, schedule, and budget.",
  },
];

const reasons = [
  "20+ years of experience",
  "Condominium specialist",
  "Reliable and detailed service",
  "Professional communication",
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <h1 className="text-lg font-bold text-blue-700">
              New Link Cleaning Service
            </h1>
            <p className="text-xs text-orange-500">Clean • Fresh • Professional</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a href="#booking" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              Book
            </a>

            <a href="tel:+16475687520" className="rounded-full border px-4 py-2 text-sm text-blue-700">
              Call
            </a>

            <a href="mailto:info@newlinkcleaning.com" className="rounded-full bg-orange-500 px-4 py-2 text-sm text-white">
              Email
            </a>

            <a href="https://privateemail.com" target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 text-sm">
              Mailbox
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main>
        <section className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">
              Trusted cleaning solutions for condominiums and commercial spaces
            </h2>

            <p className="mt-4 text-slate-600">
              Led by Kert Roots, we deliver reliable, high-quality cleaning services with over 20 years of experience.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#booking" className="bg-blue-600 text-white px-5 py-2 rounded-full">
                Book
              </a>

              <a href="https://wa.me/16475687520" className="bg-green-500 text-white px-5 py-2 rounded-full">
                WhatsApp
              </a>
            </div>

            <div className="mt-6 border p-4 rounded-xl bg-slate-50">
              <h3 className="font-bold text-blue-700">Why Clients Choose Us</h3>
              <ul className="mt-2 text-sm">
                {reasons.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              className="rounded-xl"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-4 pb-10">
          <h3 className="text-xl font-bold text-blue-700 text-center">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {services.map((s) => (
              <div key={s.title} className="border p-4 rounded-xl">
                <h4 className="font-bold">{s.title}</h4>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking" className="mx-auto max-w-3xl px-4 py-10">
          <h3 className="text-xl font-bold text-blue-700 text-center">Book Service</h3>

          <form className="mt-4 grid gap-3">
            <input placeholder="Name" className="border p-2 rounded" />
            <input placeholder="Phone" className="border p-2 rounded" />
            <textarea placeholder="Details" className="border p-2 rounded" />

            <button className="bg-blue-600 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </section>
      </main>

    </div>
  );
}
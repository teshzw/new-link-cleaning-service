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

export default function NewLinkCleaningCompactLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-blue-700 sm:text-xl">
              New Link Cleaning Service
            </h1>
            <p className="text-xs text-orange-500">Clean • Fresh • Professional</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#booking"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Book Now
            </a>
            <a
              href="tel:+14167997692"
              className="hidden rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:inline-flex"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-14">
          <div className="order-2 md:order-1">
            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Trusted Cleaning Services in Ontario
            </div>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Trusted cleaning solutions for condominiums and commercial spaces
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Led by Kert Roots, we deliver reliable, high-quality cleaning services with over 20 years of experience. We focus on clean results, professional service, and customer satisfaction.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Book by Form
              </a>
              <a
                href="https://wa.me/14167997692"
                className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-base font-bold text-blue-700">Why Clients Choose Us</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {reasons.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                alt="Professional cleaner mopping floor"
                className="h-72 w-full rounded-3xl object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80"
                alt="Professional cleaner cleaning glass"
                className="h-72 w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <h3 className="text-2xl font-bold text-blue-700">Our Services</h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical cleaning services for offices, condominiums, retail spaces, and residential moves.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h4 className="text-base font-bold text-slate-900">{service.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-700">Book a Cleaning Service</h3>
              <p className="mt-2 text-sm text-slate-600">
                Monday – Saturday: 8:00 AM – 6:00 PM<br />Sunday: Closed
              </p>
            </div>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                />
                <input
                  type="time"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500">
                  <option>Select service</option>
                  <option>Office Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Condominium Cleaning</option>
                  <option>Post-Construction Cleaning</option>
                  <option>Move-In / Move-Out Cleaning</option>
                  <option>Floor Care</option>
                  <option>Customized Cleaning Plans</option>
                </select>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                />
              </div>

              <textarea
                placeholder="Additional details"
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/14167997692"
          className="rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
        >
          WhatsApp
        </a>
        <a
          href="tel:+14167997692"
          className="rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}

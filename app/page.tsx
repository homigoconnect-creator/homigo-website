export default function HomigoLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-orange-400 flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold">H</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">HOMIGO</h1>
              <p className="text-sm text-slate-500">Better Services. Better Homes.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#why" className="hover:text-orange-500 transition">Why Homigo</a>
            <a href="#partners" className="hover:text-orange-500 transition">Partners</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </nav>

          <button className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_orange,_transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm mb-6">
              Trusted Local Home Services in Kozhikode
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Trusted Home
              <span className="text-orange-400"> Services </span>
              Delivered Right.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Verified maids, electricians, plumbers, and home care professionals — all managed through a trusted and reliable platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-2xl font-semibold shadow-xl transition">
                Book a Service
              </button>

              <button className="border border-slate-500 hover:border-orange-400 hover:text-orange-300 px-7 py-4 rounded-2xl font-semibold transition">
                Become a Partner
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>✔ Verified Professionals</div>
              <div>✔ OTP-Based Service</div>
              <div>✔ Trusted Support</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl text-slate-900">
              <div className="grid grid-cols-2 gap-5">
                {[
                  ['🧹', 'House Maids'],
                  ['⚡', 'Electricians'],
                  ['🔧', 'Plumbers'],
                  ['❤️', 'Home Care'],
                ].map(([icon, title]) => (
                  <div
                    key={title}
                    className="bg-slate-50 hover:bg-orange-50 border border-slate-100 rounded-2xl p-6 text-center transition shadow-sm"
                  >
                    <div className="text-4xl mb-3">{icon}</div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <p className="font-semibold text-lg mb-2">Why Families Choose Homigo</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reliable professionals, transparent process, and support when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Services Built for Everyday Needs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From daily home support to skilled professionals and care services — Homigo connects you with trusted service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'House Maids',
                desc: 'Reliable and verified home support professionals.',
                icon: '🧹',
              },
              {
                title: 'Electricians',
                desc: 'Experienced professionals for safe electrical work.',
                icon: '⚡',
              },
              {
                title: 'Plumbers',
                desc: 'Quick and dependable plumbing solutions.',
                icon: '🔧',
              },
              {
                title: 'Home Care',
                desc: 'Compassionate caregivers for home support.',
                icon: '❤️',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Homigo */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Why Homigo
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              More Than a Marketplace.
              <br />
              A Trusted Service Network.
            </h2>

            <div className="space-y-5 text-slate-700 text-lg">
              <div>✔ Verified & trusted professionals</div>
              <div>✔ OTP-based service validation</div>
              <div>✔ Transparent pricing system</div>
              <div>✔ Dedicated customer support</div>
              <div>✔ Local operations team in Kozhikode</div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-[2rem] p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Your Safety Matters</h3>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Every provider is verified before onboarding.
              </p>

              <p>
                We ensure structured service delivery and customer support throughout the process.
              </p>

              <p>
                Homigo focuses on building long-term trust between households and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partners" className="py-24 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Become a Homigo Service Partner
          </h2>

          <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-orange-50">
            Get regular work opportunities, build your reputation, and grow your business with a trusted local platform.
          </p>

          <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold shadow-xl transition">
            Join Now
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let’s Build Better Homes Together</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Homigo is focused on creating trusted home service experiences in Kozhikode through verified professionals and strong local operations.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5 shadow-xl">
            <div>
              <p className="text-slate-400 text-sm">Phone</p>
              <p className="text-xl font-semibold">+91 9567304092</p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-xl font-semibold">homigo.connect@gmail.com</p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Website</p>
              <p className="text-xl font-semibold">www.homigoservice.com</p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-xl font-semibold">Kozhikode, Kerala</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 text-center py-6 text-sm">
        © 2026 Homigo. Better Services. Better Homes.
      </footer>
    </div>
  );
}

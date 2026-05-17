import Image from "next/image";

const services = [
  {
    title: "House Maids",
    desc: "Reliable and verified home support professionals.",
    icon: "🧹",
  },
  {
    title: "Electricians",
    desc: "Experienced professionals for safe electrical work.",
    icon: "⚡",
  },
  {
    title: "Plumbers",
    desc: "Quick and dependable plumbing solutions.",
    icon: "🔧",
  },
  {
    title: "Care Services",
    desc: "Compassionate caregivers for home support.",
    icon: "❤️",
  },
];

const promises = [
  "Fair opportunities",
  "Timely payments",
  "Respect and recognition",
  "Support when you need it",
  "Growth and long-term partnership",
];

const partnerBenefits = [
  {
    title: "More Work Opportunities",
    desc: "Get regular jobs in your area based on your skills.",
  },
  {
    title: "Timely & Secure Payments",
    desc: "Transparent payments, on time, every time.",
  },
  {
    title: "Build Your Reputation",
    desc: "Good ratings bring you more work and happy customers.",
  },
  {
    title: "We've Got Your Back",
    desc: "Our support team is always ready to help you.",
  },
  {
    title: "Grow with HOMIGO",
    desc: "Opportunities to learn, grow, and earn more.",
  },
];

const howItWorks = [
  {
    title: "Register",
    desc: "We collect your details and verify your documents.",
  },
  {
    title: "Get Verified",
    desc: "Once verified, your profile is activated on the platform.",
  },
  {
    title: "Receive Jobs",
    desc: "Get job requests based on your skills and availability.",
  },
  {
    title: "Complete & Earn",
    desc: "Do your best work and get paid on time.",
  },
  {
    title: "Grow Together",
    desc: "Build your ratings and grow your business with HOMIGO.",
  },
];

export default function HomigoLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/homigo_logo.PNG"
              alt="Homigo logo"
              width={44}
              height={44}
              className="w-11 h-11 rounded-2xl object-cover shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-wide">HOMIGO</h1>
              <p className="text-sm text-slate-500">Better Services. Better Homes.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#why" className="hover:text-orange-500 transition">Why HOMIGO</a>
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
              Verified maids, electricians, plumbers, and home care professionals &mdash; all managed through a trusted and reliable platform.
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
              <div>✓ Verified Professionals</div>
              <div>✓ OTP-Based Service</div>
              <div>✓ Trusted Support</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl text-slate-900">
              <div className="grid grid-cols-2 gap-5">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-slate-50 hover:bg-orange-50 border border-slate-100 rounded-2xl p-6 text-center transition shadow-sm"
                  >
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <p className="font-semibold text-lg mb-2">Why Families Choose HOMIGO</p>
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
              From daily home support to skilled professionals and care services &mdash; HOMIGO connects you with trusted service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service) => (
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

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                To connect skilled service professionals with homes that need them.
              </h2>
              <p className="text-slate-600 leading-relaxed mt-5">
                We do it through trust, technology, and strong relationships.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm">
              <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
                Our Vision
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                To become the most trusted service platform in every home and every community.
              </h2>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-2xl">
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-4">
              Homigo
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Your Skills. Our Platform. Better Tomorrow.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
              Join HOMIGO and grow your business with trust and pride.
            </p>
            <p className="text-orange-300 font-semibold mt-8">
              Verified. Trusted. Respected. That&apos;s the HOMIGO Promise.
            </p>
          </div>
        </div>
      </section>

      {/* Why HOMIGO */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Why HOMIGO
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              More Than a Marketplace.
              <br />
              A Trusted Service Network.
            </h2>

            <div className="space-y-5 text-slate-700 text-lg">
              <div>✓ Verified & trusted professionals</div>
              <div>✓ OTP-based service validation</div>
              <div>✓ Transparent pricing system</div>
              <div>✓ Dedicated customer support</div>
              <div>✓ Local operations team in Kozhikode</div>
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
                HOMIGO focuses on building long-term trust between households and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partners" className="py-24 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-orange-50 font-semibold uppercase tracking-widest mb-4">
              Proud Professionals. Trusted by Homes. Valued by Homigo.
            </p>
            <h2 className="text-5xl font-extrabold mb-6">
              Become a HOMIGO Service Partner
            </h2>
            <p className="text-xl leading-relaxed text-orange-50">
              Get regular work opportunities, build your reputation, and grow your business with a trusted local platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Our Promise To You</h3>
              <div className="space-y-4">
                {promises.map((promise) => (
                  <p key={promise} className="flex gap-3 text-slate-700">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{promise}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Why Partner With HOMIGO?</h3>
              <div className="space-y-5">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <p className="font-bold text-lg">{benefit.title}</p>
                    <p className="text-orange-50 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-5">
                {howItWorks.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-wide">{step.title}</p>
                      <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10 text-center">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
              We respect your time and your work.
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
              We believe in long-term relationships.
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
              We celebrate your hard work and success.
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-xl font-semibold mb-6">
              We ensure a safe and trustworthy environment for everyone.
            </p>
            <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold shadow-xl transition">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Better Homes Together</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              HOMIGO is focused on creating trusted home service experiences in Kozhikode through verified professionals and strong local operations.
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
        &copy; 2026 Homigo. Better Services. Better Homes.
      </footer>
    </div>
  );
}

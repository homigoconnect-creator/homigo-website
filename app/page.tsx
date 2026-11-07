import Image from "next/image";

const services = [
  { title: "House maids", copy: "Dependable everyday help from verified local professionals.", icon: "broom" },
  { title: "Plumbing", copy: "Prompt support for repairs, fittings and water-related issues.", icon: "tap" },
  { title: "Electrical", copy: "Skilled help for safer installations, repairs and maintenance.", icon: "bolt" },
  { title: "Drivers", copy: "Reliable local drivers for everyday travel and family commitments.", icon: "car" },
  { title: "Babysitting", copy: "Attentive in-home support for children and busy families.", icon: "heart" },
  { title: "Elderly care", copy: "Respectful companionship and practical support for older adults.", icon: "care" },
  { title: "Maternity care", copy: "Considerate at-home assistance for mothers and newborn routines.", icon: "mother" },
  { title: "Home nursing", copy: "Qualified care support arranged for recovery and daily health needs.", icon: "medical" },
];

const partnerBenefits = [
  "Regular opportunities near you",
  "Timely, transparent payments",
  "Recognition for quality work",
  "A local team ready to support you",
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const props = { viewBox: "0 0 24 24", width: 28, height: 28, "aria-hidden": true };
  if (name === "tap") return <svg {...props}><path d="M4 9h12a4 4 0 0 1 4 4v1M8 9V6h6M11 6V3M8 3h6M17 18s-2 2.2-2 3.4a2 2 0 0 0 4 0C19 20.2 17 18 17 18Z" /></svg>;
  if (name === "bolt") return <svg {...props}><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" /></svg>;
  if (name === "heart") return <svg {...props}><path d="M20.8 4.7a5.4 5.4 0 0 0-7.7 0L12 5.8l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7L12 21l8.8-8.6a5.4 5.4 0 0 0 0-7.7Z" /></svg>;
  if (name === "car") return <svg {...props}><path d="m5 16-1 2v2h2l1-2h10l1 2h2v-2l-1-2-2-7H7l-2 7Z" /><path d="M6 14h12M8 17h.01M16 17h.01" /></svg>;
  if (name === "care") return <svg {...props}><circle cx="12" cy="7" r="3" /><path d="M6 21v-3a6 6 0 0 1 12 0v3M3 13l3 2M21 13l-3 2" /></svg>;
  if (name === "mother") return <svg {...props}><path d="M9 5a3 3 0 1 0 6 0M7 21v-6a5 5 0 0 1 10 0v6M9 16c2.2 1.6 3.8 1.6 6 0" /><circle cx="12" cy="13" r="1.5" /></svg>;
  if (name === "medical") return <svg {...props}><path d="M9 3h6v5h5v6h-5v7H9v-7H4V8h5V3Z" /></svg>;
  return <svg {...props}><path d="m4 20 7.2-7.2M9 15l-3-3 8.5-8.5M4 20h5l4-4-5-5-4 4v5Z" /></svg>;
}

function ComingSoonButton({ compact = false }: { compact?: boolean }) {
  return (
    <span className="coming-wrap">
      <strong className="coming-tag">Coming soon · Dec 2026</strong>
      <span className={`button coming-button${compact ? " button-small" : ""}`} aria-disabled="true">Book a service</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Homigo home">
          <Image src="/homigo-logo-horizontal.svg" alt="Homigo" width={184} height={40} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#promise">Why Homigo</a>
          <a href="#partners">For partners</a>
        </nav>
        <ComingSoonButton compact />
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#services">Services</a><a href="#partners">For partners</a><a href="#contact">Contact</a></nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Home services, handled with care</p>
          <h1>Help at home.<br /><em>Without the runaround.</em></h1>
          <p className="lede">Homigo connects Kozhikode homes with verified maids, electricians, plumbers and care professionals—backed by a team close to home.</p>
          <div className="hero-actions">
            <ComingSoonButton />
            <a className="quiet-link" href="#partners">Join as a professional <Arrow /></a>
          </div>
          <div className="trust-list">
            <span>Verified people</span><span>Clear process</span><span>Local support</span>
          </div>
        </div>

        <div className="hero-art app-showcase">
          <Image src="/homigo-app-preview.png" alt="Preview of the Homigo mobile app showing its service categories and booking experience" fill priority sizes="(max-width: 940px) 100vw, 48vw" />
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-intro">
          <div><p className="eyebrow">Everyday help, thoughtfully arranged</p><h2>One trusted place for the people your home needs.</h2></div>
          <p>Tell us what needs doing. We&apos;ll help connect you with the right professional and support the service from request to completion.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="card-number">0{index + 1}</span>
              <div className="service-icon"><ServiceIcon name={service.icon} /></div>
              <h3>{service.title}</h3><p>{service.copy}</p>
              <span className="service-status">Available from Dec 2026</span>
            </article>
          ))}
        </div>
      </section>

      <section className="promise" id="promise">
        <div className="promise-visual">
          <Image src="/homigo-male-service-professionals.png" alt="Three Homigo home-service professionals outside a Kerala home" fill sizes="(max-width: 940px) 100vw, 50vw" />
          <p>Skilled people.<br />Backed by Homigo.</p>
        </div>
        <div className="promise-copy">
          <p className="eyebrow">The Homigo promise</p>
          <h2>Trust is not a feature.<br />It is the foundation.</h2>
          <p className="promise-lede">Homigo brings structure, accountability and a human touch to finding help at home.</p>
          <div className="promise-points">
            <article><span>01</span><div><h3>People you can welcome in</h3><p>Professionals are verified before joining the Homigo network.</p></div></article>
            <article><span>02</span><div><h3>A journey you can follow</h3><p>Clear communication and OTP-based service validation.</p></div></article>
            <article><span>03</span><div><h3>Support that stays nearby</h3><p>A local operations team in Kozhikode, ready when needed.</p></div></article>
          </div>
        </div>
      </section>

      <section className="interest section" id="interest">
        <div className="interest-copy">
          <p className="eyebrow">Be first in line</p>
          <h2>Tell us what your home may need.</h2>
          <p>Bookings begin in December 2026. Send a short enquiry now and the Homigo team can contact you closer to launch.</p>
          <div className="evidence-row"><span><b>01</b> Professional verification</span><span><b>02</b> OTP service validation</span><span><b>03</b> Kozhikode-based support</span></div>
        </div>
        <form className="request-form" action="mailto:homigo.connect@gmail.com" method="post" encType="text/plain">
          <div><label htmlFor="name">Your name</label><input id="name" name="Name" autoComplete="name" required placeholder="Enter your name" /></div>
          <div><label htmlFor="phone">Phone number</label><input id="phone" name="Phone" type="tel" autoComplete="tel" required placeholder="+91" /></div>
          <div><label htmlFor="service">Service needed</label><select id="service" name="Service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></div>
          <button className="button" type="submit">Request a callback <Arrow /></button>
          <small>This opens your email app with the enquiry details.</small>
        </form>
      </section>

      <section className="process section">
        <div className="center-title"><p className="eyebrow">Refreshingly straightforward</p><h2>From request to resolved.</h2></div>
        <div className="process-grid">
          <article><span>01</span><i /><h3>Share your need</h3><p>Choose a service and tell us a time that works for your home.</p></article>
          <article><span>02</span><i /><h3>Meet your professional</h3><p>We connect you with a verified local professional suited to the job.</p></article>
          <article><span>03</span><i /><h3>Get it taken care of</h3><p>Validate the visit, complete the service and reach us whenever you need help.</p></article>
        </div>
      </section>

      <section className="partners" id="partners">
        <div className="partner-copy">
          <p className="eyebrow light">For service professionals</p>
          <h2>Build your name.<br />Grow your work.</h2>
          <p>Homigo values the people behind every good service. Join a local platform designed to help your skill earn trust, recognition and regular opportunities.</p>
          <a className="button button-cream" href="mailto:homigo.connect@gmail.com?subject=Homigo%20service%20partner">Become a partner <Arrow /></a>
        </div>
        <div className="benefit-panel">
          <p className="panel-label">What you can expect</p>
          {partnerBenefits.map((benefit, index) => <div key={benefit}><span>0{index + 1}</span><strong>{benefit}</strong><b>✓</b></div>)}
        </div>
      </section>

      <section className="cta section" id="contact">
        <p className="eyebrow">Launching December 2026</p>
        <h2>Better help at home<br /><em>is on its way.</em></h2>
        <p>Bookings open in December. Until then, our local team is available for enquiries and partner onboarding.</p>
        <div><ComingSoonButton /><a className="quiet-link" href="mailto:homigo.connect@gmail.com">Talk to the Homigo team <Arrow /></a></div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/homigo-logo-horizontal.svg" alt="Homigo" width={174} height={38} /><p>Trusted home services, rooted in Kozhikode. Launching December 2026.</p></div>
        <div className="footer-column"><strong>Explore</strong><a href="#services">Services</a><a href="#promise">Why Homigo</a><a href="#partners">For partners</a></div>
        <div className="footer-column"><strong>Contact</strong><a href="tel:+919567304092">+91 95673 04092</a><a href="mailto:homigo.connect@gmail.com">homigo.connect@gmail.com</a><span>Kozhikode, Kerala</span></div>
        <small>© 2026 Homigo. Better services. Better homes.</small>
      </footer>
    </main>
  );
}

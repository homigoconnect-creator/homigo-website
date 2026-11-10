import Image from "next/image";
import Link from "next/link";
import CallbackForm from "./callback-form";

const services = [
  ["House help", "Regular assistance with everyday household work."],
  ["Plumbing", "Help with leaks, fittings and common plumbing repairs."],
  ["Electrical", "Support for household electrical repairs and installation."],
  ["Drivers", "Drivers for local travel and family requirements."],
  ["Babysitting", "At-home support for children and working parents."],
  ["Elderly care", "Practical assistance and companionship for older adults."],
  ["Maternity care", "At-home assistance during the postnatal period."],
  ["Home nursing", "Nursing support for recovery and ongoing care needs."],
];

const plannedSteps = [
  ["01", "Send a request", "Tell us the service, area and preferred time."],
  ["02", "Homigo confirms availability", "Our Kozhikode team will review the request and contact you."],
  ["03", "Service details are shared", "You receive the professional’s details before the visit."],
  ["04", "Complete and confirm", "The planned app flow includes OTP confirmation after the service."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="#top" aria-label="Homigo home"><Image src="/homigo-logo-horizontal.svg" alt="Homigo" width={170} height={38} priority /></Link>
        <nav aria-label="Primary navigation"><Link href="#services">Services</Link><Link href="#process">How it will work</Link><Link href="#contact">Contact</Link></nav>
        <a className="header-contact" href="https://wa.me/919567304092" target="_blank" rel="noreferrer">WhatsApp us</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Launching in Kozhikode · December 2026</p>
          <h1>Home services, arranged locally.</h1>
          <p className="intro">Homigo is preparing a single place to request household and care services in Kozhikode. We are currently building our service network and product.</p>
          <div className="hero-actions"><a className="primary-action" href="#waitlist">Request a callback</a><a className="text-link" href="#process">See the planned process</a></div>
          <p className="launch-note"><strong>Pre-launch notice:</strong> bookings are not open yet. The website explains the service Homigo is preparing.</p>
        </div>
        <div className="hero-visual">
          <Image className="worker-photo" src="/homigo-customer-welcome-hero.png" alt="An elderly homeowner welcoming a home-service professional at his Kerala home" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="product-preview">
            <Image src="/homigo-app-preview.png" alt="Homigo app concept showing the planned service categories and booking screen" width={842} height={601} />
            <p>Current app concept · final screens may change</p>
          </div>
        </div>
      </section>

      <section className="content-section" id="services">
        <div className="section-heading"><p className="kicker">Planned service categories</p><h2>Eight types of help for the home.</h2><p>Availability will depend on location and the service professionals in the Homigo network at launch.</p></div>
        <div className="service-list">{services.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading inverse"><p className="kicker">Planned process</p><h2>How Homigo will work.</h2><p>The intended workflow for requesting and completing a service through Homigo.</p></div>
        <div className="process-list">{plannedSteps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="verification-note"><strong>About professional checks</strong><p>Homigo is finalising its professional onboarding and verification policy. The complete process will be published before bookings open.</p></div>
      </section>

      <section className="waitlist-section" id="waitlist">
        <div><p className="kicker">Pre-launch enquiries</p><h2>Ask for a callback.</h2><p>Share the basic requirement through WhatsApp. This does not create a booking. A Homigo team member can contact you to understand demand before launch.</p></div>
        <CallbackForm services={services.map(([title]) => title)} />
      </section>

      <section className="founder-note">
        <p className="kicker">A message from the founders</p>
        <blockquote>“We started Homigo to make it easier for families in Kozhikode to find and coordinate everyday help at home. We are building carefully, listening locally and will communicate clearly about what is ready before we accept bookings.”</blockquote>
        <div className="signatures"><p><strong>Dr. Rafnas Kuruniyan</strong><span>Co-founder · Paediatrician</span></p><p><strong>Dr. Aneesh M. Koya</strong><span>Co-founder · Research Scientist, AI/ML</span></p></div>
        <p className="technical-partner">Technical partner: <strong>Askhalan</strong>, Full Stack Developer</p>
      </section>

      <footer id="contact">
        <div className="footer-main"><Image src="/homigo-logo-horizontal.svg" alt="Homigo" width={160} height={36} /><p><strong>Homigo</strong><br />Pre-launch home-services platform<br />Kozhikode, Kerala</p></div>
        <div><h3>Contact</h3><a href="tel:+919567304092">+91 95673 04092</a><a href="https://wa.me/919567304092" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:homigo.connect@gmail.com">homigo.connect@gmail.com</a></div>
        <div><h3>Information</h3><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><span>Launch planned: December 2026</span></div>
        <small>© 2026 Homigo. Preliminary website information; details may change before launch.</small>
      </footer>
    </main>
  );
}

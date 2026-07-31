import { useState, useEffect } from 'react';
import './App.css';

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav__inner">
          <a className="nav__brand" href="#home" aria-label="JAH Consulting LLC – home">
            JAH Consulting LLC
          </a>

          {/* Desktop links */}
          <nav aria-label="Site navigation">
            <ul className="nav__links">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="nav__link" href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a className="nav__link nav__cta" href="#contact">Get In Touch</a>
              </li>
            </ul>
          </nav>

          {/* Hamburger (mobile) */}
          <button
            className={`nav__hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav className={`nav__mobile${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {links.map((l) => (
          <a
            key={l.href}
            className="nav__mobile-link"
            href={l.href}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          className="nav__mobile-link"
          href="#contact"
          style={{ color: 'var(--color-accent)', fontWeight: 700 }}
          onClick={() => setMenuOpen(false)}
        >
          Get In Touch →
        </a>
      </nav>
    </header>
  );
}

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" aria-hidden="true" />
          <span className="t-caption">Strategic Consulting</span>
        </div>

        <h1 className="t-display hero__headline">
          Delivering Results<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
            With Precision &amp; Purpose
          </em>
        </h1>

        <p className="t-lead hero__subtext">
          JAH Consulting LLC partners with real estate investors, developers,
          and businesses to unlock growth, streamline operations, and maximise
          returns through expert guidance.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">Start a Conversation</a>
          <a className="btn btn--secondary" href="#services">Explore Services</a>
        </div>
      </div>

      <div className="hero__divider" aria-hidden="true" />
    </section>
  );
}

/* ─────────────────────────────────────────────
   Stats
───────────────────────────────────────────── */
function Stats() {
  const items = [
    { number: '10+', label: 'Years of Experience' },
    { number: '$50M+', label: 'Assets Consulted On' },
    { number: '75+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="stats">
      <div className="container">
        <div className="stats__grid">
          {items.map((s) => (
            <div key={s.label}>
              <div className="stat__number">{s.number}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Services
───────────────────────────────────────────── */
function Services() {
  const services = [
    {
      icon: '🏘️',
      title: 'Real Estate Strategy',
      body: 'End-to-end advisory for acquisitions, dispositions, and portfolio optimisation — from single-family flips to multi-unit development projects.',
    },
    {
      icon: '📊',
      title: 'Investment Analysis',
      body: 'Rigorous financial modelling, due diligence support, and market analysis to ensure every capital decision is backed by clear data.',
    },
    {
      icon: '⚙️',
      title: 'Operations & Process',
      body: 'Operational blueprints and systems that reduce friction, improve turnaround times, and increase project profitability.',
    },
    {
      icon: '📈',
      title: 'Financial Reporting',
      body: 'Custom dashboards, KPI tracking, and bespoke reporting frameworks that give stakeholders the clarity they need to act decisively.',
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section__header--centered">
          <span className="t-caption">What We Do</span>
          <h2 className="t-h1" style={{ marginTop: 'var(--space-3)' }}>
            Consulting Services
          </h2>
          <p className="t-lead" style={{ marginTop: 'var(--space-4)' }}>
            Tailored solutions across real estate, investment, and business
            operations — designed to generate tangible outcomes.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card__icon" aria-hidden="true">{s.icon}</div>
              <h3 className="t-h3 service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Previous Work
───────────────────────────────────────────── */
function Work() {
  const projects = [
    {
      category: 'Real Estate',
      title: 'Multi-Family Portfolio Acquisition',
      desc: 'Advisory and due diligence for a 12-unit multi-family acquisition, including cash-flow modelling and lender negotiation support.',
      badge: 'Completed',
      icon: '🏢',
    },
    {
      category: 'Investment',
      title: 'Fix-and-Flip Pipeline Optimisation',
      desc: 'Built a repeatable acquisition-to-disposition workflow that reduced average hold time by 30% and improved net margins.',
      badge: 'Completed',
      icon: '🔨',
    },
    {
      category: 'Operations',
      title: 'Property Management Overhaul',
      desc: 'Redesigned tenant screening, maintenance ticketing, and financial reporting processes for a mid-size property management firm.',
      badge: 'Completed',
      icon: '📋',
    },
  ];

  return (
    <section id="work" className="section section--alt">
      <div className="container">
        <div className="section__header--centered">
          <span className="t-caption">Our Work</span>
          <h2 className="t-h1" style={{ marginTop: 'var(--space-3)' }}>
            Featured Projects
          </h2>
          <p className="t-lead" style={{ marginTop: 'var(--space-4)' }}>
            A selection of engagements that demonstrate our approach and the
            outcomes we deliver for our clients.
          </p>
        </div>

        <div className="work__grid">
          {projects.map((p) => (
            <article key={p.title} className="work-card">
              <div className="work-card__visual" aria-hidden="true">
                <span className="work-card__visual-placeholder">{p.icon}</span>
                <span className="work-card__badge">{p.badge}</span>
              </div>
              <div className="work-card__body">
                <p className="t-caption work-card__category">{p.category}</p>
                <h3 className="t-h3 work-card__title">{p.title}</h3>
                <p className="work-card__desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   About
───────────────────────────────────────────── */
function About() {
  const values = [
    'Integrity first — transparent advice even when it\'s not what you want to hear',
    'Data-driven decisions anchored in real-market evidence',
    'Long-term relationships over short-term engagements',
    'Execution focus — strategy only counts when it gets done',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__layout">
          {/* Visual */}
          <div className="about__visual" aria-label="About JAH Consulting">
            <span className="about__visual-placeholder" aria-hidden="true">👤</span>
            <div className="about__badge" aria-hidden="true">
              <span className="about__badge-icon">🏆</span>
              <div>
                <div className="about__badge-text">Industry Recognised</div>
                <div className="about__badge-sub">Real Estate Advisory</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about__content">
            <span className="t-caption">About Me</span>
            <h2 className="t-h1 about__headline" style={{ marginTop: 'var(--space-3)' }}>
              A Consultant Who Has{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                Done the Work
              </em>
            </h2>

            <p className="t-body about__body">
              JAH Consulting LLC was founded on the belief that great consulting
              comes from lived experience. With more than a decade of hands-on
              work across real estate investment, property management, and
              business operations, I bring practical knowledge that translates
              directly into results for my clients.
            </p>

            <p className="t-body about__body">
              Whether you are a first-time investor navigating your initial
              acquisition or a seasoned operator looking to scale, I offer the
              clarity, structure, and accountability needed to move forward with
              confidence.
            </p>

            <ul className="about__values" aria-label="Core values">
              {values.map((v) => (
                <li key={v} className="about__value-item">
                  <span className="about__value-dot" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>

            <a className="btn btn--accent" href="#contact">Work With Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Contact
───────────────────────────────────────────── */
function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder — wire up to your preferred form handler or API
    setStatus('sent');
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact__layout">
          {/* Left: info */}
          <div className="contact__info">
            <span className="t-caption">Get In Touch</span>
            <h2 className="t-h1 contact__headline" style={{ marginTop: 'var(--space-3)' }}>
              Let's Start a{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                Conversation
              </em>
            </h2>
            <p className="t-lead contact__tagline">
              Ready to discuss your next project or simply want to learn more?
              Reach out — I respond to all enquiries within one business day.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">✉️</div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <div className="contact__detail-value">hello@jahconsulting.com</div>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">📍</div>
                <div>
                  <div className="contact__detail-label">Location</div>
                  <div className="contact__detail-value">United States</div>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">⏱️</div>
                <div>
                  <div className="contact__detail-label">Response Time</div>
                  <div className="contact__detail-value">Within 1 business day</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="form" role="region" aria-label="Contact form">
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>✅</div>
                <h3 className="t-h3" style={{ marginBottom: 'var(--space-3)' }}>Message Received</h3>
                <p className="t-body">Thank you for reaching out. I'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form__grid">
                  <div className="form__group">
                    <label className="form__label" htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      className="form__input"
                      type="text"
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      className="form__input"
                      type="email"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="form__group form__group--full">
                    <label className="form__label" htmlFor="cf-service">Service Interest</label>
                    <select id="cf-service" className="form__select">
                      <option value="">Select a service…</option>
                      <option>Real Estate Strategy</option>
                      <option>Investment Analysis</option>
                      <option>Operations &amp; Process</option>
                      <option>Financial Reporting</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form__group form__group--full">
                    <label className="form__label" htmlFor="cf-message">Message</label>
                    <textarea
                      id="cf-message"
                      className="form__textarea"
                      placeholder="Tell me about your project or goals…"
                      required
                    />
                  </div>
                </div>

                <div className="form__footer">
                  <button type="submit" className="btn btn--primary">
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand column */}
          <div>
            <div className="footer__brand-name">JAH Consulting LLC</div>
            <p className="footer__brand-desc">
              Strategic consulting for real estate investors, developers, and
              business operators who are serious about results.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer__col-heading">Company</div>
            <ul className="footer__links">
              {['Services', 'Our Work', 'About', 'Contact'].map((label) => (
                <li key={label}>
                  <a
                    className="footer__link"
                    href={`#${label.toLowerCase().replace(' ', '-')}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick links */}
          <div>
            <div className="footer__col-heading">Services</div>
            <ul className="footer__links">
              {['Real Estate Strategy', 'Investment Analysis', 'Operations & Process', 'Financial Reporting'].map((s) => (
                <li key={s}>
                  <a className="footer__link" href="#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} JAH Consulting LLC. All rights reserved.
          </p>
          <ul className="footer__legal">
            <li><a className="footer__legal-link" href="#">Privacy Policy</a></li>
            <li><a className="footer__legal-link" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   App Root
───────────────────────────────────────────── */
const App = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Stats />
      <Services />
      <Work />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;

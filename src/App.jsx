import React, { useState } from "react";
import {
  ArrowDownRight, ArrowRight, Check, CheckCircle2, ChevronDown,
  Clock3, Leaf, Menu, ShieldCheck, Sparkles, Star, X,
  House, Building2, Sofa, CalendarCheck, Mail, Phone, MapPin
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: House,
    title: "Home cleaning",
    description: "A thoughtful top-to-bottom refresh for the spaces you live in every day.",
    tags: ["Regular visits", "One-off refresh"]
  },
  {
    number: "02",
    icon: Building2,
    title: "Office cleaning",
    description: "A clean, calm workspace that helps your team feel ready for the day.",
    tags: ["Flexible schedule", "Shared spaces"]
  },
  {
    number: "03",
    icon: Sofa,
    title: "Deep cleaning",
    description: "Extra attention for the corners, surfaces and details that need a little more care.",
    tags: ["Seasonal reset", "Move-in / move-out"]
  }
];

const benefits = [
  "A cleaning plan shaped around your space",
  "Clear communication from first enquiry",
  "Careful attention to the little details",
  "Flexible visits to suit your routine"
];

const testimonials = [
  {
    quote: "The whole place felt lighter. Booking was easy, and every detail had been thought about.",
    name: "Amelia R.",
    detail: "Home cleaning"
  },
  {
    quote: "A dependable team and a workspace that feels fresh every Monday. Exactly what we needed.",
    name: "Daniel K.",
    detail: "Small business owner"
  },
  {
    quote: "The deep clean made moving day so much less stressful. The finish was lovely.",
    name: "Priya S.",
    detail: "One-off deep clean"
  }
];

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="PureNest home">
      <span className="brand-mark"><Sparkles size={19} strokeWidth={2.4} /></span>
      <span>pure<span className="brand-light">nest</span><small> CLEANING CO.</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "Home cleaning", message: "" });
  const [notice, setNotice] = useState("");
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/meaaknle";

  const closeMenu = () => setMenuOpen(false);
  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setNotice("");
  };

  
  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNotice("Please complete your name, email and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setNotice("Please enter a valid email address.");
      return;
    }

    setNotice("Sending your enquiry...");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setNotice("Thanks! Your message has been sent.");
        setForm({
          name: "",
          email: "",
          service: "Home cleaning",
          message: "",
        });
      } else {
        setNotice("Message could not be sent. Please try again.");
      }
    } catch (error) {
      setNotice("Network error. Please try again.");
    }
  }

  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        A little more calm, a little less clutter.
        <a href="#contact">Get a free quote <ArrowRight size={13} /></a>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <Brand onClick={closeMenu} />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu} className="nav-cta">Get a quote <ArrowUpRightIcon /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> A FRESHER KIND OF CLEAN</div>
              <h1>Come home to<br />a little more <em>calm.</em></h1>
              <p className="hero-description">Thoughtful cleaning for homes and workspaces, so you can spend less time on the mess and more time on what matters.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Let’s make a plan <ArrowRight size={17} /></a>
                <a className="text-link" href="#services">Explore our services <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span className="avatar avatar-one">J</span><span className="avatar avatar-two">M</span><span className="avatar avatar-three">A</span>
                </div>
                <div><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><p><strong>Made for busy lives</strong><span>Thoughtful care, every visit</span></p></div>
              </div>
            </div>

            <div className="hero-art" aria-label="Illustration of a calm, sunlit living room">
              <div className="art-sun" />
              <div className="art-window"><div /><div /><div /><div /></div>
              <div className="plant plant-left"><i /><i /><i /><b /></div>
              <div className="art-frame"><div className="frame-art"><span /></div></div>
              <div className="sofa">
                <div className="sofa-back" /><div className="sofa-seat" /><div className="sofa-arm left" /><div className="sofa-arm right" />
                <div className="cushion cushion-one" /><div className="cushion cushion-two" /><div className="sofa-leg leg-one" /><div className="sofa-leg leg-two" />
              </div>
              <div className="side-table"><div className="table-top" /><div className="table-leg" /><div className="vase"><i /></div></div>
              <div className="rug" />
              <div className="floating-note"><span className="note-icon"><Check size={16} /></span><span><strong>Fresh space, fresh start</strong><small>Your kind of clean</small></span></div>
              <div className="sparkle sparkle-a">✳</div><div className="sparkle sparkle-b">✦</div>
            </div>
          </div>
          <div className="hero-bottom container"><span>MADE FOR REAL LIFE</span><span className="bottom-rule" /><span>HOME · OFFICE · DEEP CLEAN</span></div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-item"><ShieldCheck /><span><strong>Care you can count on</strong><small>Thoughtful from start to finish</small></span></div>
            <div className="trust-item"><Leaf /><span><strong>A considered approach</strong><small>Mindful of your space</small></span></div>
            <div className="trust-item"><Clock3 /><span><strong>Works around you</strong><small>Flexible visit options</small></span></div>
            <div className="trust-item"><CalendarCheck /><span><strong>Simple to arrange</strong><small>Clear, friendly communication</small></span></div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> HOW WE CAN HELP</div><h2>Good clean.<br /><em>Good feeling.</em></h2></div>
              <p>Every space is different. Choose the kind of help you need, and we’ll work out the details together.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, description, tags }) => (
                <article className="service-card" key={number}>
                  <div className="service-top"><span className="service-icon"><Icon size={23} /></span><span className="service-number">{number}</span></div>
                  <h3>{title}</h3><p>{description}</p>
                  <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="card-link" href="#contact" aria-label={`Ask about ${title}`}>Find out more <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-photo">
                <div className="photo-sun" /><div className="photo-window"><i /><i /><i /><i /></div>
                <div className="photo-cabinet"><span /><span /><span /></div>
                <div className="photo-plant"><i /><i /><i /><b /></div>
                <div className="photo-counter" /><div className="photo-vase" /><div className="photo-bowl" />
              </div>
              <div className="about-stamp"><Sparkles size={20} /><span>THE LITTLE<br />DETAILS MATTER</span></div>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT US</div>
              <h2>We believe clean<br />should feel like <em>care.</em></h2>
              <p className="about-lead">A good clean is about more than what you can see. It’s the breathing room, the clear surfaces, and the feeling of being able to settle in.</p>
              <p>PureNest is a sample cleaning brand built around a simple idea: reliable service should feel personal, not complicated. We listen first, agree on the details, and take care with the spaces that matter to you.</p>
              <ul className="benefit-list">{benefits.map(item => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
              <a className="button button-dark" href="#contact">Meet your cleaning plan <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="process-section section">
          <div className="container">
            <div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> NO FUSS, JUST FRESH</div><h2>Three simple steps<br />to a <em>lighter day.</em></h2></div>
            <div className="process-grid">
              <article><span className="process-number">01</span><div className="process-icon"><Mail /></div><h3>Tell us what you need</h3><p>Share a little about your space, schedule and priorities.</p></article>
              <article><span className="process-number">02</span><div className="process-icon"><CalendarCheck /></div><h3>Choose your plan</h3><p>We’ll discuss the right service and agree a convenient time.</p></article>
              <article><span className="process-number">03</span><div className="process-icon"><Sparkles /></div><h3>Enjoy the reset</h3><p>Put your feet up and enjoy a space that feels refreshed.</p></article>
            </div>
          </div>
        </section>

        <section className="reviews-section section" id="reviews">
          <div className="container">
            <div className="reviews-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> KIND WORDS</div><h2>A clean space.<br /><em>A happy place.</em></h2></div><p>Little moments of relief are what we’re here for.</p></div>
            <div className="review-grid">
              {testimonials.map((review, index) => <article className="review-card" key={review.name}>
                <div className="review-stars" aria-label="Illustrative five-star rating"><Star /><Star /><Star /><Star /><Star /></div>
                <span className="quote-mark">“</span><blockquote>{review.quote}</blockquote>
                <div className="review-person"><span className={`review-avatar review-avatar-${index + 1}`}>{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.detail}</small></span></div>
              </article>)}
            </div>
            <p className="demo-note">Portfolio demo: these testimonials are illustrative placeholders, not verified customer reviews. Replace them with approved real feedback before using this site for a real business.</p>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR FRESH START</div>
              <h2>Ready for a little<br />more <em>breathing room?</em></h2>
              <p>Explore this sample enquiry experience. This is a portfolio concept, not an active cleaning business.</p>
              <div className="contact-detail"><span><Mail size={18} /></span><div><small>EMAIL US</small><strong>hello@purenest.example</strong></div></div>
              <div className="contact-detail"><span><Phone size={18} /></span><div><small>GIVE US A CALL</small><strong>+44 (0) 141 555 0148</strong></div></div>
              <div className="contact-detail"><span><MapPin size={18} /></span><div><small>OUR SAMPLE SERVICE AREA</small><strong>Glasgow & nearby areas</strong></div></div>
              <p className="sample-details">Sample business details for portfolio use — replace before publishing.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-heading"><span>LET’S TALK</span><h3>Tell us a little more.</h3><p>We’ll start with the basics.</p></div>
              <div className="form-row">
                <label>Your name<input name="name" value={form.name} onChange={updateForm} placeholder="e.g. Alex Morgan" autoComplete="name" /></label>
                <label>Email address<input name="email" value={form.email} onChange={updateForm} placeholder="alex@example.com" type="email" autoComplete="email" /></label>
              </div>
              <label>What can we help with?
                <span className="select-wrap"><select name="service" value={form.service} onChange={updateForm}><option>Home cleaning</option><option>Office cleaning</option><option>Deep cleaning</option><option>Move-in / move-out</option><option>Something else</option></select><ChevronDown size={16} /></span>
              </label>
              <label>Tell us about your space<textarea name="message" value={form.message} onChange={updateForm} placeholder="A few details about what you need…" rows="4" /></label>
              {notice && <p className={`form-notice ${notice.startsWith("Thanks") ? "success" : ""}`} role="status">{notice}</p>}
              <button className="button button-primary form-submit" type="submit">Send enquiry <ArrowRight size={17} /></button>
             <p className="form-footnote">
  <ShieldCheck size={14} /> Your enquiry will be submitted securely.
</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main"><Brand onClick={closeMenu} /><p>A fresher kind of clean.<br />Made for real life.</p><a href="#home" className="back-top">Back to top <ArrowRight size={15} /></a></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} PureNest Cleaning Co. Portfolio concept.</span><span>Thoughtfully designed with React.</span></div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={15} className="arrow-diagonal" />;
}

export default App;
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin, Phone, Clock, Star, Award, Heart,
  ChevronDown, ArrowRight, Utensils, Calendar, X
} from 'lucide-react';
import './index.css';
import heroImg from './assets/hero.jpg';
import filosofiaImg from './assets/la nostra filosofia.jpg';
import bisteccaImg from './assets/bistecche.jpg';
import pastaImg from './assets/pasta artigianale.jpg';
import viniImg from './assets/la selezione di vini.jpg';
import salaImg from './assets/sala privata storica.jpg';
import atmosferaImg from './assets/atmosfera romantica.jpg';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   BOOKING MODAL
   ───────────────────────────────────────────── */
function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(30,15,8,0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '450px',
          backgroundColor: 'var(--cream)',
          borderRadius: '2rem',
          padding: '2.5rem 2rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          textAlign: 'center',
          animation: 'modalSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--warm-brown)',
            cursor: 'pointer',
            padding: '0.5rem',
            opacity: 0.6,
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
        >
          <X size={24} />
        </button>

        <span className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
        <h2 className="font-serif" style={{ fontWeight: 700, fontSize: '1.8rem', color: 'var(--warm-brown)', marginBottom: '1rem' }}>
          Scegli come prenotare
        </h2>
        <p className="font-sans" style={{ fontSize: '0.95rem', color: '#6b5a54', marginBottom: '2rem', lineHeight: 1.6 }}>
          Seleziona la tua piattaforma preferita per riservare un tavolo e vivere l&apos;esperienza Buca San Lorenzo.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href="https://bucasanlorenzo.guestplan.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Prenota su Guestplan
          </a>
          <a
            href="https://www.thefork.it/ristorante/ristorante-buca-san-lorenzo-firenze-r833656?cc=18174-54f&rwg_token=AFd1xnEmlsXD3Fp5zw5_Us5CDp18gmOCa-1s-wl5de9BhZJrVGFWXNN8TdbSxT4-keLEw0sPyD6cN13bFfVnASpwmUNQ_kbkVb2IHRWnomZvt6bhAWnUduA%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ 
              width: '100%', 
              justifyContent: 'center',
              color: 'var(--warm-brown)',
              borderColor: 'rgba(90, 62, 54, 0.3)'
            }}
          >
            Prenota su The Fork
          </a>
          <button
            onClick={onClose}
            className="font-sans"
            style={{
              marginTop: '1rem',
              background: 'none',
              border: 'none',
              color: 'var(--warm-brown)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              opacity: 0.6,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
          >
            Annulla
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────── */
function Navbar({ onBookingOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Cucina', href: '#cucina' },
    { label: 'Esperienza', href: '#esperienza' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease, border-bottom 0.5s ease',
        backgroundColor: scrolled ? 'rgba(244,239,234,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(90,62,54,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(90,62,54,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a
          href="#"
          className="font-serif"
          style={{
            fontWeight: 700,
            fontSize: '1.1rem',
            lineHeight: 1.3,
            color: scrolled ? 'var(--warm-brown)' : 'var(--cream)',
            textDecoration: 'none',
            transition: 'color 0.4s ease',
          }}
        >
          Buca San Lorenzo
          <span style={{
            display: 'block',
            color: 'var(--gold)',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}>
            FIRENZE · DAL 1973
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{ color: scrolled ? 'var(--warm-brown)' : 'rgba(244,239,234,0.85)' }}
            >
              {l.label}
            </a>
          ))}
          <button
            id="nav-cta"
            onClick={onBookingOpen}
            className="btn-primary"
            style={{ padding: '0.6rem 1.3rem', fontSize: '0.78rem', border: 'none', cursor: 'pointer' }}
          >
            Prenota
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          id="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                backgroundColor: scrolled ? 'var(--warm-brown)' : 'var(--cream)',
                transition: 'all 0.3s ease',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform: menuOpen
                  ? i === 0 ? 'translateY(6px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6px) rotate(-45deg)'
                  : 'none'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: menuOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        backgroundColor: 'var(--cream)',
      }}>
        <div style={{ padding: '0.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{ color: 'var(--warm-brown)', fontSize: '1rem' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { onBookingOpen(); setMenuOpen(false); }}
            className="btn-primary"
            style={{ justifyContent: 'center', border: 'none', cursor: 'pointer' }}
          >
            Prenota un Tavolo
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */
function Hero({ onBookingOpen }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.from(titleRef.current, { y: 60, opacity: 0, duration: 1.2, delay: 0.3 })
        .from(subtRef.current, { y: 40, opacity: 0, duration: 1 }, '-=0.7')
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
        .from(scrollRef.current, { opacity: 0, duration: 0.6 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        height: '100dvh',
        minHeight: '600px',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(175deg, rgba(30,15,8,0.75) 0%, rgba(90,62,54,0.55) 50%, rgba(30,15,8,0.82) 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 1.5rem', maxWidth: '56rem', margin: '0 auto' }}>
        <div ref={titleRef}>
          <p className="font-sans" style={{
            color: 'var(--gold)',
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            fontWeight: 500,
            marginBottom: '1rem',
          }}>
            FIRENZE · EX MONASTERO DEL XIII SECOLO
          </p>
          <h1 className="font-serif" style={{
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            lineHeight: 1.05,
            color: 'var(--cream)',
          }}>
            Buca San Lorenzo
          </h1>
          <p className="font-serif" style={{
            fontStyle: 'italic',
            marginTop: '0.5rem',
            fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
            color: 'rgba(244,239,234,0.85)',
            lineHeight: 1.3,
          }}>
            Un&apos;esperienza toscana autentica.
          </p>
        </div>

        <p ref={subtRef} className="font-sans" style={{
          marginTop: '1.5rem',
          maxWidth: '36rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'rgba(244,239,234,0.72)',
          fontSize: '1rem',
          lineHeight: 1.8,
        }}>
          Bistecca alla Fiorentina, pasta artigianale e vini del territorio.
          Calore, storia e sapori nel cuore di Firenze.
        </p>

        <div ref={ctaRef} style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}>
          <button
            id="hero-cta-primary"
            onClick={onBookingOpen}
            className="btn-gold"
            style={{ fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}
          >
            <Calendar size={16} />
            Prenota un Tavolo
          </button>
          <a id="hero-cta-secondary" href="#cucina" className="btn-outline" style={{ fontSize: '0.875rem' }}>
            Scopri la Cucina
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgba(244,239,234,0.5)',
      }}>
        <span className="font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}>SCORRI</span>
        <ChevronDown size={18} style={{ animation: 'heroChevron 2s infinite' }} />
      </div>

      <style>{`
        @keyframes heroChevron {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VALORE
───────────────────────────────────────────── */
function Valore() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.valore-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <MapPin size={28} style={{ color: 'var(--gold)' }} />,
      title: 'Location Storica',
      body: "Un affascinante ex monastero del 1200, con sala privata inferiore scavata nella pietra e un\u2019atmosfera romantica a lume di candela che rende ogni cena unica e memorabile.",
    },
    {
      icon: <Utensils size={28} style={{ color: 'var(--gold)' }} />,
      title: 'Eccellenza Culinaria',
      body: "La nostra Bistecca alla Fiorentina di scottona, la pasta artigianale tirata a mano e una selezione curata di vini del territorio portano in tavola la Toscana nella sua espressione pi\u00f9 autentica.",
    },
    {
      icon: <Heart size={28} style={{ color: 'var(--gold)' }} />,
      title: 'Accoglienza Familiare',
      body: "Un servizio caldo, attento e impeccabile. Ogni ospite \u00e8 ricevuto come in famiglia, con la cura dei dettagli che si coltiva solo in chi ama profondamente il proprio lavoro.",
    },
  ];

  return (
    <section id="cucina" ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="gold-line" style={{ margin: '0 auto 1rem' }} />
          <p className="font-sans" style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.2em', fontWeight: 500, marginBottom: '0.75rem' }}>
            I NOSTRI VALORI
          </p>
          <h2 className="font-serif" style={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--warm-brown)' }}>
            Tre ragioni per sceglierci
          </h2>
          <p className="font-sans" style={{ marginTop: '1rem', maxWidth: '36rem', margin: '1rem auto 0', color: '#6b5a54', lineHeight: 1.75 }}>
            Ogni dettaglio è pensato per offrire un’esperienza che vada oltre il semplice pasto.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {cards.map((c, i) => (
            <div key={i} className="card-valore valore-card">
              <div style={{ marginBottom: '1.25rem' }}>{c.icon}</div>
              <span className="gold-line" style={{ marginBottom: '1rem' }} />
              <h3 className="font-serif" style={{ fontWeight: 600, fontSize: '1.35rem', color: 'var(--warm-brown)', marginBottom: '0.75rem' }}>
                {c.title}
              </h3>
              <p className="font-sans" style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#6b5a54' }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FILOSOFIA
───────────────────────────────────────────── */
function Filosofia() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.filosofia-content > div', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: 'power2.out',
      });

      if (quoteRef.current) {
        const words = quoteRef.current.querySelectorAll('.word');
        gsap.from(words, {
          scrollTrigger: { trigger: quoteRef.current, start: 'top 80%' },
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        });
      }

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -40,
          ease: 'none',
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const quoteWords = ['Qualità,', 'relazione,', 'continuità.'];

  return (
    <section
      ref={sectionRef}
      id="esperienza"
      className="section-padding"
      style={{ backgroundColor: 'var(--warm-brown)', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Text */}
          <div className="filosofia-content">
            <div>
              <span className="gold-line" />
              <p className="font-sans" style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.2em', fontWeight: 500, marginBottom: '1.5rem' }}>
                LA NOSTRA FILOSOFIA
              </p>
            </div>
            <div>
              <p className="font-sans" style={{ color: 'rgba(244,239,234,0.75)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                La maggior parte dei ristoranti punta sulla quantità — tavoli che si svuotano e si riempiono in fretta, menù standardizzati, ospiti che diventano numeri.
              </p>
            </div>
            <div>
              <p className="font-sans" style={{ color: 'rgba(244,239,234,0.75)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Noi puntiamo su qualcosa di diverso: un rapporto autentico con ogni ospite, ingredienti scelti con cura e una cucina che racconta il territorio.
              </p>
            </div>
            <div ref={quoteRef}>
              <p className="font-serif" style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'var(--cream)', lineHeight: 1.25 }}>
                Noi puntiamo su{' '}
                {quoteWords.map((w, i) => (
                  <span
                    key={i}
                    className="word"
                    style={{ display: 'inline-block', color: i === 0 ? 'var(--gold)' : 'var(--cream)', marginRight: '0.35rem' }}
                  >
                    {w}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Image */}
          <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', height: 'clamp(350px, 50vw, 520px)' }}>
            <div
              ref={imgRef}
              style={{
                position: 'absolute',
                top: '-30px',
                bottom: '-30px',
                left: 0,
                right: 0,
                backgroundImage: `url(${filosofiaImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(90,62,54,0.3) 0%, transparent 60%)',
            }} />
            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              borderRadius: '1rem',
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(30,10,5,0.78)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <Star size={18} fill="var(--gold)" color="var(--gold)" />
              <div>
                <p className="font-serif" style={{ fontWeight: 600, color: 'var(--cream)', fontSize: '0.9rem' }}>Dal 1973</p>
                <p className="font-sans" style={{ color: 'rgba(244,239,234,0.65)', fontSize: '0.75rem' }}>Cucina toscana autentica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   METODO
───────────────────────────────────────────── */
function Metodo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.metodo-heading', {
        scrollTrigger: { trigger: '.metodo-heading', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
      });

      const cards = gsap.utils.toArray('.metodo-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 82%' },
          y: 60,
          opacity: 0,
          scale: 0.97,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power2.out',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      icon: <Heart size={32} style={{ color: 'var(--gold)' }} />,
      title: 'Ascolto',
      body: "Ogni ospite merita attenzione. Dalla prenotazione all\u2019accoglienza, siamo presenti per comprendere le vostre preferenze, le occasioni speciali, le esigenze particolari.",
      detail: 'Menù degustazione su richiesta, tavoli privati, eventi su misura',
    },
    {
      num: '02',
      icon: <Award size={32} style={{ color: 'var(--gold)' }} />,
      title: 'Selezione',
      body: "Scegliamo solo ingredienti di prima qualità: carne di scottona selezionata, farina macinata a pietra, vini direttamente dai produttori del Chianti e della Val d\u2019Orcia.",
      detail: 'Filiera corta, km zero dove possibile, stagionalità rispettata',
    },
    {
      num: '03',
      icon: <Star size={32} style={{ color: 'var(--gold)' }} />,
      title: 'Cura Continua',
      body: "La cucina toscana non ammette compromessi. Ogni piatto è preparato con tecnica e passione. Il servizio non finisce quando il conto arriva: vogliamo che lasciate Firenze con un ricordo indelebile.",
      detail: 'Ricette tradizionali, preparazione artigianale, servizio impeccabile',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#ede8e3' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="metodo-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="gold-line" style={{ margin: '0 auto 1rem' }} />
          <p className="font-sans" style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.2em', fontWeight: 500, marginBottom: '0.75rem' }}>
            IL NOSTRO METODO
          </p>
          <h2 className="font-serif" style={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--warm-brown)' }}>
            Come lavoriamo
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {steps.map((s, i) => (
            <div key={i} className="metodo-card" style={{ borderRadius: '1.5rem', padding: '2.5rem', backgroundColor: '#fff', boxShadow: '0 4px 24px rgba(30,30,30,0.07)', height: '100%' }}>
              <div className="font-serif" style={{ fontWeight: 700, fontSize: '3.5rem', color: 'rgba(199,161,74,0.15)', lineHeight: 1, marginBottom: '1rem' }}>
                {s.num}
              </div>
              <div style={{ marginBottom: '1rem' }}>{s.icon}</div>
              <span className="gold-line" style={{ marginBottom: '1rem' }} />
              <h3 className="font-serif" style={{ fontWeight: 600, fontSize: '1.4rem', color: 'var(--warm-brown)', marginBottom: '0.75rem' }}>
                {s.title}
              </h3>
              <p className="font-sans" style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#6b5a54', marginBottom: '1rem' }}>
                {s.body}
              </p>
              <p className="font-sans" style={{ fontSize: '0.78rem', fontStyle: 'italic', color: 'var(--gold)', borderTop: '1px solid rgba(199,161,74,0.3)', paddingTop: '1rem' }}>
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERIA
───────────────────────────────────────────── */
function Galleria() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-img', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const images = [
    { src: bisteccaImg, alt: 'Bistecca alla Fiorentina', big: true },
    { src: pastaImg, alt: 'Pasta artigianale', big: false },
    { src: viniImg, alt: 'Selezione di vini toscani', big: false },
    { src: salaImg, alt: 'Sala privata storica', big: false },
    { src: atmosferaImg, alt: 'Atmosfera romantica', big: false },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="gold-line" style={{ margin: '0 auto 1rem' }} />
          <p className="font-sans" style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.2em', fontWeight: 500, marginBottom: '0.75rem' }}>
            LA NOSTRA CUCINA
          </p>
          <h2 className="font-serif" style={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--warm-brown)' }}>
            Sapori che raccontano la Toscana
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 220px)', gap: '1rem' }} className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-img"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1rem',
                gridColumn: img.big ? 'span 2' : 'span 1',
                gridRow: img.big ? 'span 2' : 'span 1',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1rem',
                background: 'linear-gradient(to top, rgba(30,10,5,0.55) 0%, transparent 60%)',
              }}>
                <p className="font-sans" style={{ color: 'var(--cream)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em' }}>{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 180px) !important;
          }
          .gallery-grid > div:first-child {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRENOTA — CTA Finale
   ───────────────────────────────────────────── */
function Prenota({ onBookingOpen }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prenota-content > div', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="prenota"
      ref={sectionRef}
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${atmosferaImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(30,10,5,0.88) 0%, rgba(90,62,54,0.82) 100%)',
      }} />

      <div className="prenota-content" style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        <div>
          <span className="gold-line" style={{ margin: '0 auto 1rem' }} />
          <p className="font-sans" style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.2em', fontWeight: 500, marginBottom: '1rem' }}>
            VIVI L&apos;ESPERIENZA
          </p>
        </div>
        <div>
          <h2 className="font-serif" style={{ fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.15, color: 'var(--cream)' }}>
            Una serata toscana
            <span className="font-serif" style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)', marginTop: '0.25rem' }}>
              che non dimenticherai.
            </span>
          </h2>
        </div>
        <div>
          <p className="font-sans" style={{ marginTop: '1.5rem', marginBottom: '2.5rem', color: 'rgba(244,239,234,0.75)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Prenota il tuo tavolo al Ristorante Buca San Lorenzo e lasciati avvolgere dall&apos;atmosfera unica di un ex monastero del 1200 nel cuore di Firenze.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <button
            id="cta-prenota-modal"
            onClick={onBookingOpen}
            className="btn-gold"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            <Calendar size={18} />
            Prenota ora
          </button>
          <a
            id="cta-prenota-phone"
            href="tel:+39055283100"
            className="btn-outline"
          >
            <Phone size={18} />
            Chiamaci
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */
function Footer({ onBookingOpen }) {
  return (
    <footer id="contatti" style={{ backgroundColor: 'var(--charcoal)', color: 'var(--cream)' }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '5rem 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '3rem',
      }}>
        {/* Brand */}
        <div>
          <h3 className="font-serif" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
            Buca San Lorenzo
          </h3>
          <p className="font-sans" style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            FIRENZE · DAL 1973
          </p>
          <p className="font-sans" style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(244,239,234,0.55)' }}>
            Autentica cucina toscana nel cuore di Firenze, in un antico monastero del XIII secolo.
            Tradizione, qualità e calore familiare ad ogni tavolo.
          </p>
        </div>

        {/* Orari */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Clock size={16} style={{ color: 'var(--gold)' }} />
            <h4 className="font-serif" style={{ fontWeight: 600, color: 'var(--cream)' }}>Orari</h4>
          </div>
          <div className="font-sans" style={{ fontSize: '0.875rem', color: 'rgba(244,239,234,0.65)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
              <span>Martedì – Domenica</span>
              <span style={{ color: 'var(--cream)' }}>12:00 – 14:30</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
              <span>Cena</span>
              <span style={{ color: 'var(--cream)' }}>19:00 – 22:30</span>
            </div>
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(244,239,234,0.1)', fontSize: '0.8rem', color: 'rgba(244,239,234,0.4)' }}>
              Chiuso il lunedì
            </div>
          </div>
        </div>

        {/* Contatti */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Phone size={16} style={{ color: 'var(--gold)' }} />
            <h4 className="font-serif" style={{ fontWeight: 600, color: 'var(--cream)' }}>Contatti</h4>
          </div>
          <div className="font-sans" style={{ fontSize: '0.875rem', color: 'rgba(244,239,234,0.65)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Phone size={14} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
              <a href="tel:0552696024" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(244,239,234,0.65)'}>
                055 269 6024 
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <MapPin size={14} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
              <span>Via dei Cerchi, 1r<br />50122 Firenze FI</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Calendar size={14} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
              <a href="mailto:info@bucasanlorenzo.it" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(244,239,234,0.65)'}>
                Prenota via email
              </a>
            </div>
          </div>

          <button
            onClick={onBookingOpen}
            className="font-sans"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              color: 'var(--gold)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Prenota un tavolo
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(244,239,234,0.08)', padding: '1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <p className="font-sans" style={{ fontSize: '0.75rem', color: 'rgba(244,239,234,0.3)' }}>
            &copy; {new Date().getFullYear()} Ristorante Buca San Lorenzo. Tutti i diritti riservati.
          </p>
          <p className="font-sans" style={{ fontSize: '0.75rem', color: 'rgba(244,239,234,0.2)' }}>
            Firenze, Italia
          </p>
        </div>
      </div>

      <style>{`
        @keyframes footerPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ade80; }
          50% { opacity: 0.5; box-shadow: 0 0 12px #4ade80; }
        }
      `}</style>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleBooking = () => {
    setIsBookingOpen(prev => !prev);
    // Previeni lo scroll del body quando il modal è aperto
    if (!isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <Navbar onBookingOpen={toggleBooking} />
      <main>
        <Hero onBookingOpen={toggleBooking} />
        <Valore />
        <Filosofia />
        <Metodo />
        <Galleria />
        <Prenota onBookingOpen={toggleBooking} />
      </main>
      <Footer onBookingOpen={toggleBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={toggleBooking} />
    </>
  );
}

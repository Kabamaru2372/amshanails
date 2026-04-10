import { useState, useEffect, useRef } from 'react'
import './Services.css'

const services = {
  en: [
    {
      icon: '💅',
      title: 'Manicure',
      price: 'from €25',
      short: 'Classic, gel and acrylic nail treatments with expert finish.',
      details: [
        'Nail shaping & filing',
        'Cuticle care & removal',
        'Hand exfoliation & moisturising',
        'Base coat application',
        'Polish or gel colour of your choice',
        'Top coat & finish',
      ],
      note: 'Available in classic, gel and acrylic.'
    },
    {
      icon: '🦶',
      title: 'Pedicure',
      price: 'from €30',
      short: 'Relaxing foot care with our signature spa ritual.',
      details: [
        'Nail shaping & filing',
        'Cuticle care & treatment',
        'Foot soak with aromatic salts',
        'Callus removal & exfoliation',
        'Deep moisturising massage',
        'Polish or gel colour of your choice',
      ],
      note: 'Dry pedicure also available on request.'
    },
    {
      icon: '✨',
      title: 'Nail Art',
      price: 'from €2',
      short: 'Custom designs, seasonal styles and 3D artwork.',
      details: [
        'Freehand nail art & custom designs',
        '3D embellishments & gems',
        'Seasonal & trend-led styles',
        'French & ombre techniques',
        'Stamping & foil effects',
        'Per nail pricing available',
      ],
      note: 'Can be added to any manicure or pedicure service.'
    },
    {
      icon: '🌿',
      title: 'Beauty Care',
      price: 'from €35',
      short: 'Eyebrows, lashes and additional beauty treatments.',
      details: [
        'Eyebrow shaping & threading',
        'Eyebrow & eyelash tinting',
        'Lash lift & lamination',
        'Facial waxing',
        'Eyebrow lamination',
        'Personalised beauty consultation',
      ],
      note: 'Ask us about combining services for a full beauty experience.'
    },
  ],
  gr: [
    {
      icon: '💅',
      title: 'Μανικιούρ',
      price: 'από €25',
      short: 'Κλασικό, gel και ακρυλικό με επαγγελματική φινέτσα.',
      details: [
        'Σχηματισμός & λίμαρισμα νυχιών',
        'Περιποίηση & αφαίρεση επωνυχίων',
        'Απολέπιση & ενυδάτωση χεριών',
        'Εφαρμογή βάσης',
        'Βερνίκι ή gel χρώμα της επιλογής σας',
        'Top coat & φινίρισμα',
      ],
      note: 'Διαθέσιμο σε κλασικό, gel και ακρυλικό.'
    },
    {
      icon: '🦶',
      title: 'Πεντικιούρ',
      price: 'από €30',
      short: 'Χαλαρωτική περιποίηση ποδιών με το δικό μας spa ritual.',
      details: [
        'Σχηματισμός & λίμαρισμα νυχιών',
        'Περιποίηση & θεραπεία επωνυχίων',
        'Μπάνιο ποδιών με αρωματικά άλατα',
        'Αφαίρεση κάλων & απολέπιση',
        'Βαθιά ενυδατική μάλαξη',
        'Βερνίκι ή gel χρώμα της επιλογής σας',
      ],
      note: 'Διαθέσιμο και στεγνό πεντικιούρ κατόπιν αιτήματος.'
    },
    {
      icon: '✨',
      title: 'Nail Art',
      price: 'από €2',
      short: 'Custom σχέδια, εποχιακά στυλ και 3D δημιουργίες.',
      details: [
        'Ελεύθερο σχέδιο & custom δημιουργίες',
        '3D στολίδια & πέτρες',
        'Εποχιακά & trend στυλ',
        'Τεχνικές French & ombre',
        'Εφέ stamping & foil',
        'Τιμολόγηση ανά νύχι διαθέσιμη',
      ],
      note: 'Μπορεί να προστεθεί σε οποιοδήποτε μανικιούρ ή πεντικιούρ.'
    },
    {
      icon: '🌿',
      title: 'Περιποίηση Ομορφιάς',
      price: 'από €35',
      short: 'Φρύδια, βλεφαρίδες και επιπλέον θεραπείες ομορφιάς.',
      details: [
        'Σχηματισμός & threading φρυδιών',
        'Βαφή φρυδιών & βλεφαρίδων',
        'Lift & lamination βλεφαρίδων',
        'Αποτρίχωση προσώπου',
        'Lamination φρυδιών',
        'Εξατομικευμένη συμβουλευτική ομορφιάς',
      ],
      note: 'Ρωτήστε μας για συνδυασμό υπηρεσιών για πλήρη εμπειρία ομορφιάς.'
    },
  ]
}

const labels = {
  en: { tag: 'What We Offer', title: 'Our Services', close: 'Close', included: 'What\'s included' },
  gr: { tag: 'Τι Προσφέρουμε', title: 'Υπηρεσίες', close: 'Κλείσιμο', included: 'Τι περιλαμβάνει' }
}

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function ServiceCard({ service, lang, index, onClick }) {
  const ref = useScrollReveal()
  return (
    <div
      className="service-card reveal-card"
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onClick(service)}
    >
      <div className="service-icon-wrap">
        <span className="service-icon">{service.icon}</span>
      </div>
      <h3 className="service-name">{service.title}</h3>
      <p className="service-desc">{service.short}</p>
      <span className="service-price">{service.price}</span>
      <span className="service-tap">{lang === 'en' ? 'Tap to learn more' : 'Πατήστε για περισσότερα'} →</span>
    </div>
  )
}

export default function Services({ lang }) {
  const [selected, setSelected] = useState(null)
  const headerRef = useScrollReveal()

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="section-header reveal-card" ref={headerRef}>
          <span className="section-tag">{labels[lang].tag}</span>
          <h2 className="section-title">{labels[lang].title}</h2>
        </div>

        <div className="services-grid">
          {services[lang].map((s, i) => (
            <ServiceCard key={i} service={s} lang={lang} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-icon">{selected.icon}</div>
            <h3 className="modal-title">{selected.title}</h3>
            <span className="modal-price">{selected.price}</span>
            <p className="modal-included">{labels[lang].included}</p>
            <ul className="modal-list">
              {selected.details.map((d, i) => (
                <li key={i} className="modal-item">
                  <span className="modal-check">✓</span>
                  {d}
                </li>
              ))}
            </ul>
            {selected.note && <p className="modal-note">{selected.note}</p>}
            <a
              href="https://wa.me/306947889058"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-book"
            >
              {lang === 'en' ? 'Book via WhatsApp' : 'Κράτηση WhatsApp'}
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

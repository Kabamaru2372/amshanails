import './Services.css'

const services = {
  en: [
    { icon: '💅', title: 'Manicure', desc: 'Classic, gel and acrylic nail treatments with expert finish.', price: 'from €__' },
    { icon: '🦶', title: 'Pedicure', desc: 'Relaxing foot care with our signature spa ritual.', price: 'from €__' },
    { icon: '✨', title: 'Nail Art', desc: 'Custom designs, seasonal styles and 3D artwork.', price: 'from €__' },
    { icon: '🌿', title: 'Beauty Care', desc: 'Eyebrows, lashes and additional beauty treatments.', price: 'from €__' },
  ],
  gr: [
    { icon: '💅', title: 'Μανικιούρ', desc: 'Κλασικό, gel και ακρυλικό με επαγγελματική φινέτσα.', price: 'από €__' },
    { icon: '🦶', title: 'Πεντικιούρ', desc: 'Χαλαρωτική περιποίηση ποδιών με το δικό μας spa ritual.', price: 'από €__' },
    { icon: '✨', title: 'Nail Art', desc: 'Custom σχέδια, εποχιακά στυλ και 3D δημιουργίες.', price: 'από €__' },
    { icon: '🌿', title: 'Περιποίηση Ομορφιάς', desc: 'Φρύδια, βλεφαρίδες και επιπλέον θεραπείες ομορφιάς.', price: 'από €__' },
  ]
}

const labels = {
  en: { tag: 'What We Offer', title: 'Our Services', note: '* Prices available upon request' },
  gr: { tag: 'Τι Προσφέρουμε', title: 'Υπηρεσίες', note: '* Τιμές διαθέσιμες κατόπιν επικοινωνίας' }
}

export default function Services({ lang }) {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="section-header">
          <span className="section-tag">{labels[lang].tag}</span>
          <h2 className="section-title">{labels[lang].title}</h2>
        </div>

        <div className="services-grid">
          {services[lang].map((s, i) => (
            <div className="service-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon-wrap">
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-price">{s.price}</span>
            </div>
          ))}
        </div>

        <p className="services-note">{labels[lang].note}</p>
      </div>
    </section>
  )
}

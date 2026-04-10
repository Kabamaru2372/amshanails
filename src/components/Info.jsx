import './Info.css'

const t = {
  en: {
    tag: 'Find Us',
    title: 'Visit Us in Rhodes',
    address: 'Ιερού Λόχου 11, Rhodes',
    hours: 'Tue – Sat: 10:00 – 18:00',
    mobile: 'Mobile',
    landline: 'Landline',
    instagram: 'Instagram',
    mapLink: 'Open in Google Maps'
  },
  gr: {
    tag: 'Βρείτε μας',
    title: 'Επισκεφθείτε μας στη Ρόδο',
    address: 'Ιερού Λόχου 11, Ρόδος',
    hours: 'Τρί – Σαβ: 10:00 – 18:00',
    mobile: 'Κινητό',
    landline: 'Σταθερό',
    instagram: 'Instagram',
    mapLink: 'Άνοιγμα στο Google Maps'
  }
}

export default function Info({ lang }) {
  return (
    <section className="info" id="info">
      <div className="info-inner">
        <div className="section-header">
          <span className="section-tag">{t[lang].tag}</span>
          <h2 className="section-title">{t[lang].title}</h2>
        </div>

        <div className="info-grid">
          <div className="info-map">
            <iframe
              title="Amsha Nails location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.0!2d28.2232!3d36.4341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI2JzAyLjgiTiAyOMKwMTMnMjMuNSJF!5e0!3m2!1sen!2sgr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="info-details">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <span className="info-label">{lang === 'en' ? 'Address' : 'Διεύθυνση'}</span>
                <span className="info-value">{t[lang].address}</span>
                <a
                  href="https://maps.google.com/?q=Ιερού+Λόχου+11,+Ρόδος"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  {t[lang].mapLink} →
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <span className="info-label">{lang === 'en' ? 'Hours' : 'Ώρες'}</span>
                <span className="info-value">{t[lang].hours}</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <span className="info-label">{t[lang].mobile}</span>
                <a href="tel:+306947889058" className="info-value link">+30 694 788 9058</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <span className="info-label">{t[lang].landline}</span>
                <a href="tel:+302241132440" className="info-value link">+30 224 113 2440</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📸</div>
              <div>
                <span className="info-label">{t[lang].instagram}</span>
                <a
                  href="https://www.instagram.com/amsha__rhodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-value link"
                >
                  @amsha__rhodes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

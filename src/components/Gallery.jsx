import './Gallery.css'

const labels = {
  en: { tag: 'Our Work', title: 'Gallery', sub: 'Every set of nails tells a story.' },
  gr: { tag: 'Η Δουλειά μας', title: 'Γκαλερί', sub: 'Κάθε σετ νυχιών λέει μια ιστορία.' }
}

const images = [
  { src: '/images/nails-cherry-art.png', tall: true },
  { src: '/images/nails-burgundy-square.png', tall: false },
  { src: '/images/nails-dark-silver.png', tall: false },
  { src: '/images/nails-red-classic.png', tall: false },
  { src: '/images/salon-interior.png', tall: false },
  { src: '/images/nails-hearts-nude.png', tall: true },
  { src: '/images/salon-spa-pedicure.png', tall: false },
  { src: '/images/nails-burgundy-floral.png', tall: false },
  { src: '/images/salon-emerald-wall.png', tall: false },
  { src: '/images/nails-process-blue.png', tall: false },
  { src: '/images/salon-selfcare.png', tall: false },
  { src: '/images/salon-nail-station.png', tall: false },
]

export default function Gallery({ lang }) {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="section-header">
          <span className="section-tag">{labels[lang].tag}</span>
          <h2 className="section-title">{labels[lang].title}</h2>
          <p className="gallery-sub">{labels[lang].sub}</p>
        </div>

        <div className="gallery-grid">
          {images.map((item, i) => (
            <div
              className={`gallery-item ${item.tall ? 'tall' : ''}`}
              key={i}
            >
              <img src={item.src} alt={`Amsha Nails work ${i + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">@amsha_rhodes</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <a
            href="https://www.instagram.com/amsha__rhodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            {lang === 'en' ? 'See more on Instagram' : 'Δες περισσότερα στο Instagram'}
          </a>
        </div>
      </div>
    </section>
  )
}

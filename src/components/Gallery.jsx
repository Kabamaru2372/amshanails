import { useEffect } from 'react'
import './Gallery.css'
import img1 from '../assets/images/nails-cherry-art.png'
import img2 from '../assets/images/nails-burgundy-square.png'
import img3 from '../assets/images/nails-dark-silver.png'
import img4 from '../assets/images/nails-red-classic.png'
import img5 from '../assets/images/salon-interior.png'
import img6 from '../assets/images/nails-hearts-nude.png'
import img7 from '../assets/images/salon-spa-pedicure.png'
import img8 from '../assets/images/nails-burgundy-floral.png'
import img9 from '../assets/images/salon-emerald-wall.png'
import img10 from '../assets/images/nails-process-blue.png'
import img11 from '../assets/images/salon-selfcare.png'
import img12 from '../assets/images/salon-nail-station.png'

const labels = {
  en: { tag: 'Our Work', title: 'Gallery', sub: 'Every set of nails tells a story.' },
  gr: { tag: 'Η Δουλειά μας', title: 'Γκαλερί', sub: 'Κάθε σετ νυχιών λέει μια ιστορία.' }
}

const images = [
  { src: img1, tall: true },
  { src: img2, tall: false },
  { src: img3, tall: false },
  { src: img4, tall: false },
  { src: img5, tall: false },
  { src: img6, tall: true },
  { src: img7, tall: false },
  { src: img8, tall: false },
  { src: img9, tall: false },
  { src: img10, tall: false },
  { src: img11, tall: false },
  { src: img12, tall: false },
]

export default function Gallery({ lang }) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-card')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="section-header reveal">
          <span className="section-tag">{labels[lang].tag}</span>
          <h2 className="section-title">{labels[lang].title}</h2>
          <p className="gallery-sub">{labels[lang].sub}</p>
        </div>

        <div className="gallery-grid">
          {images.map((item, i) => (
            <div
              className={`gallery-item reveal ${item.tall ? 'tall' : ''}`}
              key={i}
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <img src={item.src} alt={`Amsha Nails work ${i + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">@amsha__rhodes</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta reveal">
          <a href="https://www.instagram.com/amsha__rhodes/" target="_blank" rel="noopener noreferrer" className="btn-instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            {lang === 'en' ? 'See more on Instagram' : 'Δες περισσότερα στο Instagram'}
          </a>
        </div>
      </div>
    </section>
  )
}

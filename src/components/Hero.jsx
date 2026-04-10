import { useState, useEffect } from 'react'
import './Hero.css'
import img1 from '../assets/images/nails-cherry-art.png'
import img2 from '../assets/images/nails-burgundy-floral.png'
import img3 from '../assets/images/nails-dark-silver.png'
import img4 from '../assets/images/nails-hearts-nude.png'
import img5 from '../assets/images/nails-red-classic.png'
import img6 from '../assets/images/nails-burgundy-square.png'
import salon1 from '../assets/images/salon-interior.png'
import salon2 from '../assets/images/salon-emerald-wall.png'

const nailImages = [img1, img2, img3, img4, img5, img6]
const salonImages = [salon1, salon2]

const t = {
  en: {
    tag: 'Rhodes, Greece',
    h1a: 'Quiet',
    h1b: 'Luxury',
    sub: 'Professional nail art & beauty treatments in the heart of Rhodes. Where self-care becomes a ritual.',
    wa: 'Book via WhatsApp',
    ig: 'Instagram',
    scroll: 'Scroll to discover'
  },
  gr: {
    tag: 'Ρόδος, Ελλάδα',
    h1a: 'Quiet',
    h1b: 'Luxury',
    sub: 'Επαγγελματική τέχνη νυχιών & περιποίηση ομορφιάς στην καρδιά της Ρόδου. Εκεί που η αυτοφροντίδα γίνεται τελετουργία.',
    wa: 'Κράτηση WhatsApp',
    ig: 'Instagram',
    scroll: 'Ανακαλύψτε'
  }
}

export default function Hero({ lang }) {
  const [mainIdx, setMainIdx] = useState(0)
  const [secIdx, setSecIdx] = useState(0)
  const [mainFading, setMainFading] = useState(false)
  const [secFading, setSecFading] = useState(false)

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainFading(true)
      setTimeout(() => {
        setMainIdx(i => (i + 1) % nailImages.length)
        setMainFading(false)
      }, 500)
    }, 3500)
    return () => clearInterval(mainTimer)
  }, [])

  useEffect(() => {
    const secTimer = setInterval(() => {
      setSecFading(true)
      setTimeout(() => {
        setSecIdx(i => (i + 1) % salonImages.length)
        setSecFading(false)
      }, 500)
    }, 4500)
    return () => clearInterval(secTimer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-emerald-block" />
        <div className="hero-pattern" />
      </div>

      <div className="hero-inner">
        <div className="hero-text fade-up fade-up-delay-1">
          <div className="hero-tag">
            <span className="tag-dot" />
            {t[lang].tag}
          </div>
          <h1 className="hero-h1">
            <span className="h1-quiet">{t[lang].h1a}</span>
            <br />
            <span className="h1-luxury">{t[lang].h1b}</span>
          </h1>
          <p className="hero-sub">{t[lang].sub}</p>
          <div className="hero-btns fade-up fade-up-delay-2">
            <a href="https://wa.me/306947889058" target="_blank" rel="noopener noreferrer" className="btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              {t[lang].wa}
            </a>
            <a href="https://www.instagram.com/amsha__rhodes/" target="_blank" rel="noopener noreferrer" className="btn-ig">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              {t[lang].ig}
            </a>
          </div>
        </div>

        <div className="hero-visual fade-up fade-up-delay-3">
          <div className="hero-card hero-card-main floating">
            <img
              src={nailImages[mainIdx]}
              alt="Nail art"
              className={`hero-card-img ${mainFading ? 'fading' : ''}`}
            />
            <div className="hero-card-label">
              <span>Nail Art · Amsha</span>
            </div>
          </div>
          <div className="hero-card hero-card-secondary floating-slow">
            <img
              src={salonImages[secIdx]}
              alt="Amsha salon"
              className={`hero-card-img ${secFading ? 'fading' : ''}`}
            />
          </div>
          <div className="hero-badge">
            <div className="badge-inner">
              <span className="badge-num">5★</span>
              <span className="badge-text">Rhodes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-line" />
        <span className="scroll-label">{t[lang].scroll}</span>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import './Navbar.css'

const t = {
  en: { services: 'Services', gallery: 'Gallery', contact: 'Contact', book: 'Book Now' },
  gr: { services: 'Υπηρεσίες', gallery: 'Γκαλερί', contact: 'Επικοινωνία', book: 'Κράτηση' }
}

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-amsha">Amsha</span>
          <span className="logo-dot">·</span>
          <span className="logo-nails">Nails</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('services')}>{t[lang].services}</button>
          <button onClick={() => scrollTo('gallery')}>{t[lang].gallery}</button>
          <button onClick={() => scrollTo('contact')}>{t[lang].contact}</button>
        </div>

        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <span>/</span>
            <button className={lang === 'gr' ? 'active' : ''} onClick={() => setLang('gr')}>GR</button>
          </div>
          <button className="btn-book" onClick={() => scrollTo('contact')}>
            {t[lang].book}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}

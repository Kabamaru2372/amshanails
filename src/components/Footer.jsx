import './Footer.css'

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-amsha">Amsha</span>
          <span className="logo-dot">·</span>
          <span className="logo-nails">Nails</span>
        </div>
        <p className="footer-address">Ιερού Λόχου 11, Rhodes, Greece</p>
        <div className="footer-links">
          <a href="https://wa.me/306947889058" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <span>·</span>
          <a href="https://www.instagram.com/amsha_rhodes/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Amsha Nails & Beauty · Rhodes
          {lang === 'gr' ? ' · Όλα τα δικαιώματα κατοχυρωμένα' : ' · All rights reserved'}
        </p>
      </div>
    </footer>
  )
}

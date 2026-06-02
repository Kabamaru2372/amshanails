import { useEffect, useRef } from 'react'
import './PriceList.css'

const data = {
  en: {
    tag: 'Transparent Pricing',
    title: 'Price List',
    extraTitle: 'Extra Charges',
    categories: [
      {
        name: 'Manicure',
        items: [
          { label: 'Polish', price: '25€' },
          { label: 'Shellac – classic base', price: '30€' },
          { label: 'Shellac – rubber base', price: '35€' },
          { label: 'Artificial nails', price: '60€' },
          { label: 'Maintenance', price: '45€' },
        ],
      },
      {
        name: 'Lashes & Brows',
        items: [
          { label: 'Lash lamination', price: '45€' },
          { label: 'Brow lamination', price: '45€' },
          { label: 'Brow tint', price: '20€' },
          { label: 'Brow shape', price: '15€' },
        ],
      },
      {
        name: 'Pedicure',
        items: [
          { label: 'Spa pedicure', price: '45€' },
          { label: 'Classic pedicure', price: '35€' },
          { label: "Men's pedicure", price: '30€' },
          { label: "Spa men's pedicure", price: '40€' },
        ],
      },
      {
        name: 'Waxing',
        items: [
          { label: 'Full face', price: '20€' },
          { label: 'Arms', price: '25€' },
          { label: 'Legs', price: '35€' },
        ],
      },
    ],
    extras: [
      { label: 'Removal', price: '+10–15€' },
      { label: 'Ombre / baby boomer nails', price: '+5€' },
      { label: 'French nails', price: '+5€' },
      { label: 'Nail art', price: 'from 5€' },
    ],
  },
  gr: {
    tag: 'Διαφανείς Τιμές',
    title: 'Τιμοκατάλογος',
    extraTitle: 'Επιπλέον Χρεώσεις',
    categories: [
      {
        name: 'Μανικιούρ',
        items: [
          { label: 'Polish', price: '25€' },
          { label: 'Shellac – κλασική βάση', price: '30€' },
          { label: 'Shellac – rubber base', price: '35€' },
          { label: 'Τεχνητά νύχια', price: '60€' },
          { label: 'Συντήρηση', price: '45€' },
        ],
      },
      {
        name: 'Βλεφαρίδες & Φρύδια',
        items: [
          { label: 'Lamination βλεφαρίδων', price: '45€' },
          { label: 'Lamination φρυδιών', price: '45€' },
          { label: 'Βαφή φρυδιών', price: '20€' },
          { label: 'Σχηματισμός φρυδιών', price: '15€' },
        ],
      },
      {
        name: 'Πεντικιούρ',
        items: [
          { label: 'Spa πεντικιούρ', price: '45€' },
          { label: 'Κλασικό πεντικιούρ', price: '35€' },
          { label: 'Ανδρικό πεντικιούρ', price: '30€' },
          { label: 'Spa ανδρικό πεντικιούρ', price: '40€' },
        ],
      },
      {
        name: 'Αποτρίχωση',
        items: [
          { label: 'Πρόσωπο', price: '20€' },
          { label: 'Μπράτσα', price: '25€' },
          { label: 'Πόδια', price: '35€' },
        ],
      },
    ],
    extras: [
      { label: 'Αφαίρεση', price: '+10–15€' },
      { label: 'Ombre / baby boomer νύχια', price: '+5€' },
      { label: 'French νύχια', price: '+5€' },
      { label: 'Nail art', price: 'από 5€' },
    ],
  },
}

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function CategoryCard({ category, index }) {
  const ref = useScrollReveal()
  return (
    <div className="pl-card reveal-card" ref={ref} style={{ animationDelay: `${index * 0.1}s` }}>
      <h3 className="pl-cat-name">{category.name}</h3>
      <div className="pl-divider" />
      <ul className="pl-items">
        {category.items.map((item, i) => (
          <li key={i} className={`pl-item${item.highlight ? ' pl-item--highlight' : ''}`}>
            <span className="pl-item-label">{item.label}</span>
            <span className="pl-item-dots" />
            <span className="pl-item-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PriceList({ lang }) {
  const d = data[lang]
  const headerRef = useScrollReveal()
  const extrasRef = useScrollReveal()

  return (
    <section className="pricelist" id="pricelist">
      <div className="pricelist-inner">
        <div className="section-header reveal-card" ref={headerRef}>
          <span className="section-tag">{d.tag}</span>
          <h2 className="section-title">{d.title}</h2>
        </div>

        <div className="pl-arch">
          <div className="pl-grid">
            {d.categories.map((cat, i) => (
              <CategoryCard key={i} category={cat} index={i} />
            ))}
          </div>

          <div className="pl-extras reveal-card" ref={extrasRef}>
            <h3 className="pl-extras-title">{d.extraTitle}</h3>
            <div className="pl-divider pl-divider--center" />
            <ul className="pl-extras-list">
              {d.extras.map((item, i) => (
                <li key={i} className="pl-item pl-item--extra">
                  <span className="pl-item-label">{item.label}</span>
                  <span className="pl-item-dots" />
                  <span className="pl-item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

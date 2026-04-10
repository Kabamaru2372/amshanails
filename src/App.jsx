import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Info from './components/Info'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="app">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Gallery lang={lang} />
      <Booking lang={lang} />
      <Info lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

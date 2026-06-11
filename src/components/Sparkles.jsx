import { useMemo } from 'react'
import './Sparkles.css'

const COUNT = 18

function makeParticles() {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    glyph: i % 3 === 0 ? '✦' : i % 3 === 1 ? '✧' : '·',
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 7 + Math.random() * 9,
    delay: Math.random() * 8,
    duration: 5 + Math.random() * 7,
    drift: 14 + Math.random() * 22,
  }))
}

export default function Sparkles() {
  const particles = useMemo(makeParticles, [])

  return (
    <div className="sparkles" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="sparkle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s, ${p.delay * 0.7}s`,
            animationDuration: `${p.duration}s, ${p.duration * 2.4}s`,
            '--drift': `${p.drift}px`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  )
}

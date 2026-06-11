import { useEffect, useMemo, useRef } from 'react'
import './Sparkles.css'

const AMBIENT_COUNT = 16
const TRAIL_POOL = 26
const TRAIL_INTERVAL_MS = 36

// Champagne / gold / rose-gold glitter tones
const COLORS = ['#E8B84B', '#F3D9A4', '#D9A8B8', '#FFF0D2', '#C9962A']

function makeAmbient() {
  return Array.from({ length: AMBIENT_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 3 + Math.random() * 4.5,
    color: COLORS[i % COLORS.length],
    delay: -(Math.random() * 22),
    duration: 16 + Math.random() * 16,
    sway: (Math.random() - 0.5) * 90,
  }))
}

export default function Sparkles() {
  const ambient = useMemo(makeAmbient, [])
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const pool = Array.from({ length: TRAIL_POOL }, () => {
      const el = document.createElement('span')
      el.className = 'glitter-trail'
      container.appendChild(el)
      return el
    })

    let poolIdx = 0
    let lastSpawn = 0

    const onPointerMove = (e) => {
      const now = performance.now()
      if (now - lastSpawn < TRAIL_INTERVAL_MS) return
      lastSpawn = now

      const el = pool[poolIdx]
      poolIdx = (poolIdx + 1) % TRAIL_POOL

      const size = 3 + Math.random() * 5
      const jitterX = (Math.random() - 0.5) * 26
      const jitterY = (Math.random() - 0.5) * 26
      el.style.left = `${e.clientX + jitterX}px`
      el.style.top = `${e.clientY + jitterY}px`
      el.style.width = `${size}px`
      el.style.height = `${size}px`
      el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)]
      el.classList.remove('on')
      void el.offsetWidth
      el.classList.add('on')
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      pool.forEach(el => el.remove())
    }
  }, [])

  return (
    <div className="sparkles" ref={containerRef} aria-hidden="true">
      {ambient.map(p => (
        <span
          key={p.id}
          className="glitter-dust"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--sway': `${p.sway}px`,
          }}
        />
      ))}
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const ROWS = 7
const COLS = 26
const TOTAL = ROWS * COLS
const PALETTE = [
  'rgba(240,86,78,.28)',
  'rgba(240,86,78,.55)',
  'rgba(240,86,78,.82)',
  '#F0564E',
]
const EMPTY = 'rgba(255,255,255,.05)'

/**
 * The "live" habit heatmap (mirrors app.js `buildHeatmap`). A recency-weighted
 * red grid is painted immediately on mount so the final state is always
 * correct, then re-painted every 4.2s for a living feel — but only while
 * on-screen and when reduced-motion is not set.
 */
export default function Heatmap() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    const grid = ref.current
    if (!grid) return
    const cells = Array.from(grid.children) as HTMLElement[]

    const paint = (animate: boolean) => {
      cells.forEach((c, idx) => {
        const col = Math.floor(idx / ROWS)
        const recency = col / COLS
        const lit = Math.random() < 0.32 + recency * 0.55
        const lvl = lit ? Math.min(3, Math.floor(Math.random() * (1 + recency * 3.5))) : -1
        c.style.transitionDelay = animate && !reduce ? `${col * 16 + (idx % ROWS) * 6}ms` : '0ms'
        c.style.background = lvl < 0 ? EMPTY : PALETTE[lvl]
      })
    }

    paint(false) // final-state fill immediately

    if (reduce) return
    const id = window.setInterval(() => {
      const r = grid.getBoundingClientRect()
      const h = window.innerHeight || 800
      if (r.top < h && r.bottom > 0) paint(true)
    }, 4200)
    return () => window.clearInterval(id)
  }, [reduce])

  return (
    <div className="heatmap" ref={ref}>
      {Array.from({ length: TOTAL }, (_, i) => (
        <div className="hc" key={i} />
      ))}
    </div>
  )
}

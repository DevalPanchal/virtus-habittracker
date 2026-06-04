import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Counts up from 0 to `target` with a cubic-out easing (mirrors app.js
 * `countUp`). Returns the formatted string to render.
 *
 * The final value is rendered immediately when reduced-motion is set or
 * when a literal `display` override (e.g. "∞") is provided, so the number
 * is always correct even without animation.
 */
export function useCountUp(target: number, display?: string, durationMs = 1100): string {
  const reduce = usePrefersReducedMotion()
  // Initialize to the final value so it is correct even if the animation
  // never runs (reduced motion, literal override, or throttled timers).
  const [text, setText] = useState(() => display ?? target.toLocaleString())

  useEffect(() => {
    if (reduce || display !== undefined) return
    let raf = 0
    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const p = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3)
      setText(Math.round(target * eased).toLocaleString())
      if (p < 1) raf = requestAnimationFrame(tick)
      else setText(target.toLocaleString())
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, display, durationMs, reduce])

  return text
}

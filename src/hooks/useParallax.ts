import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Cosmetic gallery parallax (mirrors app.js `parallax`). Returns a ref to
 * attach to a container; every descendant carrying a `data-par` attribute
 * is translated on the Y axis relative to the viewport center.
 *
 * Disabled entirely under reduced-motion — elements keep their natural
 * position, so the layout is always correct.
 */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-par]'))

    if (reduce) {
      items.forEach((el) => {
        el.style.transform = ''
      })
      return
    }

    let ticking = false
    const apply = () => {
      const h = window.innerHeight || 800
      items.forEach((el) => {
        const r = el.getBoundingClientRect()
        const off = (r.top + r.height / 2 - h / 2) / h
        const par = parseFloat(el.getAttribute('data-par') || '0')
        el.style.transform = `translateY(${off * par * 100}px)`
      })
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        apply()
        ticking = false
      })
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduce])

  return ref
}

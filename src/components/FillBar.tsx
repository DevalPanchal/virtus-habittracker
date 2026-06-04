import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

interface FillBarProps {
  className: string
  /** Target fill, 0–100. */
  percent: number
  style?: CSSProperties
}

/**
 * A progress-bar fill that starts at width 0 and animates to `percent` after
 * mount, letting the CSS width-transition play (mirrors the app.js step that
 * sets `.attr-fill` / `.ifill` widths from data attributes). The final width
 * is set imperatively, so it is always reached even if the transition is
 * skipped.
 */
export default function FillBar({ className, percent, style }: FillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // next frame so the 0 -> percent transition is observable
    const raf = requestAnimationFrame(() => {
      el.style.width = `${percent}%`
    })
    return () => cancelAnimationFrame(raf)
  }, [percent])
  return <div className={className} ref={ref} style={style} />
}

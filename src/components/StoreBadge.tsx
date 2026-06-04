import { AppleGlyph, PlayGlyph } from './icons'

interface StoreBadgeProps {
  store: 'apple' | 'play'
  href?: string
}

/** A Virtus-styled "Download on the App Store / Get it on Google Play" badge. */
export default function StoreBadge({ store, href = '#download' }: StoreBadgeProps) {
  const isApple = store === 'apple'
  return (
    <a className="appstore" href={href} aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}>
      {isApple ? <AppleGlyph /> : <PlayGlyph />}
      <span className="as-txt">
        <span className="as-sm">{isApple ? 'Download on the' : 'Get it on'}</span>
        <span className="as-lg">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </a>
  )
}

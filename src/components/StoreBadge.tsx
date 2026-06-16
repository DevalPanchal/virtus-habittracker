import { AppleGlyph, PlayGlyph } from './icons'

interface StoreBadgeProps {
  store: 'apple' | 'play'
  href?: string
}

export const APP_STORE_URL = 'https://apps.apple.com/us/app/virtus-habit-tracker/id6760439637'

/** A Virtus-styled "Download on the App Store / Get it on Google Play" badge. */
export default function StoreBadge({ store, href }: StoreBadgeProps) {
  const isApple = store === 'apple'
  const finalHref = href ?? (isApple ? APP_STORE_URL : '#download')
  const isExternal = finalHref.startsWith('http')
  return (
    <a
      className="appstore"
      href={finalHref}
      {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
      aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
    >
      {isApple ? <AppleGlyph /> : <PlayGlyph />}
      <span className="as-txt">
        <span className="as-sm">{isApple ? 'Download on the' : 'Get it on'}</span>
        <span className="as-lg">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </a>
  )
}

/** The Virtus brand mark — concentric circles. */
export function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  )
}

/** Apple logo glyph used inside the store badge. */
export function AppleGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.1 1.2-.4 2.4-1.1 3.2-.8.9-2 1.6-3.1 1.5-.1-1.2.4-2.4 1.1-3.2.8-.9 2.1-1.5 3.1-1.5zM20 17.1c-.5 1.2-.8 1.8-1.5 2.9-1 1.5-2.3 3.3-4 3.3-1.5 0-1.9-1-3.9-1-2 0-2.4 1-3.9 1-1.7 0-3-1.7-3.9-3.1C-.2 16.4-.5 11.1 1.9 8.3 3 6.9 4.6 6 6.2 6c1.6 0 2.6 1 3.9 1 1.3 0 2-1 3.9-1 1.4 0 2.9.8 4 2.1-3.5 1.9-2.9 6.9 0 8.9z" />
    </svg>
  )
}

/** Google Play triangle glyph used inside the store badge. */
export function PlayGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l9-9.6-9-9.8zm12.7 7.3-3.1-1.8L5.4 1.6l10.9 8zm0 4.8L5.4 22.4l7.8-6.2 3.1-1.8zm3.8-3.6-2.6-1.5-3.3 3.5 3.3 3.5 2.6-1.5c.8-.5.8-1.5 0-2.5z" />
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

/** Attribute glyph for one of the six character stats, selected by name. */
export function AttrIcon({ name }: { name: string }) {
  switch (name) {
    case 'Mind':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case 'Intelligence':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
        </svg>
      )
    case 'Strength':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 7v10M18 7v10M4 10v4M20 10v4M6 12h12" />
        </svg>
      )
    case 'Body':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h4l2-5 4 10 2-5h6" />
        </svg>
      )
    case 'Heart':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3 1.2 4 2.5 1-1.3 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
        </svg>
      )
    case 'Discipline':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        </svg>
      )
    default:
      return null
  }
}

export function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.2-9.3L.9 2h7.2l5 6.6zm-1.2 18h1.9L6.4 4H4.4z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 3c.3 2.3 1.7 4 4 4.3v3c-1.5 0-2.9-.4-4-1.2v6.4A6.5 6.5 0 1 1 9.5 9v3.1A3.4 3.4 0 1 0 13 15.5V3z" />
    </svg>
  )
}

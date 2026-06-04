import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LEGAL_UPDATED } from '../data/site'
import { ArrowLeftIcon } from './icons'

interface TocItem {
  id: string
  label: string
}

interface LegalLayoutProps {
  title: string
  intro: string
  /** Highlighted callout shown above the table of contents. */
  note?: ReactNode
  toc: TocItem[]
  /** Footer cross-link to the sibling legal page. */
  crossLink: { to: string; label: string }
  children: ReactNode
}

/** Shared chrome for the privacy & terms pages (nav, header, TOC, footer). */
export default function LegalLayout({ title, intro, note, toc, crossLink, children }: LegalLayoutProps) {
  return (
    <>
      <nav className="nav scrolled" id="nav">
        <div className="nav-in">
          <Link className="brand" to="/" aria-label="Virtus home">
            <span className="mark">
              <img src="/images/virtus-icon.png" alt="Virtus" />
            </span>
            Virtus
          </Link>
          <div className="nav-cta">
            <Link className="btn btn-primary" to="/#download">Get Virtus</Link>
          </div>
        </div>
      </nav>

      <main className="legal-wrap">
        <Link className="legal-back" to="/">
          <ArrowLeftIcon /> Back to home
        </Link>
        <h1>{title}</h1>
        <div className="legal-updated">Last updated: {LEGAL_UPDATED}</div>
        <p className="legal-intro">{intro}</p>

        {note && <div className="legal-note">{note}</div>}

        <div className="legal-toc">
          <h4>Contents</h4>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </div>

        {children}
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="foot-bottom" style={{ marginTop: 0, borderTop: 'none', paddingTop: 0 }}>
            <span className="mono">© 2026 Virtus. All rights reserved.</span>
            <span>
              <Link to={crossLink.to} style={{ color: 'var(--muted)' }}>{crossLink.label}</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

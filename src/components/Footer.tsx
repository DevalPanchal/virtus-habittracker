import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../data/site'
import { BrandMark, TwitterIcon, InstagramIcon, TikTokIcon } from './icons'

/** Site footer with brand, product/company/legal columns and socials. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" to="/">
              <span className="mark">
                <BrandMark />
              </span>
              Virtus
            </Link>
            <p>The habit tracker that turns self-improvement into a role-playing game.</p>
            <div className="foot-soc">
              <a href="#" aria-label="X / Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#attributes">Attributes</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Support</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="mono">© 2026 Virtus. All rights reserved.</span>
          <span className="mono">Made for people becoming.</span>
        </div>
      </div>
    </footer>
  )
}

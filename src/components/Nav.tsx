import { Link } from 'react-router-dom'
import { useScrolled } from '../hooks/useScrolled'

/** Fixed top navigation with frosted-glass blur once scrolled. */
export default function Nav() {
    const scrolled = useScrolled()
    return (
        <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
            <div className="nav-in">
                <Link className="brand" to="/" aria-label="Virtus home">
                    <span className="mark">
                        <img src={`${import.meta.env.BASE_URL}images/virtus-icon.png`} alt="Virtus" />
                    </span>
                    Virtus
                </Link>
                <div className="nav-links">
                    <a className="lnk" href="#features">Features</a>
                    <a className="lnk" href="#attributes">Attributes</a>
                    <a className="lnk" href="#how">How it works</a>
                    <a className="lnk" href="#pricing">Pricing</a>
                </div>
                <div className="nav-cta">
                    <a className="btn btn-primary" href="#download">Get Virtus</a>
                </div>
            </div>
        </nav>
    )
}

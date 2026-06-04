import StoreBadge from './StoreBadge'

/** Closing call-to-action card. */
export default function FinalCta() {
  return (
    <section className="cta" id="download">
      <div className="wrap">
        <div className="cta-card reveal">
          <span className="eyebrow center" style={{ justifyContent: 'center' }}>
            Your journey starts now
          </span>
          <h2 style={{ marginTop: 16 }}>
            Even one point of damage
            <br />
            means you survived today.
          </h2>
          <p>
            Download Virtus, create your first habit, and start leveling up the only character
            that matters — you.
          </p>
          <div className="hero-cta">
            <StoreBadge store="apple" href="#" />
            {/* <StoreBadge store="play" href="#" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

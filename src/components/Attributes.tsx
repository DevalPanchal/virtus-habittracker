import { ATTRIBUTES } from '../data/site'
import { AttrIcon } from './icons'
import FillBar from './FillBar'

/** The six-attribute character sheet with animated bars and radar image. */
export default function Attributes() {
  return (
    <section className="attrs" id="attributes">
      <div className="wrap">
        <div className="attrs-grid">
          <div className="attr-copy">
            <span className="eyebrow reveal">Character stats</span>
            <h2 className="section-title reveal d1">
              Six attributes.
              <br />
              One you.
            </h2>
            <p className="lede reveal d2">
              Every habit feeds a core stat. Lift weights and your Strength climbs. Read and your
              Intelligence grows. Over time your character sheet becomes an honest mirror of the
              life you're building.
            </p>
            <div className="attr-list">
              {ATTRIBUTES.map((attr) => {
                const color = `var(${attr.colorVar})`
                return (
                  <div className="attr" key={attr.name}>
                    <div className="attr-top">
                      <span className="attr-name">
                        <span className="ai" style={{ background: `color-mix(in srgb, ${color} 16%, transparent)`, color }}>
                          <AttrIcon name={attr.name} />
                        </span>
                        {attr.name}
                      </span>
                      <span className="attr-val" style={{ color }}>{attr.value}</span>
                    </div>
                    <div className="attr-bar">
                      <FillBar className="attr-fill" percent={attr.value} style={{ background: attr.fill }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="attr-side reveal d2">
            <div className="attr-frame">
              <img src={`${import.meta.env.BASE_URL}images/stats-radar.png`} alt="Hero attributes radar chart in the Virtus app" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

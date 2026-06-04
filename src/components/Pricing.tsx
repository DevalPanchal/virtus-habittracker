import {
  FREE_FEATURES,
  PREMIUM_FEATURES,
  PREMIUM_PRICE,
  PREMIUM_PERIOD,
} from '../data/site'
import { CheckIcon } from './icons'

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul>
      {features.map((f) => (
        <li key={f}>
          <CheckIcon />
          {f}
        </li>
      ))}
    </ul>
  )
}

/** Free vs Virtus Premium comparison (facts corrected against the briefing). */
export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Pricing</span>
          <h2 className="section-title reveal d1">
            Start free. Go further
            <br />
            when you're ready.
          </h2>
        </div>
        <div className="price-grid">
          <div className="plan reveal">
            <div className="ptag">Free</div>
            <div className="pprice">$0<small> / forever</small></div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>
              Everything you need to build your first streaks.
            </p>
            <FeatureList features={FREE_FEATURES} />
            <a className="btn btn-ghost" href="#download">Download free</a>
          </div>
          <div className="plan pro reveal d1">
            <div className="ptag">Virtus Premium</div>
            <div className="pprice">{PREMIUM_PRICE}<small> {PREMIUM_PERIOD}</small></div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>
              For the long game. Cancel anytime.
            </p>
            <FeatureList features={PREMIUM_FEATURES} />
            <a className="btn btn-primary" href="#download">Go Premium</a>
            <p className="pfine">
              Billed through your App Store or Google Play account. Subscriptions auto-renew
              unless canceled at least 24 hours before the period ends. Manage or cancel anytime
              in your store account settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

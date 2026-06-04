import { STAT_STRIP, type StatStripItem } from '../data/site'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ item, delay }: { item: StatStripItem; delay: string }) {
  const text = useCountUp(item.value, item.display)
  return (
    <div className={`strip-item reveal${delay}`}>
      <div className={`num${item.grad ? ' grad-green' : ''}`}>{text}</div>
      <div className="cap">{item.caption}</div>
    </div>
  )
}

/** The four count-up product stats below the hero. */
export default function StatStrip() {
  const delays = ['', ' d1', ' d2', ' d3']
  return (
    <section className="strip">
      <div className="wrap">
        <div className="strip-grid">
          {STAT_STRIP.map((item, i) => (
            <StatItem key={item.caption} item={item} delay={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}

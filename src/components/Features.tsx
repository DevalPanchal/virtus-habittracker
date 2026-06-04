import Heatmap from './Heatmap'
import FillBar from './FillBar'

/** The bento feature grid: streaks, daily quests, Expeditions, levels, identity. */
export default function Features() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">The system</span>
          <h2 className="section-title reveal d1">
            A game you win by
            <br />
            actually living.
          </h2>
          <p className="lede reveal d2">
            Most trackers give you a checkbox and a guilt trip. Virtus gives you a character
            sheet, a streak, and a reason to show up tomorrow.
          </p>
        </div>

        <div className="bento">
          {/* live heatmap */}
          <div className="cell big reveal">
            <div className="ic-badge" style={{ background: 'rgba(240,86,78,.14)', color: 'var(--body)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M3 9h18M9 3v18" />
              </svg>
            </div>
            <div className="c-eyebrow">Streaks &amp; consistency</div>
            <h3>Watch every day add up.</h3>
            <p>
              A full-history heatmap for each habit. Miss a day and the gap stares back — keep
              showing up and the grid lights up like a scoreboard.
            </p>
            <Heatmap />
          </div>

          {/* daily quests */}
          <div className="cell mid reveal d1">
            <div className="ic-badge" style={{ background: 'rgba(45,209,122,.14)', color: 'var(--green)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.6" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="c-eyebrow">Daily quests</div>
            <h3>Fresh objectives, daily.</h3>
            <div className="quest-mini">
              <div className="qrow">
                <div className="qleft">
                  <span className="qico" style={{ background: 'rgba(45,209,122,.16)', color: 'var(--green)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <div className="qname">Daily Grind</div>
                    <div className="qsub">Complete 2 habits</div>
                  </div>
                </div>
                <span className="qxp">+30 XP</span>
              </div>
              <div className="qrow">
                <div className="qleft">
                  <span className="qico" style={{ background: 'rgba(160,107,255,.16)', color: 'var(--mind)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="qname">Mind Focus</div>
                    <div className="qsub">3 mind habits</div>
                  </div>
                </div>
                <span className="qxp" style={{ color: 'var(--mind)' }}>+50 XP</span>
              </div>
            </div>
          </div>

          {/* expeditions */}
          <div className="cell half path reveal">
            <div className="pimg">
              <img src="/images/paths.png" alt="Expedition illustration" />
            </div>
            <div className="pover" />
            <div className="pbody">
              <div className="c-eyebrow" style={{ color: 'var(--green)' }}>Expeditions</div>
              <h3 style={{ marginTop: 8 }}>Guided multi-day journeys.</h3>
              <p>
                Hand-crafted programs like The Monk's Retreat, The Sleep Sanctuary and Deep Work
                Mastery — each day unlocks a focused practice, a permanent habit, and bonus XP.
              </p>
            </div>
          </div>

          {/* character / level */}
          <div className="cell third reveal d1">
            <div className="ic-badge" style={{ background: 'rgba(160,107,255,.14)', color: 'var(--mind)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 16 3 5l5.5 4L12 4l3.5 5L21 5l-2 11z" />
                <path d="M5 20h14" />
              </svg>
            </div>
            <div className="c-eyebrow">Levels &amp; XP</div>
            <h3>Level up a real character.</h3>
            <p>
              Earn XP and climb nine ranked tiers — from Novice Adventurer to Ascendant Avatar —
              unlocking your story and harder challenges as you grow.
            </p>
          </div>

          {/* identity */}
          <div className="cell third reveal d2">
            <div className="ic-badge" style={{ background: 'rgba(45,209,122,.14)', color: 'var(--green)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 11a4 4 0 1 0-4-4" />
                <path d="M12 11c-3 0-5 2-5 5v1" />
                <path d="M17 14c0 4-2 7-2 7" />
              </svg>
            </div>
            <div className="c-eyebrow">Who you're becoming</div>
            <div className="identity">
              <div className="ititle">"I am a calm, centered person"</div>
              <div className="ibar">
                <FillBar className="ifill" percent={93} />
              </div>
              <div className="imeta">
                <span>140 votes cast</span>
                <span className="tier-pill">Deeply rooted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

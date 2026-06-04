import StoreBadge from './StoreBadge'

/** Hero: headline, store badges, and the phone mockup with floating chips. */
export default function Hero() {
    return (
        <header className="hero">
            <div className="wrap">
                <div className="hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow reveal">Habit tracker · RPG for your life</span>
                        <h1 className="reveal d1">
                            Build the habits.
                            <br />
                            <span className="grad-green">Become the hero.</span>
                        </h1>
                        <p className="lede reveal d2">
                            Virtus turns self-improvement into a role-playing game. Every habit you complete
                            earns XP, levels up your character, and casts a vote for who you're becoming.
                        </p>
                        <div className="hero-cta reveal d3">
                            <StoreBadge store="apple" />
                            {/* <StoreBadge store="play" /> */}
                            <a className="btn btn-ghost" href="#how">See how it works</a>
                        </div>
                        <div className="hero-note reveal d4">
                            <span className="dot" /> Free to start · Optional Premium · iPhone &amp; Android
                        </div>
                    </div>

                    <div className="phone-stage reveal d2">
                        <span className="halo" />
                        <div className="phone">
                            <span className="island" />
                            <div className="screen">
                                <img src={`${import.meta.env.BASE_URL}images/home-heatmap.png`} alt="Virtus home screen showing habit streak heatmaps" />
                            </div>
                        </div>

                        <div className="float-chip chip-streak">
                            <span className="ic" style={{ background: 'rgba(245,165,36,.16)', color: 'var(--strength)' }}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .3-1.8.6-2.4C6 8 5 10.4 5 13a7 7 0 0 0 14 0c0-5-7-11-7-11z" />
                                </svg>
                            </span>
                            <div>
                                <div className="lbl">Streak</div>
                                <div className="val" style={{ color: 'var(--strength)' }}>72 days</div>
                            </div>
                        </div>

                        <div className="float-chip chip-xp">
                            <span className="ic" style={{ background: 'rgba(45,209,122,.16)', color: 'var(--green)' }}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                                </svg>
                            </span>
                            <div>
                                <div className="lbl">Quest complete</div>
                                <div className="val" style={{ color: 'var(--green)' }}>+50 XP</div>
                            </div>
                        </div>

                        <div className="float-chip chip-level">
                            <span className="ic" style={{ background: 'rgba(160,107,255,.16)', color: 'var(--mind)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 16 3 5l5.5 4L12 4l3.5 5L21 5l-2 11z" />
                                    <path d="M5 20h14" />
                                </svg>
                            </span>
                            <div>
                                <div className="lbl">Rank up</div>
                                <div className="val" style={{ color: 'var(--mind)' }}>Apprentice</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

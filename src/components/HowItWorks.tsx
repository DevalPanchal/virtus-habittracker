interface Step {
  num: string
  title: string
  copy: string
  img: string
  alt: string
  delay: string
}

const STEPS: Step[] = [
  {
    num: 'STEP 01',
    title: 'Create your habit',
    copy: 'Name it, pick an icon and color, choose which attribute it levels up, and set a difficulty — harder habits earn more XP.',
    img: 'images/new-habit.png',
    alt: 'Creating a new habit in Virtus',
    delay: '',
  },
  {
    num: 'STEP 02',
    title: 'Complete & earn',
    copy: 'Check it off each day to keep your streak alive, bank XP, finish daily quests, and cast a vote for the person you\'re becoming.',
    img: 'images/home-list.png',
    alt: 'Completing habits in Virtus',
    delay: ' d1',
  },
  {
    num: 'STEP 03',
    title: 'Level up your life',
    copy: 'Climb ranks, grow your six attributes, unlock achievements, and watch your character sheet reflect who you really are.',
    img: 'images/character-stats.png',
    alt: 'Character stats and progression in Virtus',
    delay: ' d2',
  },
]

/** Three-step "how it works" walkthrough with screenshots. */
export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">How it works</span>
          <h2 className="section-title reveal d1">Three steps to a streak.</h2>
        </div>
        <div className="steps">
          {STEPS.map((step) => (
            <div className={`step reveal${step.delay}`} key={step.num}>
              <div className="snum">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              <div className="sshot">
                <img src={`${import.meta.env.BASE_URL}${step.img}`} alt={step.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

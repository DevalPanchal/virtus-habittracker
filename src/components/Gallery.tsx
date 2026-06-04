import { useParallax } from '../hooks/useParallax'

interface Frame {
    img: string
    alt: string
    par: string
    className: string
}

const FRAMES: Frame[] = [
    { img: '/images/journey-profile.png', alt: 'Your Journey profile screen', par: '0.04', className: 'gframe lift1 reveal d1' },
    { img: '/images/achievements.png', alt: 'Achievements screen', par: '-0.05', className: 'gframe lift1 reveal d1' },
    { img: '/images/rank-cards.png', alt: 'Rank cards screen', par: '0.06', className: 'gframe lift1 reveal d1' },
    { img: '/images/customize.png', alt: 'Customize habit attributes screen', par: '-0.04', className: 'gframe lift1 reveal d1' },
]

/** "Inside the app" screenshot gallery with subtle scroll parallax. */
export default function Gallery() {
    const gridRef = useParallax<HTMLDivElement>()
    return (
        <section className="gallery">
            <div className="wrap">
                <div className="sec-head">
                    <span className="eyebrow reveal">Inside the app</span>
                    <h2 className="section-title reveal d1">
                        Dark, fast, and built
                        <br />
                        to keep you playing.
                    </h2>
                </div>
                <div className="gal-grid" ref={gridRef}>
                    {FRAMES.map((frame) => (
                        <div className={frame.className} data-par={frame.par} key={frame.img}>
                            <img src={frame.img} alt={frame.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

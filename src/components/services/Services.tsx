import { useEffect, useRef, useState } from 'react';
import '../../styles/services.css';
import { copy, samples, type Language } from '../../i18n';

const SAMPLES = [
  { image: '/brand/services-carousel/business-cards-4x3.png' },
  { image: '/brand/services-carousel/posters-flyers-4x3.png' },
  { image: '/brand/services-carousel/stickers-labels-4x3.png' },
  { image: '/brand/services-carousel/packaging-4x3.png' },
  { image: '/brand/services-carousel/vouchers-lin-yone-cash-memo.jpg' },
  { image: '/brand/services-carousel/branding-graphics-4x3.png' },
] as const;

const wrap = (index: number) => (index + SAMPLES.length) % SAMPLES.length;

type Props = { language: Language };

export default function Services({ language }: Props) {
  const text = copy[language];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const dragStart = useRef<number | null>(null);
  const resumeTimer = useRef<number | undefined>(undefined);
  const interacting = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setMotionEnabled(!preference.matches);
    updateMotion();
    preference.addEventListener('change', updateMotion);
    return () => preference.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (paused || !motionEnabled) return;
    const timer = window.setInterval(() => setActive((index) => wrap(index + 1)), 5200);
    return () => window.clearInterval(timer);
  }, [paused, motionEnabled]);

  function move(delta: number) {
    setActive((index) => wrap(index + delta));
  }

  function pauseThenResume() {
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => { if (!interacting.current) setPaused(false); }, 1800);
  }

  const shown = [-1, 0, 1].map((position) => {
    const index = wrap(active + position);
    return { item: SAMPLES[index], index, position };
  });

  return (
    <section className="ly-services" id="services" aria-labelledby="ly-services-title">
      <div className="ly-services__heading">
        <div>
          <p className="ly-services__overline">{text.servicesOverline}</p>
          <h2 id="ly-services-title">{text.servicesTitle.split('|')[0]}<br />{text.servicesTitle.split('|')[1]}</h2>
        </div>
        <div className="ly-services__intro">
          <p>{text.servicesDescription}</p>
          <ul className="ly-services__list">
            {text.servicesList.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="ly-services__carousel"
        role="group"
        aria-label={text.carouselLabel}
        onPointerEnter={(event) => { if (event.pointerType === 'mouse') { interacting.current = true; window.clearTimeout(resumeTimer.current); setPaused(true); } }}
        onPointerLeave={(event) => { if (event.pointerType === 'mouse') { interacting.current = false; setPaused(false); } }}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest('button')) return;
          dragStart.current = event.clientX;
          setPaused(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          if (dragStart.current !== null) {
            const delta = event.clientX - dragStart.current;
            if (Math.abs(delta) > 36) move(delta < 0 ? 1 : -1);
          }
          dragStart.current = null;
          pauseThenResume();
        }}
        onPointerCancel={() => { dragStart.current = null; pauseThenResume(); }}
        onFocusCapture={() => { interacting.current = true; window.clearTimeout(resumeTimer.current); setPaused(true); }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) { interacting.current = false; pauseThenResume(); }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1); pauseThenResume(); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); pauseThenResume(); }
        }}
      >
        <div className="ly-services__stage">
          <div className="ly-services__cards">
            {shown.map(({ item, index, position }) => (
              <article className={`ly-product-card ly-product-card--${position === -1 ? 'left' : position === 0 ? 'center' : 'right'}`} key={item.image}>
                <div className="ly-product-card__image">
                  <img src={item.image} alt="" loading="lazy" decoding="async" draggable="false" />
                </div>
                <div className="ly-product-card__caption">
                  <h3>{samples[language][index][0]}</h3>
                  <p>{samples[language][index][1]}</p>
                </div>
              </article>
            ))}
          </div>
          <button className="ly-services__arrow ly-services__arrow--previous" type="button" onClick={() => { move(-1); pauseThenResume(); }} aria-label={text.previousSamples}><span className="ly-directional-arrow" aria-hidden="true">←</span></button>
          <button className="ly-services__arrow ly-services__arrow--next" type="button" onClick={() => { move(1); pauseThenResume(); }} aria-label={text.nextSamples}><span className="ly-directional-arrow" aria-hidden="true">→</span></button>
        </div>
        <div className="ly-services__controls">
          <span>0{active + 1} <i>/</i> 0{SAMPLES.length}</span>
          <span className="ly-services__hint">{text.dragHint}</span>
        </div>
      </div>

    </section>
  );
}

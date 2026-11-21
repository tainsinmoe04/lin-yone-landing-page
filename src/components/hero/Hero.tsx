import HeroNavigation from './HeroNavigation';
import '../../styles/hero.css';
import { copy, type Language } from '../../i18n';

const PRINTER_IMAGE = '/brand/Industrial Wide-Format Printer Printing Colorful Poster.png';

type Props = { language: Language; onLanguageChange: (language: Language) => void };

export default function Hero({ language, onLanguageChange }: Props) {
  const text = copy[language];

  return (
    <section className="ly-hero" id="top" aria-labelledby="ly-hero-title">
      <HeroNavigation language={language} onLanguageChange={onLanguageChange} />
      <div className="ly-hero__content">
        <div className="ly-hero__copy">
          <p className="ly-hero__location">{text.location}</p>
          <h1 id="ly-hero-title">{text.heroTitle}</h1>
          <p className="ly-hero__description">{text.heroDescription}</p>
          <div className="ly-hero__actions">
            <a className="ly-button ly-button--blue" href="#services">{text.explore} <span className="ly-directional-arrow" aria-hidden="true">→</span></a>
            <a className="ly-button ly-button--blue" href="https://m.me/755203954343514" target="_blank" rel="noopener noreferrer">{text.heroRequestQuote} <span className="ly-directional-arrow" aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="ly-hero__visual">
          <img src={PRINTER_IMAGE} alt={text.printerAlt} fetchPriority="high" />
          <span className="ly-hero__visual-index">{text.printerLabel}</span>
        </div>
      </div>
      <a className="ly-hero__scroll" href="#services"><span /> {text.scroll}</a>
    </section>
  );
}

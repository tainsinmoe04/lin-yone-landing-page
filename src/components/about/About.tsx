import '../../styles/about.css';
import { copy, type Language } from '../../i18n';

type Props = { language: Language };

export default function About({ language }: Props) {
  const text = copy[language];

  return (
    <section className="ly-about" id="about" aria-labelledby="ly-about-title">
      <div className="ly-about__visual">
        <img src="/brand/about-printer.webp" alt={text.aboutImageAlt} width="800" height="1200" loading="lazy" decoding="async" />
        <span>{text.aboutImageLabel}</span>
      </div>
      <div className="ly-about__copy">
        <p className="ly-about__overline">{text.aboutOverline}</p>
        <h2 id="ly-about-title">{text.aboutTitle.split('|')[0]}<br />{text.aboutTitle.split('|')[1]}</h2>
        <p>{text.aboutParagraphOne}</p>
        <p>{text.aboutParagraphTwo}</p>
        <a className="ly-button ly-button--about" href="#contact">{text.aboutCta} <span className="ly-directional-arrow" aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}

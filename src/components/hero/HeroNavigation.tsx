import { copy, type Language } from '../../i18n';

type Props = { language: Language; onLanguageChange: (language: Language) => void };

export default function HeroNavigation({ language, onLanguageChange }: Props) {
  const text = copy[language];
  const links = [
    { label: text.servicesNav, href: '#services' },
    { label: text.aboutNav, href: '#about' },
    { label: text.contactNav, href: '#contact' },
  ];

  return (
    <header className="ly-nav">
      <a className="ly-nav__home" href="#top" aria-label={text.homeLabel}>
        <img src="/brand/nav-eagle-star-logo.webp" alt="" width="264" height="176" />
      </a>
      <nav aria-label={text.navLabel}>
        <ul className="ly-nav__links">
          {links.map(({ label, href }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <div className="ly-nav__actions">
        <a className="ly-nav__cta" href="#contact">{text.quote} <span className="ly-directional-arrow" aria-hidden="true">→</span></a>
        <div className="ly-language-switch" role="group" aria-label={text.languageLabel}>
          <button type="button" className={language === 'en' ? 'is-active' : ''} aria-pressed={language === 'en'} onClick={() => onLanguageChange('en')}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === 'my' ? 'is-active' : ''} aria-pressed={language === 'my'} onClick={() => onLanguageChange('my')}>MY</button>
        </div>
      </div>
    </header>
  );
}

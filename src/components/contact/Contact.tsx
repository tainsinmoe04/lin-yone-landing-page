import HeroLogo from '../hero/HeroLogo';
import '../../styles/contact.css';
import { copy, type Language } from '../../i18n';

type Props = { language: Language };

type ContactIconName = 'phone' | 'viber' | 'facebook' | 'location';

function ContactIcon({ name }: { name: ContactIconName }) {
  const shapes = {
    phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.2 1Z" />,
    viber: <path d="M12 3c-5 0-9 3.4-9 7.7 0 2.4 1.3 4.5 3.4 5.9V21l4-2.2h1.6c5 0 9-3.4 9-7.7S17 3 12 3Zm-3 8.1a.9.9 0 0 1 .9.9.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9Zm3 0a.9.9 0 0 1 .9.9.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9Zm3 0a.9.9 0 0 1 .9.9.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9Z" />,
    facebook: <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />,
    location: <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Zm0-9.5A3.5 3.5 0 1 1 12 5.5a3.5 3.5 0 0 1 0 7Z" />,
  };

  return <svg className="ly-contact__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{shapes[name]}</svg>;
}

export default function Contact({ language }: Props) {
  const text = copy[language];

  return (
    <footer className="ly-contact" id="contact" aria-labelledby="ly-contact-title">
      <div className="ly-contact__main">
        <div>
          <p className="ly-contact__overline">{text.contactOverline}</p>
          <h2 id="ly-contact-title">{text.contactTitle.split('|')[0]}<br />{text.contactTitle.split('|')[1]}</h2>
        </div>
        <a className="ly-contact__cta" href="https://m.me/755203954343514" target="_blank" rel="noopener noreferrer">
          {text.requestQuote} <span className="ly-directional-arrow" aria-hidden="true">→</span>
        </a>
      </div>
      <div className="ly-contact__bottom">
        <div className="ly-contact__identity"><HeroLogo language={language} /><span>{text.serviceDescription}</span></div>
        <div className="ly-contact__methods" role="group" aria-label={text.contactMethodsLabel}>
          <div className="ly-contact__method" role="group" aria-labelledby="ly-contact-phone-label">
            <p className="ly-contact__method-label" id="ly-contact-phone-label">{text.phoneLabel}</p>
            <a className="ly-contact__method-link" href="tel:+959982386012">
              <ContactIcon name="phone" /><span>+95 9 982 386 012</span>
            </a>
          </div>
          <div className="ly-contact__method" role="group" aria-labelledby="ly-contact-viber-label">
            <p className="ly-contact__method-label" id="ly-contact-viber-label">{text.viberLabel}</p>
            <a className="ly-contact__method-link" href="viber://keypad?number=959972440009">
              <ContactIcon name="viber" /><span>+95 9 972 440 009</span>
            </a>
            <a className="ly-contact__method-link" href="viber://keypad?number=959672809236">
              <ContactIcon name="viber" /><span>+95 9 672 809 236</span>
            </a>
          </div>
          <div className="ly-contact__method" role="group" aria-labelledby="ly-contact-facebook-label">
            <p className="ly-contact__method-label" id="ly-contact-facebook-label">{text.facebookLabel}</p>
            <a className="ly-contact__method-link" href="https://www.facebook.com/profile.php?id=61578625658873&amp;locale=en_GB" target="_blank" rel="noopener noreferrer" aria-label={`${text.facebookLinkLabel} — ${text.opensNewTab}`}>
              <ContactIcon name="facebook" /><span>{text.facebookLinkLabel}</span>
            </a>
          </div>
          <div className="ly-contact__method ly-contact__method--address" role="group" aria-labelledby="ly-contact-address-label">
            <p className="ly-contact__method-label" id="ly-contact-address-label">{text.addressLabel}</p>
            <a className="ly-contact__method-link" href="https://maps.app.goo.gl/DFAaqDgAY8N5g2PD7" target="_blank" rel="noopener noreferrer" aria-label={`${text.addressText} — ${text.opensNewTab}`}>
              <ContactIcon name="location" /><span>{text.addressText}</span>
            </a>
          </div>
        </div>
        <div className="ly-contact__info">
          <p>{text.contactLocation}</p>
          <p>{text.contactServices}</p>
          <a className="ly-contact__top" href="#top">{text.backToTop} <span className="ly-directional-arrow ly-directional-arrow--up" aria-hidden="true">↑</span></a>
        </div>
      </div>
      <p className="ly-contact__copyright">© {new Date().getFullYear()} Lin Yone</p>
    </footer>
  );
}

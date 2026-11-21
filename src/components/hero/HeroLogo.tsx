/**
 * HeroLogo — the original brand lockup, presented untouched in the footer.
 *
 * The asset is the client's own file. It is never redrawn, recropped,
 * recoloured, rotated, or filtered; only width is set so height follows
 * the source aspect ratio (2172 x 724). Explicit width/height attributes
 * reserve layout space and prevent cumulative layout shift.
 */
import { copy, type Language } from '../../i18n';

const LOGO_SRC = '/brand/Lin Yone Computer Graphic Logo.png';
const LOGO_WIDTH = 2172;
const LOGO_HEIGHT = 724;

export default function HeroLogo({ language }: { language: Language }) {
  const alt = copy[language].contactAlt;

  return (
    <div className="ly-wordmark">
      <img
        className="ly-hero__logo"
        src={LOGO_SRC}
        alt={alt}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}

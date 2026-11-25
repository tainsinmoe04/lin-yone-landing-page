/**
 * HeroLogo — the original brand lockup, presented untouched in the footer.
 *
 * The asset is the client's own file. It is never redrawn, recropped,
 * recoloured, rotated, or filtered; only width is set so height follows
 * the source aspect ratio (3:1, delivered at 750 x 250 for the
 * <= 250px display size). Explicit width/height attributes reserve
 * layout space and prevent cumulative layout shift.
 *
 * Served as right-sized WebP (identical pixels, smaller transfer size
 * for SEO performance); the PNG original remains in git history.
 */
import { copy, type Language } from '../../i18n';

const LOGO_SRC = '/brand/lin-yone-wordmark.webp';
const LOGO_WIDTH = 750;
const LOGO_HEIGHT = 250;

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
      />
    </div>
  );
}

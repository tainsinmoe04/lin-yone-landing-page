import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import myanmarKhyayUrl from './assets/fonts/myanmar-khyay.ttf?url';
import './index.css';
import App from './App.tsx';

const myanmarHeadlineFontLink = document.createElement('link');
myanmarHeadlineFontLink.rel = 'preload';
myanmarHeadlineFontLink.as = 'font';
myanmarHeadlineFontLink.type = 'font/ttf';
myanmarHeadlineFontLink.crossOrigin = 'anonymous';
myanmarHeadlineFontLink.href = myanmarKhyayUrl;
document.head.append(myanmarHeadlineFontLink);

const documentElement = document.documentElement;
documentElement.classList.add('ly-myanmar-headline-font-loading');
void document.fonts.load('700 1em "Myanmar Khyay"', 'လင်းယုန်').then(() => {
  documentElement.classList.remove('ly-myanmar-headline-font-loading');
}).catch(() => undefined);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

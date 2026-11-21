import { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { copy, type Language } from './i18n';

/**
 * Lin Yone — Computer Graphic & Printing Service.
 *
 * Lin Yone computer graphic and printing service landing page.
 */
export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = text.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.pageDescription);
  }, [language, text]);

  return (
    <>
      <main className="ly-site">
        <Hero language={language} onLanguageChange={setLanguage} />
        <Services language={language} />
        <About language={language} />
      </main>
      <Contact language={language} />
    </>
  );
}

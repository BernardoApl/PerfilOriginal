import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { content, type Language } from './data/content';
import { usePreference } from './hooks/usePreference';
import { Reveal } from './components/ui/Reveal';
import { ScrollProgress } from './components/ui/ScrollProgress';

export default function App() {
  const [language, setLanguage] = usePreference<Language>('bernardoPortfolioLanguage', 'pt-BR', [
    'pt-BR',
    'en-US',
  ]);
  const [theme, setTheme] = usePreference<'dark' | 'light'>('bernardoPortfolioTheme', 'dark', [
    'dark',
    'light',
  ]);
  const t = content[language];
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#09090b' : '#f7f4ef');
  }, [theme]);
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main id="main">
        <Hero t={t} />
        <Reveal>
          <About t={t} />
        </Reveal>
        <Reveal>
          <Expertise t={t} />
        </Reveal>
        <Reveal>
          <Projects t={t} language={language} />
        </Reveal>
        <Reveal>
          <Experience t={t} />
        </Reveal>
        <Reveal>
          <Resume t={t} />
        </Reveal>
        <Reveal>
          <Contact t={t} />
        </Reveal>
      </main>
      <footer className="container footer">
        <a className="brand" href="#home">
          Bernardo<span>.dev</span>
        </a>
        <p>Bernardo Augusto. {t.footer}</p>
        <div className="footer-actions">
          <a className="text-link" href="#home">
            {t.top}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}

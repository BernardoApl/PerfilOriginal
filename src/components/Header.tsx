import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import { profile, sectionIds, type Copy, type Language } from '../data/content';

interface Props {
  t: Copy;
  language: Language;
  setLanguage: (value: Language) => void;
  theme: string;
  toggleTheme: () => void;
}
export function Header({ t, language, setLanguage, theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Bernardo Augusto — Home">
          Bernardo<span>.dev</span>
        </a>
        <nav
          id="navigation"
          aria-label={language === 'pt-BR' ? 'Navegação principal' : 'Main navigation'}
          className={open ? 'navigation is-open' : 'navigation'}
        >
          {sectionIds.map((id, i) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="header-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={19} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={19} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
          <div className="segmented" aria-label="Language / Idioma">
            {(['pt-BR', 'en-US'] as const).map((lang) => (
              <button
                key={lang}
                lang={lang}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang === 'pt-BR' ? 'PT' : 'EN'}
              </button>
            ))}
          </div>
          <button className="icon-button" onClick={toggleTheme} aria-label={t.theme}>
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { ArrowUpRight, Download, FileText } from 'lucide-react';
import { type Copy, type Language } from '../data/content';

export function Resume({ t }: { t: Copy }) {
  const [language, setLanguage] = useState<Language>('pt-BR');
  const file = `CV_main_${language === 'pt-BR' ? 'PT-BR' : 'EN-US'}.pdf`;
  return (
    <section id="cv" className="section resume-section">
      <div className="container resume-layout">
        <div>
          <span className="section-label">05 / {t.nav[4]}</span>
          <h2>{t.cvTitle}</h2>
          <p className="section-description">{t.cvIntro}</p>
        </div>
        <div className="resume-panel">
          <FileText className="resume-icon" size={34} />
          <div className="resume-info">
            <h3>Bernardo Augusto</h3>
            <p>{t.pdfTitle}</p>
          </div>
          <div className="segmented resume-languages" aria-label={t.pdfTitle}>
            {(['pt-BR', 'en-US'] as const).map((lang) => (
              <button key={lang} aria-pressed={language === lang} onClick={() => setLanguage(lang)}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="resume-actions">
            <a className="button primary" href={file} download>
              {t.download}
              <Download size={17} />
            </a>
            <a className="button secondary" href={file} target="_blank" rel="noreferrer">
              {t.open}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="resume-document">
          <div className="resume-document-header">
            <FileText size={16} aria-hidden="true" />
            <span>{t.pdfTitle}</span>
            <span>{language.toUpperCase()}</span>
          </div>
          <iframe
            id="resume-preview"
            key={file}
            src={`${file}#view=FitH`}
            title={t.pdfTitle}
            className="pdf-preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

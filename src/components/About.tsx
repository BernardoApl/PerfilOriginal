import { type Copy } from '../data/content';

export function About({ t }: { t: Copy }) {
  return (
    <section id="about" className="section container about-layout">
      <div>
        <span className="section-label">01 / {t.nav[0]}</span>
        <h2>{t.aboutTitle}</h2>
      </div>
      <div className="about-copy">
        <p>{t.about}</p>
        <p>{t.aboutEnd}</p>
      </div>
    </section>
  );
}

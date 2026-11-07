import { type Copy } from '../data/content';

export function Experience({ t }: { t: Copy }) {
  return (
    <section id="experience" className="section container experience-layout">
      <div>
        <span className="section-label">04 / {t.nav[3]}</span>
        <h2>{t.experienceTitle}</h2>
      </div>
      <div className="timeline">
        {t.experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <span className="timeline-dot" />
            <span className="timeline-date">{item.date}</span>
            <h3>{item.company}</h3>
            <span className="timeline-role">{item.role}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

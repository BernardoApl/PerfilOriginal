import { Code2, Database, Workflow } from 'lucide-react';
import { type Copy } from '../data/content';

export function Expertise({ t }: { t: Copy }) {
  const icons = [Code2, Database, Workflow];
  return (
    <section id="services" className="section container">
      <span className="section-label">02 / {t.nav[1]}</span>
      <h2>{t.servicesTitle}</h2>
      <div className="expertise-grid">
        {t.services.map((service, i) => {
          const Icon = icons[i];
          return (
            <article className="expertise" key={service.title}>
              <div className="expertise-top">
                <span>0{i + 1}</span>
                <Icon size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <small>{service.tools}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

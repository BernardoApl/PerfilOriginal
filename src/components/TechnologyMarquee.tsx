import { technologies } from '../data/technologies';
import type { Copy } from '../data/content';

export function TechnologyMarquee({ t }: { t: Copy }) {
  return (
    <div className="technology-band container" role="region" aria-label={t.technologies}>
      <div className="technology-window">
        <div className="technology-track">
          {[false, true].map((duplicate) => (
            <ul
              className="technology-group"
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
            >
              {technologies.map((tech) => (
                <li
                  key={tech.name}
                  className="technology-item"
                  title={duplicate ? undefined : tech.name}
                >
                  <img
                    src={tech.icon}
                    alt={duplicate ? '' : tech.name}
                    width={40}
                    height={40}
                    draggable={false}
                  />
                  <span aria-hidden="true">{tech.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

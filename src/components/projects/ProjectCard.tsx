import { ArrowUpRight, Star } from 'lucide-react';
import type { Repository } from '../../services/github';
import type { Copy, Language } from '../../data/content';

export function ProjectCard({
  repo,
  index,
  t,
  language,
}: {
  repo: Repository;
  index: number;
  t: Copy;
  language: Language;
}) {
  const initials = repo.name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
  return (
    <article className="project-card">
      <a className="project-link" href={repo.html_url} target="_blank" rel="noreferrer">
        <div className="project-cover" aria-hidden="true">
          <div className="project-cover-top">
            <span>REPOSITORY / {String(index + 1).padStart(2, '0')}</span>
          </div>
          <span className="project-monogram">{initials}</span>
          <span className="project-cover-language">{repo.language || 'GitHub'}</span>
          <span className="project-cover-arrow">
            <ArrowUpRight size={25} />
          </span>
        </div>
        <div className="project-body">
          <h3>{repo.name}</h3>
          <p>{repo.description || t.noDescription}</p>
          <div className="project-meta">
            <span>
              {t.updated}{' '}
              <time dateTime={repo.updated_at}>
                {new Intl.DateTimeFormat(language).format(new Date(repo.updated_at))}
              </time>
            </span>
            <span aria-label={`${repo.stargazers_count} ${t.stars}`}>
              <Star size={13} />
              {repo.stargazers_count}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

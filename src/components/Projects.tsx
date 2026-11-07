import { ArrowUpRight } from 'lucide-react';
import { profile, type Copy, type Language } from '../data/content';
import { useRepositories } from '../hooks/useRepositories';
import { ProjectCarousel } from './projects/ProjectCarousel';

export function Projects({ t, language }: { t: Copy; language: Language }) {
  const { repos, status, retry } = useRepositories();
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-top">
          <span className="section-label">03 / {t.nav[2]}</span>
          <a
            className="text-link"
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            {t.allProjects}
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="projects-heading">
          <h2>{t.projectsTitle}</h2>
          <p className="section-description">{t.projectsIntro}</p>
        </div>
        <div role="status" aria-live="polite" aria-busy={status === 'loading'}>
          {status === 'loading' && <p className="feedback">{t.loading}</p>}
          {status === 'error' && (
            <div className="feedback">
              <p>{t.error}</p>
              <button className="button secondary" onClick={retry}>
                {t.retry}
              </button>
            </div>
          )}
          {status === 'ready' && repos.length === 0 && <p className="feedback">{t.empty}</p>}
        </div>
        {status === 'ready' && repos.length > 0 && (
          <ProjectCarousel repos={repos} t={t} language={language} />
        )}
      </div>
    </section>
  );
}

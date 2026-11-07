import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Repository } from '../../services/github';
import type { Copy, Language } from '../../data/content';
import { useProjectCarousel } from '../../hooks/useProjectCarousel';
import { ProjectCard } from './ProjectCard';

export function ProjectCarousel({
  repos,
  t,
  language,
}: {
  repos: Repository[];
  t: Copy;
  language: Language;
}) {
  const carousel = useProjectCarousel(repos.length);
  return (
    <div
      ref={carousel.regionRef}
      className="project-carousel"
      role="region"
      aria-roledescription={t.carousel}
      aria-label={t.nav[2]}
      data-playing={carousel.playing}
    >
      <div className="carousel-toolbar">
        <p className="carousel-hint">{t.carouselHint}</p>
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            disabled={!carousel.canPrev}
            aria-label={t.previousProject}
            onClick={() => carousel.move('previous')}
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            className="carousel-arrow"
            disabled={!carousel.canNext}
            aria-label={t.nextProject}
            onClick={() => carousel.move('next')}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <div
        className="carousel-viewport"
        ref={carousel.viewportRef}
        onMouseEnter={() => carousel.setHovered(true)}
        onMouseLeave={() => carousel.setHovered(false)}
        onFocusCapture={() => carousel.setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) carousel.setFocused(false);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            carousel.move(event.key === 'ArrowLeft' ? 'previous' : 'next');
          }
        }}
      >
        <div className="carousel-track">
          {repos.map((repo, index) => (
            <div
              className="carousel-slide"
              key={repo.id}
              role="group"
              aria-roledescription={t.slide}
              aria-label={`${index + 1} / ${repos.length}`}
            >
              <ProjectCard repo={repo} index={index} t={t} language={language} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-bottom">
        <span>
          {String(carousel.selected + 1).padStart(2, '0')}{' '}
          <span className="muted">/ {String(repos.length).padStart(2, '0')}</span>
        </span>
        <div className="carousel-meter" aria-hidden="true">
          <span style={{ width: `${((carousel.selected + 1) / repos.length) * 100}%` }} />
        </div>
        <span className="carousel-caption">GITHUB / BERNARDOAPL</span>
      </div>
    </div>
  );
}

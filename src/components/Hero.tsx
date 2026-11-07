import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { type Copy } from '../data/content';
import { Reveal } from './ui/Reveal';
import { TechnologyMarquee } from './TechnologyMarquee';

export function Hero({ t }: { t: Copy }) {
  return (
    <section id="home" className="hero-stage">
      <div className="hero container">
        <Reveal className="hero-copy">
          <h1>
            Bernardo
            <br />
            Augusto<span>.</span>
          </h1>
          <p className="hero-role">{t.role}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              {t.projectsCta}
              <ArrowDown size={17} />
            </a>
            <a className="button secondary" href="#contact">
              {t.contactCta}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
        <Reveal className="portrait-scene" delay={0.12}>
          <div className="portrait">
            <img
              src="bernardo-profile.png"
              alt="Bernardo Augusto"
              width={251}
              height={203}
              fetchPriority="high"
            />
          </div>
        </Reveal>
      </div>
      <TechnologyMarquee t={t} />
    </section>
  );
}

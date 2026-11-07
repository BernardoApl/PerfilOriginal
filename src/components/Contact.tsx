import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { profile, type Copy } from '../data/content';

export function Contact({ t }: { t: Copy }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'failed' | 'required'>(
    'idle',
  );
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      setStatus('required');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: AbortSignal.timeout(15000),
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: 'Contato pelo portfólio',
          _template: 'table',
        }),
      });
      if (!response.ok) throw new Error('Contact failed');
      const result: unknown = await response.json();
      if (
        !result ||
        typeof result !== 'object' ||
        !('success' in result) ||
        (result.success !== true && result.success !== 'true')
      )
        throw new Error('Contact rejected');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('failed');
    }
  }
  return (
    <section id="contact" className="section container contact-layout">
      <div>
        <span className="section-label">06 / {t.nav[5]}</span>
        <h2>{t.contactTitle}</h2>
        <p className="section-description">{t.contactIntro}</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={20} />
        </a>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <form onSubmit={submit} className="contact-form" aria-busy={status === 'sending'}>
        <div className="form-row">
          <label>
            {t.name}
            <input name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            {t.email}
            <input name="email" type="email" autoComplete="email" required maxLength={254} />
          </label>
        </div>
        <label>
          {t.message}
          <textarea name="message" rows={5} required maxLength={5000} />
        </label>
        <div className="form-bottom">
          <button className="button primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? t.sending : t.submit}
            <Send size={16} />
          </button>
          <small>{t.formNote}</small>
        </div>
        <p className={`form-feedback ${status}`} role="status">
          {status !== 'idle' ? t[status] : ''}
        </p>
      </form>
    </section>
  );
}

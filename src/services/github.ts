export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

function isRepository(value: unknown): value is Repository {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.id === 'number' &&
    typeof r.name === 'string' &&
    typeof r.html_url === 'string' &&
    r.html_url.startsWith('https://github.com/') &&
    (r.description === null || typeof r.description === 'string') &&
    (r.language === null || typeof r.language === 'string') &&
    typeof r.stargazers_count === 'number' &&
    typeof r.fork === 'boolean' &&
    typeof r.updated_at === 'string' &&
    Number.isFinite(Date.parse(r.updated_at))
  );
}

export async function fetchRepositories(signal: AbortSignal): Promise<Repository[]> {
  const response = await fetch(
    'https://api.github.com/users/BernardoApl/repos?sort=updated&per_page=100',
    { signal },
  );
  if (!response.ok) throw new Error('GitHub unavailable');
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(isRepository)) throw new Error('Invalid GitHub response');
  return data.filter((r) => !r.fork).slice(0, 20);
}

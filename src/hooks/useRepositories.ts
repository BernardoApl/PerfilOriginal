import { useEffect, useState } from 'react';
import { fetchRepositories, type Repository } from '../services/github';

export function useRepositories() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let mounted = true;
    setStatus('loading');
    fetchRepositories(controller.signal)
      .then((data) => {
        if (mounted) {
          setRepos(data);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (mounted) setStatus('error');
      })
      .finally(() => clearTimeout(timeout));
    return () => {
      mounted = false;
      controller.abort();
      clearTimeout(timeout);
    };
  }, [attempt]);

  return { repos, status, retry: () => setAttempt((value) => value + 1) };
}

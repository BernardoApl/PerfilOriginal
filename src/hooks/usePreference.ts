import { useEffect, useState } from 'react';

export function usePreference<T extends string>(key: string, fallback: T, values: readonly T[]) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key) as T;
      return values.includes(stored) ? stored : fallback;
    } catch {
      return fallback;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* Private mode still works. */
    }
  }, [key, value]);
  return [value, setValue] as const;
}

import { useEffect, useMemo, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useInView, useReducedMotion } from 'motion/react';

export function useProjectCarousel(count: number) {
  const regionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(regionRef, { amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(!document.hidden);
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const plugins = useMemo(
    () => [
      AutoScroll({
        playOnInit: false,
        speed: 0.65,
        startDelay: 700,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ],
    [],
  );
  const [viewportRef, api] = useEmblaCarousel(
    { loop: count > 2, align: 'start', dragFree: true, duration: 35 },
    plugins,
  );

  useEffect(() => {
    return () => clearTimeout(navigationTimer.current);
  }, []);

  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSelected(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    // The plugin emits before updating isPlaying(), so use the event itself.
    const onPlay = () => setPlaying(true);
    const onStop = () => setPlaying(false);
    const pause = () => {
      setDragging(true);
      api.plugins().autoScroll.stop();
    };
    const release = () => setDragging(false);
    api
      .on('select', sync)
      .on('reInit', sync)
      .on('autoScroll:play', onPlay)
      .on('autoScroll:stop', onStop)
      .on('pointerDown', pause)
      .on('pointerUp', release);
    sync();
    return () => {
      api
        .off('select', sync)
        .off('reInit', sync)
        .off('autoScroll:play', onPlay)
        .off('autoScroll:stop', onStop)
        .off('pointerDown', pause)
        .off('pointerUp', release);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const updatePlayback = () => {
      const plugin = api.plugins().autoScroll;
      if (
        !focused &&
        !dragging &&
        !navigating &&
        !hovered &&
        inView &&
        visible &&
        !reducedMotion &&
        count > 1
      )
        plugin.play();
      else plugin.stop();
      setPlaying(plugin.isPlaying());
    };
    updatePlayback();
    api.on('reInit', updatePlayback);
    return () => {
      api.off('reInit', updatePlayback);
    };
  }, [api, focused, dragging, navigating, hovered, inView, visible, reducedMotion, count]);

  const move = (direction: 'previous' | 'next') => {
    setNavigating(true);
    clearTimeout(navigationTimer.current);
    api?.plugins().autoScroll.stop();
    if (direction === 'previous') api?.scrollPrev(Boolean(reducedMotion));
    else api?.scrollNext(Boolean(reducedMotion));
    navigationTimer.current = setTimeout(() => setNavigating(false), 1500);
  };

  return {
    regionRef,
    viewportRef,
    playing,
    reducedMotion,
    selected,
    canPrev,
    canNext,
    setHovered,
    setFocused,
    move,
  };
}

'use client';

import { useEffect, useRef } from 'react';
import { usePostHog } from '@/hooks/usePostHog';

export function ScrollTracker() {
  const { trackPageScroll } = usePostHog();
  const scrollThresholds = useRef(new Set([25, 50, 75, 90, 100]));
  const reachedThresholds = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);

      scrollThresholds.current.forEach((threshold) => {
        if (scrollPercentage >= threshold && !reachedThresholds.current.has(threshold)) {
          reachedThresholds.current.add(threshold);
          trackPageScroll(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackPageScroll]);

  return null;
}
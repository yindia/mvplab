'use client';

import { usePostHog as usePostHogLib } from 'posthog-js/react';

export function usePostHog() {
  const posthog = usePostHogLib();

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    posthog?.capture(eventName, properties);
  };

  const trackButtonClick = (buttonName: string, section?: string) => {
    trackEvent('button_clicked', {
      button_name: buttonName,
      section: section || 'unknown',
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submitted', {
      form_name: formName,
      success,
      timestamp: new Date().toISOString(),
    });
  };

  const trackPageScroll = (percentage: number) => {
    trackEvent('page_scrolled', {
      scroll_percentage: percentage,
      timestamp: new Date().toISOString(),
    });
  };

  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    posthog?.identify(userId, properties);
  };

  return {
    posthog,
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackPageScroll,
    identifyUser,
  };
}
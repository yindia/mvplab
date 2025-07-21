# PostHog Analytics Setup Guide

## Overview
PostHog analytics has been integrated into the mvplab website to track user behavior, conversions, and engagement metrics.

## Setup Instructions

### 1. Create a PostHog Account
1. Go to [PostHog](https://posthog.com) and create an account
2. Create a new project for mvplab
3. Get your Project API Key from Settings > Project Settings

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

Replace `your_posthog_project_api_key` with your actual PostHog project API key.

### 3. Self-Hosting (Optional)
If you're self-hosting PostHog, update the `NEXT_PUBLIC_POSTHOG_HOST` to your PostHog instance URL.

## Features Implemented

### 1. Automatic Page View Tracking
- Every page navigation is automatically tracked
- Page leave events are captured

### 2. Button Click Tracking
Example implementation in HeroSection:
```typescript
onClick={() => trackButtonClick('Book a Call', 'Hero')}
```

### 3. Scroll Depth Tracking
Tracks when users reach:
- 25% of page
- 50% of page
- 75% of page
- 90% of page
- 100% of page

### 4. Custom Event Tracking
Use the `usePostHog` hook to track custom events:

```typescript
import { usePostHog } from '@/hooks/usePostHog';

const { trackEvent, trackButtonClick, trackFormSubmit } = usePostHog();

// Track custom event
trackEvent('video_played', { video_name: 'intro' });

// Track button click
trackButtonClick('Get Started', 'Pricing');

// Track form submission
trackFormSubmit('contact_form', true);
```

## Available Tracking Methods

### `trackEvent(eventName, properties)`
Track any custom event with optional properties.

### `trackButtonClick(buttonName, section)`
Track button clicks with button name and section.

### `trackFormSubmit(formName, success)`
Track form submissions with success status.

### `trackPageScroll(percentage)`
Track scroll depth (automatically handled by ScrollTracker).

### `identifyUser(userId, properties)`
Identify users for personalized tracking.

## Adding Tracking to New Components

1. Import the hook:
```typescript
import { usePostHog } from '@/hooks/usePostHog';
```

2. Use tracking methods:
```typescript
const { trackButtonClick } = usePostHog();

<button onClick={() => trackButtonClick('CTA Button', 'Footer')}>
  Click Me
</button>
```

## Viewing Analytics

1. Log into your PostHog dashboard
2. Navigate to:
   - **Events**: See all tracked events
   - **Dashboards**: Create custom dashboards
   - **Insights**: Analyze user behavior
   - **Funnels**: Track conversion rates
   - **Retention**: Measure user retention

## Best Practices

1. **Consistent Naming**: Use consistent event names across the site
2. **Meaningful Properties**: Include relevant context in event properties
3. **Privacy**: Don't track sensitive user information
4. **Performance**: Avoid tracking too many events that could impact performance

## Debugging

In development mode, PostHog runs in debug mode. Check the browser console for:
- Event tracking logs
- Configuration issues
- API errors

## Support

For PostHog support:
- [PostHog Documentation](https://posthog.com/docs)
- [PostHog Community](https://posthog.com/community)
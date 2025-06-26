// Utility to defer third-party scripts
export const deferThirdPartyScript = (src, callback) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  script.onload = callback;
  document.body.appendChild(script);
};

// Utility to load third-party resources after user interaction
export const loadOnInteraction = (loadFn, events = ['click', 'touchstart']) => {
  const load = () => {
    loadFn();
    events.forEach(event => {
      document.removeEventListener(event, load);
    });
  };

  events.forEach(event => {
    document.addEventListener(event, load, { once: true, passive: true });
  });
};

// Utility to load resources after main content is loaded
export const loadAfterMain = (loadFn, delay = 1000) => {
  if (document.readyState === 'complete') {
    setTimeout(loadFn, delay);
  } else {
    window.addEventListener('load', () => {
      setTimeout(loadFn, delay);
    });
  }
};

// YouTube optimization utilities
export const optimizeYouTubeEmbed = (videoId, options = {}) => {
  const {
    autoplay = 0,
    rel = 0,
    modestbranding = 1,
    enablejsapi = 0,
    origin = window.location.origin
  } = options;

  return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&rel=${rel}&modestbranding=${modestbranding}&enablejsapi=${enablejsapi}&origin=${origin}`;
};

// Resource hints for third-party domains
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//www.youtube.com' },
    { rel: 'dns-prefetch', href: '//i.ytimg.com' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
};

// Monitor third-party performance
export const monitorThirdPartyPerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name.includes('youtube.com') || entry.name.includes('ytimg.com')) {
          console.log('YouTube resource loaded:', {
            name: entry.name,
            size: entry.transferSize,
            duration: entry.duration
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }
};

import { useEffect } from 'react';

const usePreloadCriticalResources = () => {
  useEffect(() => {
    // Preload critical fonts
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = font;
      link.onload = function() {
        this.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });

    // Preload critical images (hero images, logos, product images)
    const criticalImages = [
      '/static/media/hero-image.webp', // Add your actual hero image path
      '/static/media/logo.webp',       // Add your actual logo path
      '/static/media/product-main.webp' // Add your main product image path
    ];

    criticalImages.forEach(imageSrc => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    });

    // Preload critical JavaScript chunks
    const criticalChunks = [
      'home', // Home page chunk
      'product' // Product page chunk (likely high traffic)
    ];

    criticalChunks.forEach(chunkName => {
      // This will be handled by webpack's prefetch/preload
      import(/* webpackChunkName: "[request]", webpackPrefetch: true */ `../page/${chunkName.charAt(0).toUpperCase() + chunkName.slice(1)}`).catch(() => {
        // Silently fail if chunk doesn't exist
      });
    });

    // Prevent YouTube from loading until needed
    const preventYouTubePreload = () => {
      // Block YouTube's heavy resources from auto-loading
      const style = document.createElement('style');
      style.textContent = `
        iframe[src*="youtube.com"] {
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    };

    preventYouTubePreload();

  }, []);
};

export default usePreloadCriticalResources;

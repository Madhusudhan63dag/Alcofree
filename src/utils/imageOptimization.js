// Utility function to generate WebP version of images
export const getOptimizedImageSrc = (src, width = null, quality = 80) => {
  if (!src) return src;
  
  // If using a CDN or image optimization service, modify URL accordingly
  // For now, we'll assume WebP versions exist alongside original images
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Check if browser supports WebP
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();
  
  return supportsWebP ? webpSrc : src;
};

// Generate responsive image sizes
export const getResponsiveImageSizes = () => {
  return {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '25vw'
  };
};

// Create picture element for responsive images
export const createPictureElement = (src, alt, className) => {
  return {
    webp: getOptimizedImageSrc(src),
    fallback: src,
    sizes: getResponsiveImageSizes(),
    alt,
    className
  };
};

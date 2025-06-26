import React, { useState, lazy, Suspense } from 'react';

// Lazy load components only when needed
const LazyYouTube = lazy(() => import('./LazyYouTube'));

// Generic facade for third-party content
const ThirdPartyFacade = ({
  type,
  previewImage,
  title,
  loadingText = 'Loading...',
  children,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <Suspense fallback={
        <div className={`flex items-center justify-center bg-gray-200 ${className}`}>
          <span className="text-gray-600">{loadingText}</span>
        </div>
      }>
        {children}
      </Suspense>
    );
  }

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={handleLoad}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLoad();
        }
      }}
      {...props}
    >
      {previewImage && (
        <img
          src={previewImage}
          alt={title || 'Third-party content'}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300">
          Load {type || 'Content'}
        </button>
      </div>
      
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-sm font-medium truncate">{title}</h3>
        </div>
      )}
    </div>
  );
};

// YouTube Facade wrapper
export const YouTubeFacade = ({ videoId, ...props }) => (
  <Suspense fallback={<div className="animate-pulse bg-gray-200 w-full h-full" />}>
    <LazyYouTube videoId={videoId} {...props} />
  </Suspense>
);

// Google Maps Facade
export const GoogleMapsFacade = ({ 
  embedUrl,
  previewImage,
  title = 'Google Maps',
  className = '',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={embedUrl}
        className={`w-full h-full border-0 ${className}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        {...props}
      />
    );
  }

  return (
    <ThirdPartyFacade
      type="Map"
      previewImage={previewImage}
      title={title}
      className={className}
      onClick={() => setIsLoaded(true)}
      {...props}
    />
  );
};

// Generic Social Media Facade
export const SocialMediaFacade = ({
  platform,
  embedUrl,
  previewImage,
  title,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={embedUrl}
        className={`w-full h-full border-0 ${className}`}
        title={title || `${platform} embed`}
        loading="lazy"
        {...props}
      />
    );
  }

  return (
    <ThirdPartyFacade
      type={platform}
      previewImage={previewImage}
      title={title}
      className={className}
      onClick={() => setIsLoaded(true)}
      {...props}
    />
  );
};

export default ThirdPartyFacade;

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const LazyYouTube = ({ 
  videoId, 
  title = 'YouTube Video',
  className = '',
  thumbnailQuality = 'maxresdefault',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const iframeRef = useRef(null);

  // Generate thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  const handlePlay = () => {
    setIsClicked(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  const handleIframeLoad = () => {
    // Optional: Add analytics or other tracking
    console.log('YouTube video loaded:', videoId);
  };

  if (isLoaded) {
    return (
      <div className={`relative ${className}`} {...props}>
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={handlePlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePlay();
        }
      }}
      {...props}
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback to lower quality thumbnail if maxres fails
          if (thumbnailQuality === 'maxresdefault') {
            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }
        }}
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
        {isClicked ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        )}
      </div>
      
      {/* Video Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-sm font-medium truncate">{title}</h3>
      </div>
    </div>
  );
};

export default LazyYouTube;

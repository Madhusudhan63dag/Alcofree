// Utility to preload critical components
export const preloadCriticalComponents = () => {
  // Preload home page component
  import(/* webpackChunkName: "home" */ '../page/Home');
  
  // Preload product page (likely high traffic)
  import(/* webpackChunkName: "product" */ '../page/Product');
};

// Utility to load non-critical resources after main content
export const loadNonCriticalResources = () => {
  // Load after initial render
  setTimeout(() => {
    // Load blog components if not already loaded
    import(/* webpackChunkName: "blog" */ '../page/Blog');
    
    // Load policy pages
    import(/* webpackChunkName: "policies" */ '../page/Privacy');
    import(/* webpackChunkName: "policies" */ '../page/Terms');
  }, 2000);
};

// Optimize third-party library loading
export const loadThirdPartyLibraries = () => {
  // Load React Icons only when needed
  return {
    FaPhoneAlt: () => import('react-icons/fa').then(module => module.FaPhoneAlt)
  };
};

// Tree-shake unused utilities
export const optimizeImports = () => {
  // Return only used utilities
  return {
    preloadCriticalComponents,
    loadNonCriticalResources,
    loadThirdPartyLibraries
  };
};

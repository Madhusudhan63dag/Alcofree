import React, { useState, useEffect } from 'react';

const DynamicIcon = ({ iconName, className, ...props }) => {
  const [IconComponent, setIconComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await import('lucide-react');
        const Icon = iconModule[iconName];
        if (Icon) {
          setIconComponent(() => Icon);
        }
      } catch (error) {
        console.error(`Failed to load icon: ${iconName}`, error);
      } finally {
        setLoading(false);
      }
    };

    loadIcon();
  }, [iconName]);

  if (loading) {
    return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />;
  }

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;

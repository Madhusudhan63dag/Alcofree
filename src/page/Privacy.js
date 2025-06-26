import React from 'react';

const Privacy = ({ currentLang, translations }) => {
  const t = translations[currentLang] || translations.en;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {t.privacy.title}
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            {t.privacy.lastUpdated}
          </p>
          
          {t.privacy.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              
              {Array.isArray(section.content) ? (
                section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-4">
                    {item.subtitle && (
                      <h3 className="text-lg font-medium text-gray-700 mb-2">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
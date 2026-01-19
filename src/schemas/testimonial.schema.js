/**
 * Dr. Alcofree Testimonial Schema Definition
 * Defines the structure and validation rules for customer testimonials
 */

export const TestimonialSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the testimonial"
    },
    name: {
      type: "string",
      minLength: 2,
      maxLength: 100,
      description: "Customer name"
    },
    location: {
      type: "string",
      minLength: 2,
      maxLength: 100,
      description: "Customer location (city, state)"
    },
    text: {
      type: "string",
      minLength: 20,
      maxLength: 1500,
      description: "Testimonial text content"
    },
    rating: {
      type: "number",
      minimum: 1,
      maximum: 5,
      description: "Customer rating (1-5 stars)"
    },
    date: {
      type: "string",
      format: "date-time",
      description: "Date when testimonial was given"
    },
    productUsed: {
      type: "string",
      default: "Dr. Alcofree",
      description: "Dr. Alcofree product used"
    },
    verified: {
      type: "boolean",
      default: false,
      description: "Whether testimonial is verified"
    },
    recoveryInfo: {
      type: "object",
      properties: {
        alcoholUsageBefore: {
          type: "string",
          enum: ["daily", "weekly", "occasionally", "heavy"],
          description: "Alcohol usage pattern before Dr. Alcofree"
        },
        usageDuration: {
          type: "string",
          description: "How long customer used Dr. Alcofree"
        },
        recoveryStage: {
          type: "string",
          enum: ["reducing", "stopped", "maintaining", "relapse_prevention"],
          description: "Customer's recovery stage"
        },
        previousAttempts: {
          type: "number",
          minimum: 0,
          description: "Number of previous quit attempts"
        },
        otherTreatments: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Other treatments tried before Dr. Alcofree"
        },
        resultsSeen: {
          type: "string",
          enum: ["immediate", "within_week", "within_month", "gradual"],
          description: "How quickly results were seen"
        }
      },
      additionalProperties: false
    },
    customerInfo: {
      type: "object",
      properties: {
        age: {
          type: "number",
          minimum: 18,
          maximum: 100,
          description: "Customer age"
        },
        gender: {
          type: "string",
          enum: ["male", "female", "other", "prefer_not_to_say"],
          description: "Customer gender"
        },
        occupation: {
          type: "string",
          maxLength: 100,
          description: "Customer occupation"
        },
        familySupport: {
          type: "boolean",
          description: "Whether customer had family support"
        }
      },
      additionalProperties: false
    },
    media: {
      type: "object",
      properties: {
        image: {
          type: "string",
          format: "uri",
          description: "Customer photo URL"
        },
        video: {
          type: "string",
          format: "uri",
          description: "Video testimonial URL"
        },
        audio: {
          type: "string",
          format: "uri",
          description: "Audio testimonial URL"
        },
        beforeAfter: {
          type: "object",
          properties: {
            before: {
              type: "string",
              format: "uri",
              description: "Before photo URL"
            },
            after: {
              type: "string",
              format: "uri",
              description: "After photo URL"
            }
          },
          additionalProperties: false
        }
      },
      additionalProperties: false
    },
    status: {
      type: "string",
      enum: ["pending", "approved", "rejected", "flagged"],
      default: "pending",
      description: "Testimonial approval status"
    },
    featured: {
      type: "boolean",
      default: false,
      description: "Whether testimonial is featured on homepage"
    },
    category: {
      type: "string",
      enum: ["success_story", "ongoing_progress", "family_testimonial", "professional_recommendation"],
      description: "Type of testimonial"
    },
    language: {
      type: "string",
      enum: ["en", "hi", "te", "ta", "kn", "ml"],
      default: "en",
      description: "Testimonial language"
    },
    consentGiven: {
      type: "boolean",
      default: false,
      description: "Whether customer consented to publish testimonial"
    },
    metadata: {
      type: "object",
      properties: {
        createdAt: {
          type: "string",
          format: "date-time",
          description: "Testimonial creation date"
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          description: "Last update date"
        },
        source: {
          type: "string",
          enum: ["website", "email", "phone", "social_media", "whatsapp", "form"],
          description: "Source of testimonial"
        },
        ipAddress: {
          type: "string",
          description: "IP address of submitter"
        },
        userAgent: {
          type: "string",
          description: "User agent of submitter"
        },
        moderatedBy: {
          type: "string",
          description: "Staff member who moderated"
        },
        publishedAt: {
          type: "string",
          format: "date-time",
          description: "Date when testimonial was published"
        },
        viewCount: {
          type: "number",
          minimum: 0,
          default: 0,
          description: "Number of times viewed"
        },
        helpfulCount: {
          type: "number",
          minimum: 0,
          default: 0,
          description: "Number of helpful votes"
        }
      },
      additionalProperties: false
    }
  },
  required: ["id", "name", "location", "text", "rating", "date", "consentGiven"],
  additionalProperties: false
};

/**
 * Dr. Alcofree testimonial validation helper
 * @param {Object} testimonial - Testimonial data to validate
 * @returns {Object} Validation result
 */
export const validateTestimonial = (testimonial) => {
  const errors = [];
  
  // Basic required field validation
  if (!testimonial.id) errors.push("Testimonial ID is required");
  if (!testimonial.name || testimonial.name.length < 2) errors.push("Customer name must be at least 2 characters");
  if (!testimonial.location || testimonial.location.length < 2) errors.push("Customer location must be at least 2 characters");
  if (!testimonial.text || testimonial.text.length < 20) errors.push("Testimonial text must be at least 20 characters");
  if (!testimonial.rating || testimonial.rating < 1 || testimonial.rating > 5) errors.push("Rating must be between 1 and 5");
  if (!testimonial.date) errors.push("Testimonial date is required");
  if (!testimonial.consentGiven) errors.push("Customer consent is required to publish testimonial");
  
  // Content validation
  if (testimonial.text && testimonial.text.length > 1500) {
    errors.push("Testimonial text cannot exceed 1500 characters");
  }
  
  // Rating validation
  if (testimonial.rating && !Number.isInteger(testimonial.rating)) {
    errors.push("Rating must be a whole number");
  }
  
  // Date validation
  if (testimonial.date && isNaN(new Date(testimonial.date).getTime())) {
    errors.push("Invalid date format");
  }
  
  // Recovery info validation
  if (testimonial.recoveryInfo) {
    const { alcoholUsageBefore, recoveryStage, resultsSeen } = testimonial.recoveryInfo;
    
    if (alcoholUsageBefore && !["daily", "weekly", "occasionally", "heavy"].includes(alcoholUsageBefore)) {
      errors.push("Invalid alcohol usage pattern");
    }
    
    if (recoveryStage && !["reducing", "stopped", "maintaining", "relapse_prevention"].includes(recoveryStage)) {
      errors.push("Invalid recovery stage");
    }
    
    if (resultsSeen && !["immediate", "within_week", "within_month", "gradual"].includes(resultsSeen)) {
      errors.push("Invalid results timeline");
    }
  }
  
  // Category validation
  if (testimonial.category && !["success_story", "ongoing_progress", "family_testimonial", "professional_recommendation"].includes(testimonial.category)) {
    errors.push("Invalid testimonial category");
  }
  
  // Language validation
  if (testimonial.language && !["en", "hi", "te", "ta", "kn", "ml"].includes(testimonial.language)) {
    errors.push("Unsupported language");
  }
  
  // Age validation
  if (testimonial.customerInfo?.age && (testimonial.customerInfo.age < 18 || testimonial.customerInfo.age > 100)) {
    errors.push("Customer age must be between 18 and 100");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Default Dr. Alcofree testimonial structure
 */
export const createDefaultTestimonial = () => ({
  id: "",
  name: "",
  location: "",
  text: "",
  rating: 5,
  date: new Date().toISOString(),
  productUsed: "Dr. Alcofree",
  verified: false,
  recoveryInfo: {
    alcoholUsageBefore: "",
    usageDuration: "",
    recoveryStage: "",
    previousAttempts: 0,
    otherTreatments: [],
    resultsSeen: ""
  },
  customerInfo: {
    age: null,
    gender: "prefer_not_to_say",
    occupation: "",
    familySupport: false
  },
  media: {},
  status: "pending",
  featured: false,
  category: "success_story",
  language: "en",
  consentGiven: false,
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    source: "website",
    viewCount: 0,
    helpfulCount: 0
  }
});

/**
 * Testimonial filtering and sorting utilities
 */
export const TestimonialUtils = {
  /**
   * Filter testimonials by status
   * @param {Array} testimonials - Array of testimonials
   * @param {string} status - Status to filter by
   * @returns {Array} Filtered testimonials
   */
  filterByStatus: (testimonials, status) => {
    return testimonials.filter(testimonial => testimonial.status === status);
  },

  /**
   * Get featured testimonials
   * @param {Array} testimonials - Array of testimonials
   * @returns {Array} Featured testimonials
   */
  getFeatured: (testimonials) => {
    return testimonials.filter(testimonial => testimonial.featured && testimonial.status === 'approved');
  },

  /**
   * Sort testimonials by rating (highest first)
   * @param {Array} testimonials - Array of testimonials
   * @returns {Array} Sorted testimonials
   */
  sortByRating: (testimonials) => {
    return [...testimonials].sort((a, b) => b.rating - a.rating);
  },

  /**
   * Sort testimonials by date (newest first)
   * @param {Array} testimonials - Array of testimonials
   * @returns {Array} Sorted testimonials
   */
  sortByDate: (testimonials) => {
    return [...testimonials].sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  /**
   * Get testimonials for a specific product
   * @param {Array} testimonials - Array of testimonials
   * @param {string} productName - Product name to filter by
   * @returns {Array} Filtered testimonials
   */
  filterByProduct: (testimonials, productName) => {
    return testimonials.filter(testimonial => testimonial.productUsed === productName);
  },

  /**
   * Calculate average rating from testimonials
   * @param {Array} testimonials - Array of testimonials
   * @returns {number} Average rating
   */
  calculateAverageRating: (testimonials) => {
    if (testimonials.length === 0) return 0;
    const sum = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0);
    return Math.round((sum / testimonials.length) * 10) / 10; // Round to 1 decimal
  },

  /**
   * Get rating distribution
   * @param {Array} testimonials - Array of testimonials
   * @returns {Object} Rating distribution
   */
  getRatingDistribution: (testimonials) => {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    testimonials.forEach(testimonial => {
      distribution[testimonial.rating]++;
    });
    return distribution;
  }
};

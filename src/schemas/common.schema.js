/**
 * API Response Schema Definition
 * Defines the structure for API responses
 */

export const ApiResponseSchema = {
  type: "object",
  properties: {
    success: {
      type: "boolean",
      description: "Whether the request was successful"
    },
    data: {
      type: ["object", "array", "null"],
      description: "Response data"
    },
    message: {
      type: "string",
      description: "Response message"
    },
    error: {
      type: "object",
      properties: {
        code: {
          type: "string",
          description: "Error code"
        },
        message: {
          type: "string",
          description: "Error message"
        },
        details: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Error details"
        }
      },
      additionalProperties: false
    },
    meta: {
      type: "object",
      properties: {
        timestamp: {
          type: "string",
          format: "date-time",
          description: "Response timestamp"
        },
        requestId: {
          type: "string",
          description: "Unique request identifier"
        },
        version: {
          type: "string",
          description: "API version"
        },
        pagination: {
          type: "object",
          properties: {
            page: {
              type: "number",
              minimum: 1,
              description: "Current page number"
            },
            limit: {
              type: "number",
              minimum: 1,
              maximum: 100,
              description: "Items per page"
            },
            total: {
              type: "number",
              minimum: 0,
              description: "Total number of items"
            },
            totalPages: {
              type: "number",
              minimum: 0,
              description: "Total number of pages"
            },
            hasNext: {
              type: "boolean",
              description: "Whether there are more pages"
            },
            hasPrev: {
              type: "boolean",
              description: "Whether there are previous pages"
            }
          },
          additionalProperties: false
        }
      },
      additionalProperties: false
    }
  },
  required: ["success"],
  additionalProperties: false
};

/**
 * Dr. Alcofree Contact Form Schema
 */
export const ContactFormSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 100,
      description: "Customer name"
    },
    email: {
      type: "string",
      format: "email",
      description: "Customer email address"
    },
    phone: {
      type: "string",
      pattern: "^[+]?[0-9]{10,15}$",
      description: "Customer phone number"
    },
    subject: {
      type: "string",
      minLength: 5,
      maxLength: 200,
      description: "Message subject"
    },
    message: {
      type: "string",
      minLength: 10,
      maxLength: 1000,
      description: "Message content"
    },
    type: {
      type: "string",
      enum: ["product_inquiry", "support", "side_effects", "dosage_question", "order_status", "testimonial", "other"],
      description: "Type of Dr. Alcofree inquiry"
    },
    currentAlcoholUsage: {
      type: "string",
      enum: ["daily", "weekly", "occasionally", "stopped", "never"],
      description: "Current alcohol usage pattern"
    },
    previousTreatment: {
      type: "boolean",
      description: "Has tried other alcohol cessation treatments"
    },
    consent: {
      type: "boolean",
      description: "Consent to process personal data for Dr. Alcofree support"
    }
  },
  required: ["name", "email", "message", "consent"],
  additionalProperties: false
};

/**
 * Dr. Alcofree Newsletter Subscription Schema
 */
export const NewsletterSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      description: "Subscriber email address"
    },
    name: {
      type: "string",
      minLength: 1,
      maxLength: 100,
      description: "Subscriber name"
    },
    preferences: {
      type: "object",
      properties: {
        sobrietyTips: {
          type: "boolean",
          default: true,
          description: "Sobriety tips and motivation"
        },
        healthUpdates: {
          type: "boolean",
          default: true,
          description: "Health and wellness updates"
        },
        productUpdates: {
          type: "boolean",
          default: true,
          description: "Dr. Alcofree product updates"
        },
        successStories: {
          type: "boolean",
          default: true,
          description: "Recovery success stories"
        },
        promotions: {
          type: "boolean",
          default: false,
          description: "Special offers and promotions"
        }
      },
      additionalProperties: false
    },
    recoveryStage: {
      type: "string",
      enum: ["considering", "just_started", "in_progress", "maintaining", "supporting_others"],
      description: "Current recovery stage"
    },
    language: {
      type: "string",
      enum: ["en", "hi", "te", "ta", "kn", "ml"],
      default: "en",
      description: "Preferred language"
    }
  },
  required: ["email"],
  additionalProperties: false
};

/**
 * Dr. Alcofree FAQ Schema
 */
export const FAQSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique FAQ identifier"
    },
    question: {
      type: "string",
      minLength: 10,
      maxLength: 500,
      description: "FAQ question"
    },
    answer: {
      type: "string",
      minLength: 20,
      maxLength: 2000,
      description: "FAQ answer"
    },
    category: {
      type: "string",
      enum: ["product_info", "usage_dosage", "ingredients", "side_effects", "effectiveness", "ordering", "shipping", "returns", "safety", "general"],
      description: "Dr. Alcofree FAQ category"
    },
    tags: {
      type: "array",
      items: {
        type: "string"
      },
      description: "FAQ tags for search (e.g., 'natural', 'herbal', 'alcohol-free', 'recovery')"
    },
    priority: {
      type: "string",
      enum: ["high", "medium", "low"],
      default: "medium",
      description: "FAQ priority for ordering"
    },
    order: {
      type: "number",
      minimum: 0,
      description: "Display order within category"
    },
    isActive: {
      type: "boolean",
      default: true,
      description: "Whether FAQ is active"
    },
    language: {
      type: "string",
      enum: ["en", "hi", "te", "ta", "kn", "ml"],
      default: "en",
      description: "FAQ language"
    },
    relatedProducts: {
      type: "array",
      items: {
        type: "string"
      },
      description: "Related Dr. Alcofree products"
    },
    metadata: {
      type: "object",
      properties: {
        createdAt: {
          type: "string",
          format: "date-time",
          description: "FAQ creation date"
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          description: "Last update date"
        },
        viewCount: {
          type: "number",
          minimum: 0,
          default: 0,
          description: "Number of views"
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
  required: ["id", "question", "answer", "category"],
  additionalProperties: false
};

/**
 * Dr. Alcofree Analytics Event Schema
 */
export const AnalyticsEventSchema = {
  type: "object",
  properties: {
    eventType: {
      type: "string",
      enum: ["page_view", "product_view", "add_to_cart", "purchase", "testimonial_submit", "contact_form", "newsletter_signup", "video_play", "faq_click", "amazon_redirect"],
      description: "Type of Dr. Alcofree event"
    },
    eventName: {
      type: "string",
      description: "Event name"
    },
    properties: {
      type: "object",
      properties: {
        page: {
          type: "string",
          description: "Page where event occurred"
        },
        element: {
          type: "string",
          description: "Element that triggered the event"
        },
        productId: {
          type: "string",
          description: "Dr. Alcofree product ID"
        },
        orderValue: {
          type: "number",
          description: "Order value in rupees"
        },
        recoveryStage: {
          type: "string",
          enum: ["considering", "just_started", "in_progress", "maintaining"],
          description: "User's recovery stage"
        },
        category: {
          type: "string",
          description: "Event category"
        },
        source: {
          type: "string",
          enum: ["organic", "paid", "social", "email", "referral", "direct"],
          description: "Traffic source"
        }
      },
      additionalProperties: true
    },
    user: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "User ID"
        },
        sessionId: {
          type: "string",
          description: "Session ID"
        },
        ipAddress: {
          type: "string",
          description: "User IP address"
        },
        userAgent: {
          type: "string",
          description: "User agent string"
        },
        referrer: {
          type: "string",
          description: "Referrer URL"
        },
        language: {
          type: "string",
          description: "User's preferred language"
        },
        location: {
          type: "object",
          properties: {
            city: {
              type: "string",
              description: "User's city"
            },
            state: {
              type: "string",
              description: "User's state"
            },
            country: {
              type: "string",
              description: "User's country"
            }
          },
          additionalProperties: false
        }
      },
      additionalProperties: false
    },
    timestamp: {
      type: "string",
      format: "date-time",
      description: "Event timestamp"
    }
  },
  required: ["eventType", "eventName", "timestamp"],
  additionalProperties: false
};

/**
 * API response helper functions
 */
export const ApiResponseUtils = {
  /**
   * Create success response
   * @param {*} data - Response data
   * @param {string} message - Success message
   * @param {Object} meta - Meta information
   * @returns {Object} Success response
   */
  success: (data, message = "Success", meta = {}) => ({
    success: true,
    data,
    message,
    meta: {
      timestamp: new Date().toISOString(),
      ...meta
    }
  }),

  /**
   * Create error response
   * @param {string} message - Error message
   * @param {string} code - Error code
   * @param {Array} details - Error details
   * @param {Object} meta - Meta information
   * @returns {Object} Error response
   */
  error: (message, code = "UNKNOWN_ERROR", details = [], meta = {}) => ({
    success: false,
    data: null,
    message,
    error: {
      code,
      message,
      details
    },
    meta: {
      timestamp: new Date().toISOString(),
      ...meta
    }
  }),

  /**
   * Create paginated response
   * @param {Array} data - Response data
   * @param {number} page - Current page
   * @param {number} limit - Items per page
   * @param {number} total - Total items
   * @param {string} message - Success message
   * @returns {Object} Paginated response
   */
  paginated: (data, page, limit, total, message = "Success") => {
    const totalPages = Math.ceil(total / limit);
    
    return {
      success: true,
      data,
      message,
      meta: {
        timestamp: new Date().toISOString(),
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      }
    };
  }
};

/**
 * Form validation helpers
 */
export const FormValidationUtils = {
  /**
   * Validate Dr. Alcofree contact form
   * @param {Object} form - Form data
   * @returns {Object} Validation result
   */
  validateContactForm: (form) => {
    const errors = [];
    
    if (!form.name || form.name.length < 2) errors.push("Name must be at least 2 characters");
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.push("Valid email is required");
    if (!form.message || form.message.length < 10) errors.push("Message must be at least 10 characters");
    if (!form.consent) errors.push("Consent is required to process your Dr. Alcofree inquiry");
    
    if (form.phone && !/^[+]?[0-9]{10,15}$/.test(form.phone)) {
      errors.push("Please provide a valid phone number");
    }
    
    if (form.type && !["product_inquiry", "support", "side_effects", "dosage_question", "order_status", "testimonial", "other"].includes(form.type)) {
      errors.push("Please select a valid inquiry type");
    }
    
    if (form.currentAlcoholUsage && !["daily", "weekly", "occasionally", "stopped", "never"].includes(form.currentAlcoholUsage)) {
      errors.push("Please select a valid alcohol usage pattern");
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },

  /**
   * Validate Dr. Alcofree newsletter subscription
   * @param {Object} subscription - Subscription data
   * @returns {Object} Validation result
   */
  validateNewsletterSubscription: (subscription) => {
    const errors = [];
    
    if (!subscription.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscription.email)) {
      errors.push("Valid email is required for Dr. Alcofree updates");
    }
    
    if (subscription.recoveryStage && !["considering", "just_started", "in_progress", "maintaining", "supporting_others"].includes(subscription.recoveryStage)) {
      errors.push("Please select a valid recovery stage");
    }
    
    if (subscription.language && !["en", "hi", "te", "ta", "kn", "ml"].includes(subscription.language)) {
      errors.push("Please select a supported language");
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },

  /**
   * Sanitize form input
   * @param {string} input - Input string
   * @returns {string} Sanitized input
   */
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return input;
    
    return input
      .trim()
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }
};

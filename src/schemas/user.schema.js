/**
 * User Schema Definition
 * Defines the structure and validation rules for user data
 */

export const UserSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the user"
    },
    email: {
      type: "string",
      format: "email",
      description: "User email address"
    },
    phone: {
      type: "string",
      pattern: "^[+]?[0-9]{10,15}$",
      description: "User phone number"
    },
    personalInfo: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
          minLength: 1,
          maxLength: 50,
          description: "User first name"
        },
        lastName: {
          type: "string",
          minLength: 1,
          maxLength: 50,
          description: "User last name"
        },
        dateOfBirth: {
          type: "string",
          format: "date",
          description: "User date of birth"
        },
        gender: {
          type: "string",
          enum: ["male", "female", "other", "prefer_not_to_say"],
          description: "User gender"
        }
      },
      additionalProperties: false
    },
    address: {
      type: "object",
      properties: {
        street: {
          type: "string",
          maxLength: 200,
          description: "Street address"
        },
        city: {
          type: "string",
          maxLength: 100,
          description: "City"
        },
        state: {
          type: "string",
          maxLength: 100,
          description: "State/Province"
        },
        postalCode: {
          type: "string",
          pattern: "^[0-9]{6}$",
          description: "Postal/ZIP code"
        },
        country: {
          type: "string",
          maxLength: 100,
          default: "India",
          description: "Country"
        }
      },
      additionalProperties: false
    },
    preferences: {
      type: "object",
      properties: {
        language: {
          type: "string",
          enum: ["en", "hi", "te", "ta", "kn", "ml"],
          default: "en",
          description: "Preferred language"
        },
        notifications: {
          type: "object",
          properties: {
            email: {
              type: "boolean",
              default: true,
              description: "Email notifications enabled"
            },
            sms: {
              type: "boolean",
              default: false,
              description: "SMS notifications enabled"
            },
            push: {
              type: "boolean",
              default: true,
              description: "Push notifications enabled"
            }
          },
          additionalProperties: false
        },
        marketing: {
          type: "object",
          properties: {
            emailConsent: {
              type: "boolean",
              default: false,
              description: "Consent for marketing emails"
            },
            smsConsent: {
              type: "boolean",
              default: false,
              description: "Consent for marketing SMS"
            }
          },
          additionalProperties: false
        }
      },
      additionalProperties: false
    },
    orderHistory: {
      type: "array",
      items: {
        type: "object",
        properties: {
          orderId: {
            type: "string",
            description: "Order ID"
          },
          date: {
            type: "string",
            format: "date-time",
            description: "Order date"
          },
          amount: {
            type: "number",
            minimum: 0,
            description: "Order amount"
          },
          status: {
            type: "string",
            enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
            description: "Order status"
          },
          products: {
            type: "array",
            items: {
              type: "object",
              properties: {
                productId: {
                  type: "string",
                  description: "Product ID"
                },
                quantity: {
                  type: "number",
                  minimum: 1,
                  description: "Quantity ordered"
                },
                price: {
                  type: "number",
                  minimum: 0,
                  description: "Price per unit"
                }
              },
              required: ["productId", "quantity", "price"],
              additionalProperties: false
            }
          }
        },
        required: ["orderId", "date", "amount", "status"],
        additionalProperties: false
      },
      description: "User order history"
    },
    metadata: {
      type: "object",
      properties: {
        createdAt: {
          type: "string",
          format: "date-time",
          description: "Account creation date"
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          description: "Last update date"
        },
        lastLogin: {
          type: "string",
          format: "date-time",
          description: "Last login date"
        },
        isActive: {
          type: "boolean",
          default: true,
          description: "Whether account is active"
        },
        source: {
          type: "string",
          enum: ["website", "mobile_app", "social_media", "referral"],
          description: "How user found the service"
        },
        ipAddress: {
          type: "string",
          description: "Last known IP address"
        }
      },
      additionalProperties: false
    }
  },
  required: ["id", "email"],
  additionalProperties: false
};

/**
 * User validation helper
 * @param {Object} user - User data to validate
 * @returns {Object} Validation result
 */
export const validateUser = (user) => {
  const errors = [];
  
  // Basic required field validation
  if (!user.id) errors.push("User ID is required");
  if (!user.email) errors.push("Email is required");
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (user.email && !emailRegex.test(user.email)) {
    errors.push("Invalid email format");
  }
  
  // Phone validation
  if (user.phone) {
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneRegex.test(user.phone)) {
      errors.push("Invalid phone number format");
    }
  }
  
  // Postal code validation for India
  if (user.address?.postalCode) {
    const postalRegex = /^[0-9]{6}$/;
    if (!postalRegex.test(user.address.postalCode)) {
      errors.push("Invalid postal code format (should be 6 digits)");
    }
  }
  
  // Date of birth validation
  if (user.personalInfo?.dateOfBirth) {
    const dob = new Date(user.personalInfo.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    
    if (age < 18) {
      errors.push("User must be at least 18 years old");
    }
    if (age > 120) {
      errors.push("Invalid date of birth");
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Default user structure
 */
export const createDefaultUser = () => ({
  id: "",
  email: "",
  phone: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "prefer_not_to_say"
  },
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India"
  },
  preferences: {
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    marketing: {
      emailConsent: false,
      smsConsent: false
    }
  },
  orderHistory: [],
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    isActive: true,
    source: "website"
  }
});

/**
 * User utility functions
 */
export const UserUtils = {
  /**
   * Get user's full name
   * @param {Object} user - User object
   * @returns {string} Full name
   */
  getFullName: (user) => {
    const { firstName, lastName } = user.personalInfo || {};
    return [firstName, lastName].filter(Boolean).join(' ') || 'User';
  },

  /**
   * Get user's age
   * @param {Object} user - User object
   * @returns {number|null} Age in years
   */
  getAge: (user) => {
    if (!user.personalInfo?.dateOfBirth) return null;
    
    const dob = new Date(user.personalInfo.dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    
    return age;
  },

  /**
   * Get user's full address
   * @param {Object} user - User object
   * @returns {string} Formatted address
   */
  getFormattedAddress: (user) => {
    const { street, city, state, postalCode, country } = user.address || {};
    return [street, city, state, postalCode, country].filter(Boolean).join(', ');
  },

  /**
   * Check if user has completed profile
   * @param {Object} user - User object
   * @returns {boolean} Whether profile is complete
   */
  isProfileComplete: (user) => {
    const requiredFields = [
      user.email,
      user.personalInfo?.firstName,
      user.personalInfo?.lastName,
      user.address?.city,
      user.address?.state,
      user.address?.postalCode
    ];
    
    return requiredFields.every(field => field && field.trim().length > 0);
  },

  /**
   * Get user's total order value
   * @param {Object} user - User object
   * @returns {number} Total order value
   */
  getTotalOrderValue: (user) => {
    return user.orderHistory?.reduce((total, order) => total + order.amount, 0) || 0;
  },

  /**
   * Get user's order count
   * @param {Object} user - User object
   * @returns {number} Number of orders
   */
  getOrderCount: (user) => {
    return user.orderHistory?.length || 0;
  },

  /**
   * Check if user is a returning customer
   * @param {Object} user - User object
   * @returns {boolean} Whether user has previous orders
   */
  isReturningCustomer: (user) => {
    return (user.orderHistory?.length || 0) > 0;
  }
};

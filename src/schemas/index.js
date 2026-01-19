/**
 * Schema Index
 * Central export point for all schema definitions
 */

// Product Schema
export {
  ProductSchema,
  validateProduct,
  createDefaultProduct
} from './product.schema.js';

// User Schema
export {
  UserSchema,
  validateUser,
  createDefaultUser,
  UserUtils
} from './user.schema.js';

// Order Schema
export {
  OrderSchema,
  validateOrder,
  generateOrderNumber,
  createDefaultOrder,
  OrderUtils
} from './order.schema.js';

// Testimonial Schema
export {
  TestimonialSchema,
  validateTestimonial,
  createDefaultTestimonial,
  TestimonialUtils
} from './testimonial.schema.js';

// Common Schema
export {
  ApiResponseSchema,
  ContactFormSchema,
  NewsletterSchema,
  FAQSchema,
  AnalyticsEventSchema,
  ApiResponseUtils,
  FormValidationUtils
} from './common.schema.js';

/**
 * Dr. Alcofree Schema Configuration
 */
export const SchemaConfig = {
  version: "1.0.0",
  description: "Dr. Alcofree Natural Alcohol Recovery Schema Definitions",
  lastUpdated: new Date().toISOString(),
  supportedLanguages: ["en", "hi", "te", "ta", "kn", "ml"],
  defaultLanguage: "en",
  currency: "INR",
  timezone: "Asia/Kolkata",
  businessDomain: "Natural Alcohol Recovery",
  productCategories: ["herbal_supplement", "ayurvedic", "natural_remedy"],
  recoveryStages: ["considering", "just_started", "in_progress", "maintaining", "supporting_others"]
};

/**
 * Common validation patterns
 */
export const ValidationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[0-9]{10,15}$/,
  indianPostalCode: /^[0-9]{6}$/,
  orderNumber: /^ORD[0-9]{8}$/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/
};

/**
 * Dr. Alcofree specific error messages
 */
export const ErrorMessages = {
  REQUIRED_FIELD: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_PHONE: "Please enter a valid Indian phone number",
  INVALID_POSTAL_CODE: "Please enter a valid 6-digit postal code",
  PASSWORD_TOO_WEAK: "Password must be at least 8 characters with uppercase, lowercase, number and special character",
  INVALID_URL: "Please enter a valid URL",
  MIN_LENGTH: (min) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max) => `Must not exceed ${max} characters`,
  MIN_VALUE: (min) => `Must be at least ${min}`,
  MAX_VALUE: (max) => `Must not exceed ${max}`,
  INVALID_RANGE: (min, max) => `Must be between ${min} and ${max}`,
  INVALID_FORMAT: "Invalid format",
  CONSENT_REQUIRED: "You must agree to allow us to process your information for Dr. Alcofree support",
  INVALID_DATE: "Please enter a valid date",
  FUTURE_DATE_NOT_ALLOWED: "Future date is not allowed",
  PAST_DATE_NOT_ALLOWED: "Past date is not allowed",
  INVALID_SELECTION: "Please make a valid selection",
  INVALID_RECOVERY_STAGE: "Please select a valid recovery stage",
  INVALID_ALCOHOL_USAGE: "Please select your alcohol usage pattern",
  TESTIMONIAL_CONSENT_REQUIRED: "Consent is required to publish your testimonial",
  INVALID_RATING: "Rating must be between 1 and 5 stars",
  INVALID_PRODUCT_CATEGORY: "Invalid product category for Dr. Alcofree",
  CURRENCY_NOT_SUPPORTED: "Only Indian Rupees (INR) is supported",
  INVALID_DOSAGE: "Please provide valid dosage information",
  INVALID_INGREDIENT: "Please provide valid ingredient information"
};

/**
 * Dr. Alcofree specific success messages
 */
export const SuccessMessages = {
  ORDER_PLACED: "Your Dr. Alcofree order has been placed successfully!",
  PAYMENT_SUCCESSFUL: "Payment completed successfully! Your recovery journey begins now.",
  PROFILE_UPDATED: "Your profile has been updated successfully!",
  CONTACT_FORM_SUBMITTED: "Thank you for contacting Dr. Alcofree! We'll respond within 24 hours.",
  NEWSLETTER_SUBSCRIBED: "Welcome to the Dr. Alcofree community! You'll receive recovery tips and updates.",
  TESTIMONIAL_SUBMITTED: "Thank you for sharing your Dr. Alcofree success story! It will inspire others.",
  PASSWORD_CHANGED: "Password changed successfully!",
  EMAIL_VERIFIED: "Email verified successfully! Welcome to Dr. Alcofree.",
  ACCOUNT_CREATED: "Account created successfully! Start your alcohol-free journey today.",
  ORDER_CANCELLED: "Order cancelled successfully! Refund will be processed within 5-7 business days.",
  REFUND_PROCESSED: "Refund processed successfully!",
  RECOVERY_PROGRESS_SAVED: "Your recovery progress has been saved!",
  SUPPORT_REQUEST_SUBMITTED: "Your support request has been submitted. Our team will help you soon.",
  DOSAGE_REMINDER_SET: "Dosage reminder set successfully!",
  RECOVERY_MILESTONE_ACHIEVED: "Congratulations on reaching your recovery milestone!"
};

/**
 * Status codes
 */
export const StatusCodes = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  
  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  
  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};

/**
 * Common utility functions
 */
export const SchemaUtils = {
  /**
   * Generate unique ID
   * @returns {string} Unique ID
   */
  generateId: () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  /**
   * Format currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code
   * @returns {string} Formatted currency
   */
  formatCurrency: (amount, currency = "INR") => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency
    }).format(amount);
  },

  /**
   * Format date
   * @param {string|Date} date - Date to format
   * @param {string} locale - Locale
   * @returns {string} Formatted date
   */
  formatDate: (date, locale = "en-IN") => {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  /**
   * Format time
   * @param {string|Date} date - Date to format
   * @param {string} locale - Locale
   * @returns {string} Formatted time
   */
  formatTime: (date, locale = "en-IN") => {
    return new Date(date).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  /**
   * Format phone number
   * @param {string} phone - Phone number
   * @returns {string} Formatted phone number
   */
  formatPhone: (phone) => {
    if (!phone) return '';
    
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format Indian phone number
    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{5})(\d{5})/, '$1 $2');
    }
    
    return phone;
  },

  /**
   * Validate and sanitize input
   * @param {*} value - Input value
   * @param {string} type - Input type
   * @returns {*} Sanitized value
   */
  sanitizeInput: (value, type = 'string') => {
    if (value === null || value === undefined) return value;
    
    switch (type) {
      case 'string':
        return typeof value === 'string' ? value.trim() : String(value).trim();
      case 'number':
        return typeof value === 'number' ? value : parseFloat(value) || 0;
      case 'boolean':
        return Boolean(value);
      case 'email':
        return typeof value === 'string' ? value.trim().toLowerCase() : '';
      default:
        return value;
    }
  },

  /**
   * Deep clone object
   * @param {*} obj - Object to clone
   * @returns {*} Cloned object
   */
  deepClone: (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => SchemaUtils.deepClone(item));
    
    const cloned = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = SchemaUtils.deepClone(obj[key]);
      }
    }
    return cloned;
  },

  /**
   * Check if object is empty
   * @param {*} obj - Object to check
   * @returns {boolean} Whether object is empty
   */
  isEmpty: (obj) => {
    if (obj === null || obj === undefined) return true;
    if (typeof obj === 'string') return obj.trim().length === 0;
    if (typeof obj === 'object') return Object.keys(obj).length === 0;
    if (Array.isArray(obj)) return obj.length === 0;
    return false;
  }
};

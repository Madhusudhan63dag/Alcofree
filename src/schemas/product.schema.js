/**
 * Dr. Alcofree Product Schema Definition
 * Defines the structure and validation rules for Dr. Alcofree product data
 */

export const ProductSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the Dr. Alcofree product"
    },
    name: {
      type: "string",
      minLength: 1,
      maxLength: 100,
      description: "Dr. Alcofree product name"
    },
    description: {
      type: "string",
      minLength: 10,
      maxLength: 2000,
      description: "Detailed product description"
    },
    shortDescription: {
      type: "string",
      minLength: 10,
      maxLength: 200,
      description: "Brief product description for listings"
    },
    price: {
      type: "object",
      properties: {
        original: {
          type: "number",
          minimum: 0,
          description: "Original price in rupees"
        },
        discounted: {
          type: "number",
          minimum: 0,
          description: "Discounted price in rupees"
        },
        currency: {
          type: "string",
          enum: ["INR"],
          default: "INR",
          description: "Currency code (Indian Rupees only)"
        },
        savingsPercent: {
          type: "number",
          minimum: 0,
          maximum: 100,
          description: "Savings percentage"
        }
      },
      required: ["original", "currency"],
      additionalProperties: false
    },
    images: {
      type: "array",
      items: {
        type: "object",
        properties: {
          url: {
            type: "string",
            format: "uri",
            description: "Product image URL"
          },
          alt: {
            type: "string",
            description: "Alternative text for accessibility"
          },
          type: {
            type: "string",
            enum: ["desktop", "mobile", "thumbnail", "packaging", "ingredients"],
            description: "Image type/usage"
          },
          isMain: {
            type: "boolean",
            default: false,
            description: "Whether this is the main product image"
          }
        },
        required: ["url", "alt"],
        additionalProperties: false
      },
      minItems: 1,
      description: "Dr. Alcofree product images"
    },
    category: {
      type: "string",
      enum: ["herbal_supplement", "ayurvedic", "natural_remedy"],
      description: "Product category"
    },
    availability: {
      type: "object",
      properties: {
        inStock: {
          type: "boolean",
          description: "Whether product is in stock"
        },
        stockCount: {
          type: "number",
          minimum: 0,
          description: "Number of units in stock"
        },
        stockLevel: {
          type: "string",
          enum: ["high", "medium", "low", "out_of_stock"],
          description: "Stock level indicator"
        },
        preOrder: {
          type: "boolean",
          default: false,
          description: "Whether pre-order is available"
        }
      },
      required: ["inStock"],
      additionalProperties: false
    },
    features: {
      type: "array",
      items: {
        type: "string",
        minLength: 1,
        maxLength: 200
      },
      description: "Key product features and benefits"
    },
    ingredients: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            minLength: 1,
            maxLength: 100,
            description: "Ingredient name (Sanskrit/English)"
          },
          scientificName: {
            type: "string",
            maxLength: 150,
            description: "Scientific name"
          },
          description: {
            type: "string",
            maxLength: 500,
            description: "Ingredient benefits and properties"
          },
          percentage: {
            type: "number",
            minimum: 0,
            maximum: 100,
            description: "Percentage in formulation"
          },
          isActive: {
            type: "boolean",
            default: true,
            description: "Whether ingredient is active component"
          }
        },
        required: ["name"],
        additionalProperties: false
      },
      description: "Natural ingredients in Dr. Alcofree"
    },
    usage: {
      type: "object",
      properties: {
        dosage: {
          type: "string",
          description: "Recommended dosage instructions"
        },
        frequency: {
          type: "string",
          description: "Usage frequency (e.g., '2 times daily')"
        },
        duration: {
          type: "string",
          description: "Recommended treatment duration"
        },
        instructions: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Step-by-step usage instructions"
        },
        precautions: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Important precautions and warnings"
        },
        bestTime: {
          type: "string",
          enum: ["morning", "evening", "before_meals", "after_meals", "any_time"],
          description: "Best time to take the product"
        }
      },
      additionalProperties: false
    },
    rating: {
      type: "object",
      properties: {
        average: {
          type: "number",
          minimum: 0,
          maximum: 5,
          description: "Average rating"
        },
        count: {
          type: "number",
          minimum: 0,
          description: "Number of reviews"
        },
        distribution: {
          type: "object",
          properties: {
            "5": { type: "number", minimum: 0 },
            "4": { type: "number", minimum: 0 },
            "3": { type: "number", minimum: 0 },
            "2": { type: "number", minimum: 0 },
            "1": { type: "number", minimum: 0 }
          },
          description: "Rating distribution"
        }
      },
      required: ["average", "count"],
      additionalProperties: false
    },
    certifications: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Certification name"
          },
          authority: {
            type: "string",
            description: "Certifying authority"
          },
          validUntil: {
            type: "string",
            format: "date",
            description: "Certification valid until"
          },
          imageUrl: {
            type: "string",
            format: "uri",
            description: "Certification logo/image"
          }
        },
        required: ["name", "authority"],
        additionalProperties: false
      },
      description: "Product certifications (FDA, AYUSH, etc.)"
    },
    packaging: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["bottle", "box", "sachet", "container"],
          description: "Packaging type"
        },
        size: {
          type: "string",
          description: "Package size (e.g., '60ml', '30 tablets')"
        },
        material: {
          type: "string",
          description: "Packaging material"
        },
        instructions: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Storage instructions"
        }
      },
      additionalProperties: false
    },
    metadata: {
      type: "object",
      properties: {
        createdAt: {
          type: "string",
          format: "date-time",
          description: "Product creation date"
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          description: "Last update date"
        },
        isActive: {
          type: "boolean",
          default: true,
          description: "Whether product is active"
        },
        isFeatured: {
          type: "boolean",
          default: false,
          description: "Whether product is featured"
        },
        tags: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Product tags (natural, herbal, alcohol-free, etc.)"
        },
        seoTitle: {
          type: "string",
          maxLength: 60,
          description: "SEO title"
        },
        seoDescription: {
          type: "string",
          maxLength: 160,
          description: "SEO meta description"
        },
        reviewsEnabled: {
          type: "boolean",
          default: true,
          description: "Whether reviews are enabled"
        }
      },
      additionalProperties: false
    }
  },
  required: ["id", "name", "description", "price", "images", "category", "availability"],
  additionalProperties: false
};

/**
 * Dr. Alcofree product validation helper
 * @param {Object} product - Product data to validate
 * @returns {Object} Validation result
 */
export const validateProduct = (product) => {
  const errors = [];
  
  // Basic required field validation
  if (!product.id) errors.push("Product ID is required");
  if (!product.name || product.name.length < 1) errors.push("Product name is required");
  if (!product.description || product.description.length < 10) errors.push("Product description must be at least 10 characters");
  if (!product.price?.original || product.price.original <= 0) errors.push("Valid original price is required");
  if (!product.images || product.images.length === 0) errors.push("At least one product image is required");
  if (!product.category) errors.push("Product category is required");
  
  // Price validation
  if (product.price?.discounted && product.price.discounted >= product.price.original) {
    errors.push("Discounted price must be less than original price");
  }
  
  // Currency validation for Dr. Alcofree (INR only)
  if (product.price?.currency && product.price.currency !== "INR") {
    errors.push("Dr. Alcofree only supports INR currency");
  }
  
  // Image validation
  if (product.images) {
    let hasMainImage = false;
    product.images.forEach((image, index) => {
      if (!image.url) errors.push(`Image ${index + 1} URL is required`);
      if (!image.alt) errors.push(`Image ${index + 1} alt text is required for accessibility`);
      if (image.isMain) hasMainImage = true;
    });
    
    if (!hasMainImage && product.images.length > 1) {
      errors.push("At least one image should be marked as main image");
    }
  }
  
  // Category validation
  if (product.category && !["herbal_supplement", "ayurvedic", "natural_remedy"].includes(product.category)) {
    errors.push("Invalid product category for Dr. Alcofree");
  }
  
  // Ingredients validation
  if (product.ingredients) {
    product.ingredients.forEach((ingredient, index) => {
      if (!ingredient.name) errors.push(`Ingredient ${index + 1} name is required`);
      if (ingredient.percentage && (ingredient.percentage < 0 || ingredient.percentage > 100)) {
        errors.push(`Ingredient ${index + 1} percentage must be between 0-100`);
      }
    });
  }
  
  // Usage validation
  if (product.usage) {
    if (product.usage.bestTime && !["morning", "evening", "before_meals", "after_meals", "any_time"].includes(product.usage.bestTime)) {
      errors.push("Invalid best time for usage");
    }
  }
  
  // Rating validation
  if (product.rating) {
    if (product.rating.average < 0 || product.rating.average > 5) {
      errors.push("Rating average must be between 0-5");
    }
    if (product.rating.count < 0) {
      errors.push("Rating count cannot be negative");
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Default Dr. Alcofree product structure
 */
export const createDefaultProduct = () => ({
  id: "",
  name: "",
  description: "",
  shortDescription: "",
  price: {
    original: 0,
    currency: "INR"
  },
  images: [],
  category: "herbal_supplement",
  availability: {
    inStock: true,
    stockCount: 0,
    stockLevel: "medium",
    preOrder: false
  },
  features: [],
  ingredients: [],
  usage: {
    dosage: "",
    frequency: "",
    duration: "",
    instructions: [],
    precautions: [],
    bestTime: "any_time"
  },
  rating: {
    average: 0,
    count: 0,
    distribution: {
      "5": 0,
      "4": 0,
      "3": 0,
      "2": 0,
      "1": 0
    }
  },
  certifications: [],
  packaging: {
    type: "bottle",
    size: "",
    material: "",
    instructions: []
  },
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: true,
    isFeatured: false,
    tags: ["natural", "herbal", "alcohol-free", "ayurvedic"],
    seoTitle: "",
    seoDescription: "",
    reviewsEnabled: true
  }
});

/**
 * Order Schema Definition
 * Defines the structure and validation rules for order data
 */

export const OrderSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the order"
    },
    orderNumber: {
      type: "string",
      pattern: "^ORD[0-9]{8}$",
      description: "Human-readable order number (e.g., ORD12345678)"
    },
    customerId: {
      type: "string",
      description: "Customer ID who placed the order"
    },
    customerInfo: {
      type: "object",
      properties: {
        email: {
          type: "string",
          format: "email",
          description: "Customer email"
        },
        phone: {
          type: "string",
          pattern: "^[+]?[0-9]{10,15}$",
          description: "Customer phone number"
        },
        name: {
          type: "string",
          minLength: 1,
          maxLength: 100,
          description: "Customer full name"
        }
      },
      required: ["email", "name"],
      additionalProperties: false
    },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            description: "Product ID"
          },
          productName: {
            type: "string",
            description: "Product name"
          },
          quantity: {
            type: "number",
            minimum: 1,
            description: "Quantity ordered"
          },
          unitPrice: {
            type: "number",
            minimum: 0,
            description: "Price per unit"
          },
          totalPrice: {
            type: "number",
            minimum: 0,
            description: "Total price for this item (quantity × unitPrice)"
          },
          discount: {
            type: "number",
            minimum: 0,
            default: 0,
            description: "Discount applied to this item"
          },
          tax: {
            type: "number",
            minimum: 0,
            default: 0,
            description: "Tax amount for this item"
          }
        },
        required: ["productId", "productName", "quantity", "unitPrice", "totalPrice"],
        additionalProperties: false
      },
      minItems: 1,
      description: "Order items"
    },
    pricing: {
      type: "object",
      properties: {
        subtotal: {
          type: "number",
          minimum: 0,
          description: "Subtotal before discounts and tax"
        },
        discount: {
          type: "number",
          minimum: 0,
          default: 0,
          description: "Total discount amount"
        },
        tax: {
          type: "number",
          minimum: 0,
          default: 0,
          description: "Total tax amount"
        },
        shipping: {
          type: "number",
          minimum: 0,
          default: 0,
          description: "Shipping cost"
        },
        total: {
          type: "number",
          minimum: 0,
          description: "Final total amount"
        }
      },
      required: ["subtotal", "total"],
      additionalProperties: false
    },
    shippingAddress: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
          minLength: 1,
          maxLength: 50,
          description: "Recipient first name"
        },
        lastName: {
          type: "string",
          minLength: 1,
          maxLength: 50,
          description: "Recipient last name"
        },
        company: {
          type: "string",
          maxLength: 100,
          description: "Company name (optional)"
        },
        street: {
          type: "string",
          minLength: 1,
          maxLength: 200,
          description: "Street address"
        },
        city: {
          type: "string",
          minLength: 1,
          maxLength: 100,
          description: "City"
        },
        state: {
          type: "string",
          minLength: 1,
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
        },
        phone: {
          type: "string",
          pattern: "^[+]?[0-9]{10,15}$",
          description: "Contact phone number"
        }
      },
      required: ["firstName", "lastName", "street", "city", "state", "postalCode", "phone"],
      additionalProperties: false
    },
    billingAddress: {
      type: "object",
      properties: {
        sameAsShipping: {
          type: "boolean",
          default: true,
          description: "Whether billing address is same as shipping"
        },
        firstName: {
          type: "string",
          minLength: 1,
          maxLength: 50,
          description: "Billing first name"
        },
        lastName: {
          type: "string",
          minLength: 1,
          maxLength: 50,
          description: "Billing last name"
        },
        company: {
          type: "string",
          maxLength: 100,
          description: "Company name (optional)"
        },
        street: {
          type: "string",
          minLength: 1,
          maxLength: 200,
          description: "Street address"
        },
        city: {
          type: "string",
          minLength: 1,
          maxLength: 100,
          description: "City"
        },
        state: {
          type: "string",
          minLength: 1,
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
    payment: {
      type: "object",
      properties: {
        method: {
          type: "string",
          enum: ["credit_card", "debit_card", "net_banking", "upi", "wallet", "cod"],
          description: "Payment method"
        },
        status: {
          type: "string",
          enum: ["pending", "processing", "completed", "failed", "refunded"],
          description: "Payment status"
        },
        transactionId: {
          type: "string",
          description: "Payment transaction ID"
        },
        gateway: {
          type: "string",
          enum: ["razorpay", "stripe", "paypal", "paytm", "phonepe"],
          description: "Payment gateway used"
        },
        paidAt: {
          type: "string",
          format: "date-time",
          description: "Payment completion date"
        },
        amount: {
          type: "number",
          minimum: 0,
          description: "Payment amount"
        }
      },
      required: ["method", "status", "amount"],
      additionalProperties: false
    },
    status: {
      type: "string",
      enum: ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"],
      description: "Order status"
    },
    tracking: {
      type: "object",
      properties: {
        trackingNumber: {
          type: "string",
          description: "Shipment tracking number"
        },
        carrier: {
          type: "string",
          description: "Shipping carrier"
        },
        trackingUrl: {
          type: "string",
          format: "uri",
          description: "Tracking URL"
        },
        estimatedDelivery: {
          type: "string",
          format: "date-time",
          description: "Estimated delivery date"
        },
        actualDelivery: {
          type: "string",
          format: "date-time",
          description: "Actual delivery date"
        }
      },
      additionalProperties: false
    },
    notes: {
      type: "object",
      properties: {
        customerNotes: {
          type: "string",
          maxLength: 500,
          description: "Customer notes/instructions"
        },
        adminNotes: {
          type: "string",
          maxLength: 1000,
          description: "Internal admin notes"
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
          description: "Order creation date"
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          description: "Last update date"
        },
        source: {
          type: "string",
          enum: ["website", "mobile_app", "phone", "admin"],
          description: "Order source"
        },
        ipAddress: {
          type: "string",
          description: "Customer IP address"
        },
        userAgent: {
          type: "string",
          description: "Customer user agent"
        },
        referrer: {
          type: "string",
          description: "Referrer URL"
        }
      },
      additionalProperties: false
    }
  },
  required: ["id", "orderNumber", "customerId", "customerInfo", "items", "pricing", "shippingAddress", "payment", "status"],
  additionalProperties: false
};

/**
 * Order validation helper
 * @param {Object} order - Order data to validate
 * @returns {Object} Validation result
 */
export const validateOrder = (order) => {
  const errors = [];
  
  // Basic required field validation
  if (!order.id) errors.push("Order ID is required");
  if (!order.orderNumber) errors.push("Order number is required");
  if (!order.customerId) errors.push("Customer ID is required");
  if (!order.customerInfo?.email) errors.push("Customer email is required");
  if (!order.customerInfo?.name) errors.push("Customer name is required");
  if (!order.items || order.items.length === 0) errors.push("Order must have at least one item");
  if (!order.pricing?.subtotal) errors.push("Order subtotal is required");
  if (!order.pricing?.total) errors.push("Order total is required");
  if (!order.payment?.method) errors.push("Payment method is required");
  if (!order.payment?.status) errors.push("Payment status is required");
  if (!order.status) errors.push("Order status is required");
  
  // Order number format validation
  if (order.orderNumber && !/^ORD[0-9]{8}$/.test(order.orderNumber)) {
    errors.push("Order number must be in format ORD12345678");
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (order.customerInfo?.email && !emailRegex.test(order.customerInfo.email)) {
    errors.push("Invalid customer email format");
  }
  
  // Items validation
  if (order.items) {
    order.items.forEach((item, index) => {
      if (!item.productId) errors.push(`Item ${index + 1} product ID is required`);
      if (!item.productName) errors.push(`Item ${index + 1} product name is required`);
      if (!item.quantity || item.quantity < 1) errors.push(`Item ${index + 1} quantity must be at least 1`);
      if (!item.unitPrice || item.unitPrice < 0) errors.push(`Item ${index + 1} unit price must be positive`);
      if (!item.totalPrice || item.totalPrice < 0) errors.push(`Item ${index + 1} total price must be positive`);
      
      // Validate total price calculation
      const expectedTotal = item.quantity * item.unitPrice - (item.discount || 0) + (item.tax || 0);
      if (Math.abs(item.totalPrice - expectedTotal) > 0.01) {
        errors.push(`Item ${index + 1} total price calculation is incorrect`);
      }
    });
  }
  
  // Pricing validation
  if (order.pricing) {
    const expectedTotal = order.pricing.subtotal - (order.pricing.discount || 0) + (order.pricing.tax || 0) + (order.pricing.shipping || 0);
    
    if (Math.abs(order.pricing.total - expectedTotal) > 0.01) {
      errors.push("Order total calculation is incorrect");
    }
  }
  
  // Shipping address validation
  if (order.shippingAddress) {
    const required = ['firstName', 'lastName', 'street', 'city', 'state', 'postalCode', 'phone'];
    required.forEach(field => {
      if (!order.shippingAddress[field]) {
        errors.push(`Shipping address ${field} is required`);
      }
    });
    
    // Postal code validation for India
    if (order.shippingAddress.postalCode && !/^[0-9]{6}$/.test(order.shippingAddress.postalCode)) {
      errors.push("Invalid postal code format (should be 6 digits)");
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Generate order number
 * @returns {string} Generated order number
 */
export const generateOrderNumber = () => {
  const timestamp = Date.now().toString().slice(-8);
  return `ORD${timestamp}`;
};

/**
 * Default order structure
 */
export const createDefaultOrder = () => ({
  id: "",
  orderNumber: generateOrderNumber(),
  customerId: "",
  customerInfo: {
    email: "",
    name: "",
    phone: ""
  },
  items: [],
  pricing: {
    subtotal: 0,
    discount: 0,
    tax: 0,
    shipping: 0,
    total: 0
  },
  shippingAddress: {
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    phone: ""
  },
  billingAddress: {
    sameAsShipping: true
  },
  payment: {
    method: "cod",
    status: "pending",
    amount: 0
  },
  status: "pending",
  tracking: {},
  notes: {
    customerNotes: "",
    adminNotes: ""
  },
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    source: "website"
  }
});

/**
 * Order utility functions
 */
export const OrderUtils = {
  /**
   * Calculate order subtotal
   * @param {Array} items - Order items
   * @returns {number} Subtotal
   */
  calculateSubtotal: (items) => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  },

  /**
   * Calculate order total
   * @param {Object} pricing - Pricing object
   * @returns {number} Total
   */
  calculateTotal: (pricing) => {
    return pricing.subtotal - (pricing.discount || 0) + (pricing.tax || 0) + (pricing.shipping || 0);
  },

  /**
   * Get order status color
   * @param {string} status - Order status
   * @returns {string} CSS color class
   */
  getStatusColor: (status) => {
    const colors = {
      pending: 'text-yellow-600',
      confirmed: 'text-blue-600',
      processing: 'text-purple-600',
      shipped: 'text-indigo-600',
      delivered: 'text-green-600',
      cancelled: 'text-red-600',
      refunded: 'text-gray-600'
    };
    return colors[status] || 'text-gray-600';
  },

  /**
   * Get order status display text
   * @param {string} status - Order status
   * @returns {string} Display text
   */
  getStatusText: (status) => {
    const texts = {
      pending: 'Pending',
      confirmed: 'Confirmed',
      processing: 'Processing',
      shipped: 'Shipped',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
      refunded: 'Refunded'
    };
    return texts[status] || 'Unknown';
  },

  /**
   * Check if order can be cancelled
   * @param {Object} order - Order object
   * @returns {boolean} Whether order can be cancelled
   */
  canBeCancelled: (order) => {
    return ['pending', 'confirmed', 'processing'].includes(order.status);
  },

  /**
   * Check if order can be refunded
   * @param {Object} order - Order object
   * @returns {boolean} Whether order can be refunded
   */
  canBeRefunded: (order) => {
    return ['delivered'].includes(order.status) && order.payment.status === 'completed';
  },

  /**
   * Get estimated delivery date
   * @param {Object} order - Order object
   * @param {number} businessDays - Business days for delivery
   * @returns {Date} Estimated delivery date
   */
  getEstimatedDelivery: (order, businessDays = 5) => {
    const orderDate = new Date(order.metadata.createdAt);
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + businessDays);
    return deliveryDate;
  },

  /**
   * Format order for display
   * @param {Object} order - Order object
   * @returns {Object} Formatted order data
   */
  formatForDisplay: (order) => {
    return {
      ...order,
      formattedTotal: `₹${order.pricing.total.toFixed(2)}`,
      formattedDate: new Date(order.metadata.createdAt).toLocaleDateString('en-IN'),
      statusText: OrderUtils.getStatusText(order.status),
      statusColor: OrderUtils.getStatusColor(order.status),
      canCancel: OrderUtils.canBeCancelled(order),
      canRefund: OrderUtils.canBeRefunded(order)
    };
  }
};

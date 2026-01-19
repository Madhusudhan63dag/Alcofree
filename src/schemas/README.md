# Dr. Alcofree Schema Documentation

This directory contains all the schema definitions for the Dr. Alcofree natural alcohol recovery application. These schemas provide structure, validation, and type safety for data throughout the Dr. Alcofree platform.

## Schema Files

### 1. Product Schema (`product.schema.js`)
Defines the structure for Dr. Alcofree product data including:
- Basic product information (name, description, pricing in INR)
- Product images and packaging details
- Natural ingredients and their properties
- Usage instructions and dosage information
- Customer ratings and reviews
- Certifications (FDA, AYUSH, etc.)
- Recovery-specific features

### 2. User Schema (`user.schema.js`)
Defines the structure for customer data including:
- Personal information and contact details
- Recovery journey preferences
- Order history and treatment progress
- Communication preferences
- Location and shipping information

### 3. Order Schema (`order.schema.js`)
Defines the structure for order processing including:
- Order identification and tracking
- Customer information and recovery stage
- Dr. Alcofree product details and pricing
- Indian shipping addresses and payment methods
- Order status and delivery tracking
- Recovery support information

### 4. Testimonial Schema (`testimonial.schema.js`)
Defines the structure for customer success stories including:
- Customer information and location
- Recovery journey details and progress
- Alcohol usage patterns before and after
- Treatment duration and results
- Media attachments (photos, videos)
- Verification and consent status

### 5. Common Schema (`common.schema.js`)
Defines common structures for Dr. Alcofree including:
- API response format
- Contact form for recovery inquiries
- Newsletter subscription with recovery preferences
- FAQ structure for addiction-related questions
- Analytics events for recovery tracking

### 6. Index (`index.js`)
Central export point providing:
- All schema exports
- Dr. Alcofree specific configuration
- Validation patterns for Indian data
- Recovery-specific error and success messages
- Utility functions for alcohol recovery support

## Dr. Alcofree Specific Features

### Recovery Journey Tracking
```javascript
recoveryStages: ["considering", "just_started", "in_progress", "maintaining", "supporting_others"]
```

### Alcohol Usage Patterns
```javascript
alcoholUsagePatterns: ["daily", "weekly", "occasionally", "heavy", "stopped"]
```

### Product Categories
```javascript
productCategories: ["herbal_supplement", "ayurvedic", "natural_remedy"]
```

### Recovery Results Timeline
```javascript
resultsTimeline: ["immediate", "within_week", "within_month", "gradual"]
```

## Usage Examples

### Dr. Alcofree Product Validation
```javascript
import { validateProduct, createDefaultProduct } from './schemas';

// Create a Dr. Alcofree product
const product = createDefaultProduct();
product.name = "Dr. Alcofree Natural Recovery Support";
product.description = "Ayurvedic herbal supplement for natural alcohol cessation";
product.price = { original: 6990, discounted: 3990, currency: "INR" };
product.category = "herbal_supplement";
product.ingredients = [
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "Reduces stress and anxiety during recovery",
    isActive: true
  }
];

const validation = validateProduct(product);
if (!validation.isValid) {
  console.error("Validation errors:", validation.errors);
}
```

### Recovery Testimonial Management
```javascript
import { TestimonialUtils, createDefaultTestimonial } from './schemas';

// Create a recovery testimonial
const testimonial = createDefaultTestimonial();
testimonial.name = "Rajesh Kumar";
testimonial.location = "Mumbai, Maharashtra";
testimonial.text = "Dr. Alcofree helped me quit alcohol naturally after 15 years of daily drinking";
testimonial.rating = 5;
testimonial.recoveryInfo = {
  alcoholUsageBefore: "daily",
  usageDuration: "3 months",
  recoveryStage: "maintaining",
  resultsSeen: "within_month"
};

// Get success stories
const successStories = TestimonialUtils.getSuccessStories(testimonials);
```

### Customer Support Form
```javascript
import { FormValidationUtils } from './schemas';

const supportForm = {
  name: "Priya Sharma",
  email: "priya@example.com",
  message: "I need help with dosage instructions",
  type: "dosage_question",
  currentAlcoholUsage: "weekly",
  previousTreatment: true,
  consent: true
};

const validation = FormValidationUtils.validateContactForm(supportForm);
```

## Recovery-Specific Validation

### Alcohol Usage Validation
```javascript
// Validates alcohol usage patterns
if (form.currentAlcoholUsage && 
    !["daily", "weekly", "occasionally", "stopped", "never"].includes(form.currentAlcoholUsage)) {
  errors.push("Please select a valid alcohol usage pattern");
}
```

### Recovery Stage Validation
```javascript
// Validates recovery journey stage
if (subscription.recoveryStage && 
    !["considering", "just_started", "in_progress", "maintaining", "supporting_others"].includes(subscription.recoveryStage)) {
  errors.push("Please select a valid recovery stage");
}
```

## Indian Market Specifics

### Currency Support
- Only Indian Rupees (INR) supported
- Pricing validation for Indian market

### Phone Number Validation
- Indian phone number format: `^[+]?[0-9]{10,15}$`
- Supports both mobile and landline formats

### Postal Code Validation
- 6-digit Indian postal code validation
- Format: `^[0-9]{6}$`

### Multi-language Support
- English, Hindi, Telugu, Tamil, Kannada, Malayalam
- Language-specific testimonials and content

## Recovery Support Features

### Dosage Tracking
```javascript
usage: {
  dosage: "10ml twice daily",
  frequency: "2 times daily",
  duration: "3-6 months",
  bestTime: "before_meals",
  precautions: ["Do not exceed recommended dose", "Consult doctor if pregnant"]
}
```

### Progress Monitoring
```javascript
recoveryInfo: {
  alcoholUsageBefore: "daily",
  usageDuration: "3 months",
  recoveryStage: "maintaining",
  previousAttempts: 2,
  resultsSeen: "within_month"
}
```

### Family Support Tracking
```javascript
customerInfo: {
  familySupport: true,
  occupation: "Software Engineer"
}
```

## Integration with Dr. Alcofree Platform

The schemas are specifically designed for:
- **Natural recovery tracking** - Monitor customer progress
- **Ayurvedic product management** - Handle herbal supplements
- **Indian market compliance** - Local regulations and preferences
- **Multi-language support** - Reach diverse customer base
- **Recovery community building** - Connect customers with similar journeys

## Best Practices for Dr. Alcofree

1. **Always validate recovery data** before processing
2. **Respect customer privacy** in testimonials
3. **Provide accurate dosage information** for safety
4. **Track recovery progress** to improve support
5. **Use culturally appropriate messaging** for Indian customers
6. **Ensure consent for testimonials** before publishing
7. **Support multiple languages** for better reach
8. **Monitor treatment effectiveness** through feedback

This schema system provides a robust foundation for managing Dr. Alcofree's natural alcohol recovery platform, ensuring customer safety, data integrity, and recovery success tracking.

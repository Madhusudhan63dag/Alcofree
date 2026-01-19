import React, { useState, useEffect } from 'react';
import { 
  validateProduct, 
  createDefaultProduct, 
  SchemaUtils 
} from '../schemas';

/**
 * Product Management Component using Schema Validation
 */
const ProductManager = () => {
  const [product, setProduct] = useState(createDefaultProduct());
  const [validationErrors, setValidationErrors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate product whenever it changes
    const validation = validateProduct(product);
    setValidationErrors(validation.errors);
    setIsValid(validation.isValid);
  }, [product]);

  const handleInputChange = (field, value) => {
    setProduct(prev => ({
      ...prev,
      [field]: SchemaUtils.sanitizeInput(value)
    }));
  };

  const handlePriceChange = (field, value) => {
    setProduct(prev => ({
      ...prev,
      price: {
        ...prev.price,
        [field]: parseFloat(value) || 0
      }
    }));
  };

  const handleImageAdd = () => {
    const newImage = {
      url: '',
      alt: '',
      type: 'desktop'
    };
    
    setProduct(prev => ({
      ...prev,
      images: [...prev.images, newImage]
    }));
  };

  const handleImageChange = (index, field, value) => {
    setProduct(prev => ({
      ...prev,
      images: prev.images.map((img, i) => 
        i === index ? { ...img, [field]: value } : img
      )
    }));
  };

  const handleImageRemove = (index) => {
    setProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    if (isValid) {
      console.log('Product saved:', product);
      alert('Product saved successfully!');
    } else {
      alert('Please fix validation errors before saving.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      
      {/* Validation Status */}
      <div className={`mb-4 p-4 rounded-lg border ${
        isValid 
          ? 'bg-green-50 border-green-200 text-green-800' 
          : 'bg-red-50 border-red-200 text-red-800'
      }`}>
        <p className="font-semibold">
          {isValid ? '✅ Product data is valid' : '❌ Product data has errors'}
        </p>
        {validationErrors.length > 0 && (
          <ul className="mt-2 text-sm list-disc list-inside">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product ID *
            </label>
            <input
              type="text"
              value={product.id}
              onChange={(e) => handleInputChange('id', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name *
            </label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={product.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Enter product description (min 10 characters)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              value={product.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="herbal">Herbal</option>
              <option value="ayurvedic">Ayurvedic</option>
              <option value="natural">Natural</option>
              <option value="supplement">Supplement</option>
            </select>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pricing</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Original Price (₹) *
            </label>
            <input
              type="number"
              value={product.price.original}
              onChange={(e) => handlePriceChange('original', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter original price"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discounted Price (₹)
            </label>
            <input
              type="number"
              value={product.price.discounted || ''}
              onChange={(e) => handlePriceChange('discounted', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter discounted price (optional)"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select
              value={product.price.currency}
              onChange={(e) => handlePriceChange('currency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          {/* Stock Information */}
          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-2">Stock Information</h4>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={product.availability.inStock}
                  onChange={(e) => setProduct(prev => ({
                    ...prev,
                    availability: {
                      ...prev.availability,
                      inStock: e.target.checked
                    }
                  }))}
                  className="mr-2"
                />
                In Stock
              </label>
              
              <input
                type="number"
                value={product.availability.stockCount}
                onChange={(e) => setProduct(prev => ({
                  ...prev,
                  availability: {
                    ...prev.availability,
                    stockCount: parseInt(e.target.value) || 0
                  }
                }))}
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Stock count"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Product Images *</h3>
          <button
            onClick={handleImageAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Image
          </button>
        </div>

        {product.images.map((image, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={image.url}
                  onChange={(e) => handleImageChange(index, 'url', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text *
                </label>
                <input
                  type="text"
                  value={image.alt}
                  onChange={(e) => handleImageChange(index, 'alt', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter alt text"
                />
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={image.type}
                  onChange={(e) => handleImageChange(index, 'type', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="desktop">Desktop</option>
                  <option value="mobile">Mobile</option>
                  <option value="thumbnail">Thumbnail</option>
                </select>
                
                <button
                  onClick={() => handleImageRemove(index)}
                  className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {product.images.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No images added yet. Click "Add Image" to get started.
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={() => setProduct(createDefaultProduct())}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Reset
        </button>
        
        <button
          onClick={handleSave}
          disabled={!isValid}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            isValid
              ? 'bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
        >
          Save Product
        </button>
      </div>
    </div>
  );
};

export default ProductManager;

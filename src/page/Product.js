import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import product1 from '../assets/imagess/4.webp';
import product2 from '../assets/imagess/3.webp';
import product3 from '../assets/imagess/2.webp';

import amazon from '../assets/icons/amazon.webp';
import flipkart from '../assets/icons/flipkart.webp';
import stamps from '../assets/icons/stamps.webp';


import one from '../assets/imagess/ingeration/1.webp';
import two from '../assets/imagess/ingeration/2.webp';
import three from '../assets/imagess/ingeration/3.webp';
import four from '../assets/imagess/ingeration/4.webp';
import five from '../assets/imagess/ingeration/5.webp';
import six from '../assets/imagess/ingeration/6.webp';
import seven from '../assets/imagess/ingeration/7.webp';
import eight from '../assets/imagess/ingeration/8.webp';
import nine from '../assets/imagess/ingeration/9.webp';
import ten from '../assets/imagess/ingeration/10.webp';
import eleven from '../assets/imagess/ingeration/11.webp';
import twelve from '../assets/imagess/ingeration/12.webp';
import thirteen from '../assets/imagess/ingeration/13.webp';
import fourteen from '../assets/imagess/ingeration/14.webp';
import fifteen from '../assets/imagess/ingeration/15.webp';
import sixteen from '../assets/imagess/ingeration/16.webp';
import seventeen from '../assets/imagess/ingeration/17.webp';
import eighteen from '../assets/imagess/ingeration/18.webp';
import nineteen from '../assets/imagess/ingeration/19.webp';





const Product = ({ translations, currentLang }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedOffer, setSelectedOffer] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
    const [currency, setCurrency] = useState('INR');
    const [stockCount, setStockCount] = useState(12); // Add stock count state
    const productPrice = currency === 'USD' ? 120 : 2990; // Update to match urgency price
    const originalPrice = currency === 'USD' ? 180 : 6990;


    // Auto-slide offers every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedOffer((prev) => (prev + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    return { hours: 23, minutes: 59, seconds: 59 }; // Reset
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Add stock decrease simulation
    useEffect(() => {
        const stockTimer = setInterval(() => {
            setStockCount(prev => {
                if (prev > 5) {
                    return Math.max(5, prev - Math.floor(Math.random() * 2));
                }
                return prev;
            });
        }, 45000); // Decrease stock every 45 seconds

        return () => clearInterval(stockTimer);
    }, []);

    const handleCheckout = () => {
        const currentProductPrice = currency === 'USD' ? 120 : 3990;
        navigate('/checkout', {
            state: {
                quantity,
                totalAmount: quantity * currentProductPrice,
                productName: 'Dr. AlcoFree',
                unitPrice: currentProductPrice,
                currency: currency
            }
        });
    };

    const productImages = [product1, product2, product3];

    return (
        <div className="w-full">
            {/* Urgent Flash Sale Banner - Top of page */}
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 mb-6 animate-pulse">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <span className="text-2xl animate-bounce">⚡</span>
                        <span className="font-bold text-lg">FLASH SALE: {stockCount} BOTTLES LEFT!</span>
                        <div className="flex space-x-1 text-sm font-mono bg-black bg-opacity-30 px-3 py-1 rounded">
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span>:</span>
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span>:</span>
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        </div>
                        <span className="text-2xl animate-bounce">🔥</span>
                    </div>
                </div>
            </div>

            {/* Trust Indicators Banner with urgency */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg p-6 mb-8 md:block hidden border-l-4 border-red-500">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        <span className="font-semibold text-gray-800">Only {stockCount} Left!</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-800">COD Available</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-800">Quick Delivery</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-800">World-wide Shipping</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Mobile: Title, Description, Reviews with urgency - Shows first on mobile only */}
                <div className="md:hidden w-full">
                    {/* Mobile Urgency Alert */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                <span className="text-red-800 font-bold text-sm">HURRY! Only {stockCount} left</span>
                            </div>
                            <div className="text-red-600 text-xs font-mono">
                                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(stockCount / 50) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold montserrat text-gray-800 mb-2">Natural Supplement to Reduce Alcohol Cravings - 5 Bottles Pack (30ml each)</h1>
                    <p className='text-green-700 scada-regular text-sm mb-4'>Supports Sobriety & Mental Clarity | With Milk Thistle, Dandelion Root, B-Complex Vitamins & Herbal Adaptogens | 100% Natural & Safe | Complete 5-Bottle Treatment Pack</p>
                    
                    {/* Social Proof Alert */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-green-600 text-lg">🔥</span>
                            <span className="text-green-800 font-semibold text-sm">847 people bought this today!</span>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-2 mb-6 scada-regular'>
                        <span className="text-lg font-medium text-gray-600">4.5/5</span>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                            <span key={index} className={`text-2xl ${index < 4.5 ? 'text-yellow-400' : 'text-gray-300'}`}>
                                ★
                            </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        {/* Trust badges can go here */}
                    </div>
                </div>

                {/* Product Images Section */}
                <div className="md:w-1/2 w-full md:order-1">
                    {/* Main Image */}
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={productImages[selectedImage]}
                            alt="DR. Joints Pain Relief Oil"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        {productImages.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                            >
                                <img
                                    src={img}
                                    alt={`Product view ${index + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop: Complete Product Info Section with enhanced urgency */}
                <div className="hidden md:block md:w-1/2 w-full md:order-2">
                    <div>
                        {/* Desktop Urgency Header */}
                        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-orange-600/50 animate-pulse"></div>
                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl animate-bounce">🚨</span>
                                    <div>
                                        <div className="font-bold text-lg">FLASH SALE ENDING SOON!</div>
                                        <div className="text-sm opacity-90">Only {stockCount} bottles remaining</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm opacity-90">Time left:</div>
                                    <div className="flex space-x-1 text-lg font-mono">
                                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
                                        <span>:</span>
                                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                        <span>:</span>
                                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold montserrat text-gray-800 mb-2">Natural Supplement to Reduce Alcohol Cravings - 5 Bottles Pack (30ml each)</h1>
                        <p className='text-black text-sm'>Supports Sobriety & Mental Clarity | With Milk Thistle, Dandelion Root, B-Complex Vitamins & Herbal Adaptogens | 100% Natural & Safe | Complete 5-Bottle Treatment Pack</p>
                        
                        <div className='flex items-start gap-5 flex-col'>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <div>
                                <img src={stamps} alt="Stamps" className="" />
                            </div>

                            {/* Enhanced Desktop Buy Section with MORE urgency */}
                            <div className="w-full mt-6 overflow-x-hidden">
                                {/* Stock Progress Bar */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-red-800 font-bold text-sm">⚡ SELLING FAST!</span>
                                        <span className="text-red-600 text-sm">{stockCount} left</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div 
                                            className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000 animate-pulse" 
                                            style={{ width: `${100 - (stockCount / 50) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-red-600 text-xs mt-1 font-medium">⚠️ {Math.floor((stockCount / 50) * 100)}% SOLD OUT TODAY</p>
                                </div>

                                {/* Recent Purchase Notifications */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                        <span className="text-green-800 font-medium text-sm">🔥 Someone from Chennai just bought this!</span>
                                    </div>
                                    <p className="text-green-600 text-xs mt-1">+1,247 orders in last 24 hours</p>
                                </div>

                                {/* Enhanced Buy Now Section with extreme urgency */}
                                <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-xl p-6 text-white shadow-2xl border-4 border-green-300 relative overflow-hidden">
                                    {/* Animated Background Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                                    
                                    <div className="relative z-10">
                                        {/* Multiple Urgency Badges */}
                                        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 animate-bounce">
                                            SAVE ₹4,000
                                        </div>
                                        <div className="absolute -top-3 -left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold transform -rotate-12 animate-pulse">
                                            LIMITED TIME
                                        </div>

                                        <div className="text-center mb-4">
                                            <h3 className="text-2xl font-bold mb-2">🔥 LAST {stockCount} BOTTLES! 🔥</h3>
                                            <p className="text-green-100 text-sm">Price increases to ₹6,990 after sale ends!</p>
                                        </div>

                                        {/* Dramatic Price Display */}
                                        <div className="text-center mb-6">
                                            <div className="flex items-center justify-center space-x-3 mb-2">
                                                <span className="text-3xl font-bold line-through text-red-200">₹{originalPrice}</span>
                                                <span className="text-4xl font-black text-yellow-300">₹{productPrice}</span>
                                            </div>
                                            <div className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full inline-block text-lg font-bold animate-pulse">
                                                🎯 You Save ₹{originalPrice - productPrice}!
                                            </div>
                                        </div>

                                        {/* Quantity Selector */}
                                        <div className="flex items-center justify-center space-x-4 mb-6">
                                            <label className="text-white font-medium">Quantity:</label>
                                            <div className="flex items-center bg-white rounded-lg">
                                                <button 
                                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                    className="text-green-600 px-3 py-2 font-bold hover:bg-gray-100 rounded-l-lg"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    max={stockCount}
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(Math.min(stockCount, parseInt(e.target.value) || 1))}
                                                    className="w-16 text-center py-2 text-green-800 font-bold border-0 focus:outline-none"
                                                />
                                                <button 
                                                    onClick={() => setQuantity(Math.min(stockCount, quantity + 1))}
                                                    className="text-green-600 px-3 py-2 font-bold hover:bg-gray-100 rounded-r-lg"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Multiple CTA Buttons */}
                                        <button onClick={handleCheckout} className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-800 py-4 rounded-xl text-xl font-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group mb-3" >
                                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                                <span>🚀 CLAIM LAST {stockCount} BOTTLES NOW!</span>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                        </button>

                                        <div className="text-center text-yellow-200 text-sm font-bold animate-pulse">
                                            ⚠️ WARNING: Price returns to ₹6,990 in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                                        </div>

                                        {/* Enhanced Trust Badges */}
                                        <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                                            <div className="text-center">
                                                <div className="text-green-200">🚚</div>
                                                <div>FREE Shipping</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-green-200">💰</div>
                                                <div>COD Available</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-green-200">🛡️</div>
                                                <div>Secure Payment</div>
                                            </div>
                                        </div>

                                        {/* Social Proof */}
                                        <div className="mt-4 text-center">
                                            <div className="flex items-center justify-center space-x-1 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-300 text-lg">⭐</span>
                                                ))}
                                            </div>
                                            <p className="text-green-100 text-sm">🔥 Join 10,000+ satisfied customers!</p>
                                            <p className="text-yellow-200 text-xs mt-1 animate-pulse">💥 SELLING EVERY 3 MINUTES!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bonus Offers with urgency */}
                                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 relative">
                                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                                        TODAY ONLY
                                    </div>
                                    <h4 className="font-bold text-blue-800 mb-2">🎁 FLASH SALE BONUSES:</h4>
                                    <ul className="text-sm text-blue-700 space-y-1">
                                        <li>✅ FREE Recovery Guide (₹1,500 value)</li>
                                        <li>✅ FREE Expert Consultation (₹2,000 value)</li>
                                        <li>✅ Priority 24/7 Support</li>
                                        <li>✅ FREE Shipping (₹200 value)</li>
                                    </ul>
                                    <div className="mt-2 text-red-600 text-xs font-bold">
                                        ⏰ These bonuses expire with the timer above!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Desktop slider section */}
                    <div className="bg-white rounded-lg p-4 mt-6 overflow-hidden relative">
                        <div className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${selectedOffer * 100}%)`,
                                width: '400%'
                            }}>
                            { [
                                {
                                    title: "Available Offer",
                                    subtitle: "45 Days Course - Complete Pack",
                                    description: "5 bottles of 30ml each - designed for complete 45-day treatment course",
                                    color: "bg-white"
                                },                                  
                                {
                                    title: "Available offer",
                                    subtitle: "15 Days Return Policy",
                                    description: "Hassle-free returns within 15 days on unopened bottles",
                                    color: "bg-white"
                                },
                                {
                                    title: "Available Offer",
                                    subtitle: "Premium 5-Bottle Pack (30ml each)",
                                    description: "Best value treatment pack — five convenient 30ml bottles for complete recovery course.",
                                    color: "bg-white"
                                }                                  
                            ].map((offer, index) => (
                                <div key={index} className={`w-full flex-shrink-0 ${offer.color} p-4 rounded-lg border border-gray-200`}>
                                    <div className="pdp-coupon">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{offer.title}</h3>
                                        <h4 className="text-xl text-gray-900 mb-2">{offer.subtitle}</h4>
                                        <p className="text-gray-700">{offer.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile: Enhanced Buy Section with urgency */}
                <div className="md:hidden w-full">
                    <div className=' flex items-start gap-5 flex-col'>
                        {/* Mobile Dramatic Price Display */}
                        <div className='flex items-center gap-2 relative'>
                            <p className='line-through text-gray-400 text-3xl'>₹{originalPrice}</p>
                            <p className='text-xl font-bold text-red-600'>₹{productPrice}</p>
                            <div className="flex flex-col">
                                <span className='bg-red-500 text-white px-2 py-1 rounded-2xl text-xs animate-pulse'>FLASH SALE</span>
                                <span className='bg-green-500 text-white px-2 py-1 rounded-2xl text-xs mt-1'>SAVE ₹{originalPrice - productPrice}</span>
                            </div>
                        </div>
                        
                        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 w-full">
                            <div className="text-center">
                                <div className="text-red-600 font-bold text-sm mb-1">⚠️ LAST {stockCount} BOTTLES!</div>
                                <div className="text-xs text-gray-600">Price increases to ₹6,990 when timer ends</div>
                            </div>
                        </div>
                        
                        <p className='text-gray-500'>Incl. of all taxes</p>
                        <div>
                            <img src={stamps} alt="Stamps" className="" />
                        </div>
                        
                        {/* Mobile Enhanced Buy Section */}
                        <div className="w-full">
                            {/* Mobile Stock Alert */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                        <span className="text-red-800 font-bold text-sm">Only {stockCount} left!</span>
                                    </div>
                                    <div className="text-red-600 text-xs">
                                        {Math.floor((stockCount / 50) * 100)}% sold today
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${100 - (stockCount / 50) * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Enhanced Buy Button */}
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                                    URGENT
                                </div>
                                
                                <div className="text-center mb-4">
                                    <h3 className="text-lg font-bold mb-1">🔥 GRAB LAST {stockCount} BOTTLES! 🔥</h3>
                                    <div className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full inline-block text-xs font-bold">
                                        SAVE ₹{originalPrice - productPrice} TODAY!
                                    </div>
                                </div>

                                <div className="flex items-center justify-center space-x-3 mb-4">
                                    <label className="text-white font-medium text-sm">Qty:</label>
                                    <div className="flex items-center bg-white rounded-lg">
                                        <button 
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="text-green-600 px-2 py-1 font-bold"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            max={stockCount}
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.min(stockCount, parseInt(e.target.value) || 1))}
                                            className="w-12 text-center py-1 text-green-800 font-bold border-0 focus:outline-none"
                                        />
                                        <button 
                                            onClick={() => setQuantity(Math.min(stockCount, quantity + 1))}
                                            className="text-green-600 px-2 py-1 font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-800 py-4 rounded-xl text-lg font-black transform active:scale-95 transition-all duration-200 shadow-lg relative overflow-hidden group"
                                >
                                    <span className="relative z-10">🚀 SECURE LAST {stockCount} BOTTLES NOW!</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-active:opacity-30 transform translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-500"></div>
                                </button>

                                <div className="text-center mt-3 text-yellow-200 text-xs font-bold animate-pulse">
                                    ⚠️ Price jumps to ₹6,990 in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                                </div>

                                <div className="grid grid-cols-3 gap-2 mt-3 text-xs text-center">
                                    <div>🚚 FREE Ship</div>
                                    <div>💰 COD</div>
                                    <div>🛡️ Secure</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile slider section */}
                    <div className="bg-white rounded-lg p-4 mt-6 overflow-hidden relative">
                        <div className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${selectedOffer * 100}%)`,
                                width: '400%'
                            }}>
                            { [
                                {
                                    title: "Available offer",
                                    subtitle: "10% Off on Online Payment",
                                    description: "Extra discount on prepaid orders for 5-bottle pack",
                                    color: "bg-white"
                                },
                                {
                                    title: "Available offer",
                                    subtitle: "15 Days Return Policy",
                                    description: "Hassle-free returns within 15 days on unopened bottles",
                                    color: "bg-white"
                                },
                                {
                                    title: "Available offer",
                                    subtitle: "Complete 5-Bottle Treatment Pack",
                                    description: "Best value for complete recovery - 5 bottles of 30ml each",
                                    color: "bg-white"
                                }
                            ].map((offer, index) => (
                                <div key={index} className={`w-full flex-shrink-0 ${offer.color} p-4 rounded-lg border border-gray-200`}>
                                    <div className="pdp-coupon">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{offer.title}</h3>
                                        <h4 className="text-xl text-gray-900 mb-2">{offer.subtitle}</h4>
                                        <p className="text-gray-700">{offer.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Benefits Section */}
          

            {/* Key Ingredients Section */}
            <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-green-200 mb-6">
                            <span className="text-2xl mr-3">🌿</span>
                            <span className="text-green-700 font-semibold">Premium Natural Formula</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Ingredients</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Scientifically formulated with 19 powerful herbs and natural compounds, each precisely measured for maximum effectiveness in alcohol recovery support</p>
                    </div>
                    
                    {/* Featured Primary Ingredients */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        { [
                            { name: "Withania Somnifera", common: "Ashwagandha", quantity: "50 mg", benefit: "Stress Relief & Anxiety Control", description: "Clinically proven adaptogen that reduces withdrawal symptoms and promotes emotional stability", image: nine, featured: true },
                            { name: "Terminalia Chebula", common: "Haritaki", quantity: "200 mg", benefit: "Liver Detoxification", description: "Ancient liver cleanser that removes toxins and supports natural liver regeneration", image: three, featured: true },
                            { name: "Asphaltum", common: "Shilajit", quantity: "25 mg", benefit: "Energy & Vitality Restoration", description: "Powerful rejuvenator that restores energy depleted by alcohol use", image: eleven, featured: true },
                        ].map((ingredient, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-green-500 relative overflow-hidden group">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-blue-50 rounded-full transform translate-x-16 -translate-y-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                                
                                {/* Featured Badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    KEY INGREDIENT
                                </div>
                                
                                <div className="relative z-10">
                                    {/* Ingredient Image */}
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-4 border-white shadow-lg">
                                        <img 
                                            src={ingredient.image} 
                                            alt={ingredient.name}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/150x150/10b981/ffffff?text=' + encodeURIComponent(ingredient.common);
                                            }}
                                        />
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full inline-block mb-3">
                                            {ingredient.quantity}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{ingredient.common}</h3>
                                        <p className="text-sm text-gray-500 italic mb-3">{ingredient.name}</p>
                                        <p className="text-green-600 font-bold mb-3">{ingredient.benefit}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{ingredient.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Complete Ingredients List */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Formula Breakdown</h3>
                            <p className="text-gray-600">Every ingredient carefully selected and precisely measured for optimal results</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            { [
                                { name: "Malus", quantity: "200 mg", benefit: "Digestive Support", description: "Aids healthy digestion and detoxification", image: one },
                                { name: "Trachyspermum Ammi", common: "Ajwain", quantity: "200 mg", benefit: "Craving Control", description: "Helps reduce alcohol cravings naturally", image: two },
                                { name: "Capsicum", quantity: "200 mg", benefit: "Metabolism Boost", description: "Stimulates metabolism and energy production", image: four },
                                { name: "Zingiber Officinale", common: "Ginger", quantity: "200 mg", benefit: "Anti-Nausea", description: "Relieves nausea and soothes digestion", image: five },
                                { name: "Puerraria Tuberosa", quantity: "50 mg", benefit: "Hormonal Balance", description: "Supports endocrine system health", image: six },
                                { name: "Asparagus Adscendens", quantity: "25 mg", benefit: "Vitality Support", description: "Improves energy and reproductive health", image: seven },
                                { name: "Boerhavia Diffusa", quantity: "150 mg", benefit: "Liver Protection", description: "Protects and rejuvenates liver cells", image: eight },
                                { name: "Foeniculum Vulgare", common: "Fennel", quantity: "50 mg", benefit: "Digestive Calm", description: "Reduces bloating and aids digestion", image: ten },
                                { name: "Rauvolfia Serpentina", quantity: "25 mg", benefit: "Mood Stabilizer", description: "Helps control anxiety and nervousness", image: twelve },
                                { name: "Asparagus Racemosus", common: "Shatavari", quantity: "50 mg", benefit: "Hormonal Support", description: "Balances hormones and boosts immunity", image: thirteen },
                                { name: "Operculina Turpethum", quantity: "50 mg", benefit: "Gentle Detox", description: "Supports natural detoxification process", image: fourteen },
                                { name: "Terminalia Arjuna", quantity: "100 mg", benefit: "Heart Health", description: "Supports cardiovascular function", image: fifteen },
                                { name: "Picrorhiza Kurrooa", quantity: "25 mg", benefit: "Liver Tonic", description: "Improves liver function and detox", image: sixteen },
                                { name: "Syzygium Aromaticum", common: "Clove", quantity: "25 mg", benefit: "Antioxidant Power", description: "Protects cells and enhances immunity", image: seventeen },
                                { name: "Myristica Fragrans", common: "Nutmeg", quantity: "25 mg", benefit: "Mental Clarity", description: "Calms the mind and improves focus", image: eighteen },
                                { name: "Piper Longum", common: "Pippali", quantity: "25 mg", benefit: "Absorption Enhancer", description: "Boosts bioavailability of other herbs", image: nineteen },
                            ].map((ingredient, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 group">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                                            <img 
                                                src={ingredient.image} 
                                                alt={ingredient.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/50x50/10b981/ffffff?text=' + encodeURIComponent(ingredient.name.charAt(0));
                                                }}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-gray-800 text-sm truncate">{ingredient.common || ingredient.name}</h4>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0">
                                                    {ingredient.quantity}
                                                </span>
                                            </div>
                                            {ingredient.common && (
                                                <p className="text-xs text-gray-500 italic mb-1">{ingredient.name}</p>
                                            )}
                                            <p className="text-green-600 font-semibold text-xs mb-1">{ingredient.benefit}</p>
                                            <p className="text-gray-600 text-xs leading-relaxed">{ingredient.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Formula Summary Card */}
                    <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-8 text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-lg rotate-45"></div>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold mb-4">🌟 Complete Recovery Formula 🌟</h3>
                                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                                    Dr. Alcofree combines ancient Ayurvedic wisdom with modern scientific precision to create the most comprehensive natural alcohol recovery supplement available.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-4xl font-bold mb-2">19</div>
                                    <div className="text-sm opacity-90">Natural Ingredients</div>
                                </div>
                                <div className="text-center bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-4xl font-bold mb-2">150ml</div>
                                    <div className="text-sm opacity-90">Total Volume (5×30ml)</div>
                                </div>
                                <div className="text-center bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-4xl font-bold mb-2">0%</div>
                                    <div className="text-sm opacity-90">Harmful Chemicals</div>
                                </div>
                                <div className="text-center bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-4xl font-bold mb-2">100%</div>
                                    <div className="text-sm opacity-90">Natural & Safe</div>
                                </div>
                            </div>
                            
                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🧠</div>
                                    <h4 className="font-bold mb-1">Mental Clarity</h4>
                                    <p className="text-sm opacity-90">Reduces brain fog and improves focus</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🫀</div>
                                    <h4 className="font-bold mb-1">Liver Support</h4>
                                    <p className="text-sm opacity-90">Detoxifies and regenerates liver health</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">😌</div>
                                    <h4 className="font-bold mb-1">Stress Relief</h4>
                                    <p className="text-sm opacity-90">Calms anxiety and withdrawal symptoms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Recovery Journey?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have found freedom from alcohol cravings with our complete 5-bottle treatment pack</p>
                    <button
                        onClick={handleCheckout}
                        className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
                    >
                        Order Now
                    </button>
                    <div className="flex items-center justify-center mt-6 gap-8 text-blue-100">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>15 Days Return</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>100% Natural</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;


            // {/* How to Use Section */}
            // <div className="py-16">
            //     <div className="container mx-auto px-4">
            //         <div className="text-center mb-12">
            //             <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Use</h2>
            //             <p className="text-xl text-gray-600">Simple steps for maximum effectiveness</p>
            //         </div>
                    
            //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            //             { [
            //                 {
            //                     step: "2",
            //                     title: "Apply Oil",
            //                     description: "Take 3-4 drops and apply to the painful area",
            //                     image: "https://via.placeholder.com/500x500/10b981/ffffff?text=Repeat+Daily"
            //                 },
            //                 {
            //                     step: "3",
            //                     title: "Massage Gently",
            //                     description: "Massage in circular motions for 5-10 minutes",
            //                     image: "https://via.placeholder.com/500x500/10b981/ffffff?text=Repeat+Daily"
            //                 },
            //                 {
            //                     step: "4",
            //                     title: "Repeat Daily",
            //                     description: "Use 2-3 times daily for best results",
            //                     image: "https://via.placeholder.com/500x500/10b981/ffffff?text=Repeat+Daily"
            //                 }
            //             ].map((step, index) => (
            //                 <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            //                     {/* Step Image */}
            //                     <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-gray-100">
            //                         <img 
            //                             src={step.image} 
            //                             alt={step.title}
            //                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            //                             style={{ width: '500px', height: '500px', objectFit: 'cover' }}
            //                             onError={(e) => {
            //                                 e.target.src = 'https://via.placeholder.com/500x500/3b82f6/ffffff?text=Step+' + step.step;
            //                             }}
            //                         />
            //                     </div>
                                
            //                     <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            //                         {step.step}
            //                     </div>
            //                     <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
            //                     <p className="text-gray-600">{step.description}</p>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>
            // </div>
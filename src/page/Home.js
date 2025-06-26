import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../assets/imagess/banner1.webp';  // Update path as needed
import banner2 from '../assets/imagess/banner1.webp';  // Update path as needed
import banner1Mobile from '../assets/imagess/banner1.webp';  // Add mobile images
import banner2Mobile from '../assets/imagess/banner2.webp';  // Add mobile images
import product from '../assets/imagess/7.webp';
import FAQ from '../components/FAQ';
import one from '../assets/t_one.webp';
import two from '../assets/t_two.webp';
import three from '../assets/t_three.webp';
import four from '../assets/t_four.webp';


const logoCarouselStyles = `
    @keyframes scrollx {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-100% / 4)); /* Adjust based on number of logos */
    }
    }

    .logo-carousel {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
    background: linear-gradient(90deg, white 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 95%, white 100%);
    }

    .animate-scrollx {
    animation: scrollx 20s linear infinite;
    width: fit-content;
    }

    /* Make sure there's enough content for seamless looping */
    .animate-scrollx:hover {
    animation-play-state: paused;
    }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = logoCarouselStyles;
  document.head.appendChild(styleElement);
}

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const timerRef = useRef(null);

    const desktopImages = [
        { url: banner1, alt: "Dr. Joints Pain Relief oil." },
        { url: banner2, alt: "Dr. Joints Muscles Pain Relief oils." }
    ];
    
    const mobileImages = [
        { url: banner1Mobile, alt: "Dr. Joints Pain Relief oil - mobile view." },
        { url: banner2Mobile, alt: "Dr. Joints Muscles Pain Relief oils - mobile view." }
    ];
    
    const images = isMobile ? mobileImages : desktopImages;
    
    useEffect(() => {
        // Auto slide functionality
        timerRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);
        
        // Handle screen resize
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            clearInterval(timerRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [images.length, isMobile]);

    return (
        <div className="w-full">
            <div className="relative w-full h-auto overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-full transition-opacity duration-1000 ease-in-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProductSection = () => {
    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 mb-10">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-4">Dr. Alcofree Herbal Support</h2>
            <p className="text-center text-gray-600 mb-12">Your Natural Companion for an Alcohol-Free Life</p>

            <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center mx-auto">
                    <div>
                        <img src={one} alt="Customer Trusted Brand 1" className="max-w-full h-auto" />
                    </div>
                    <div>
                        <img src={two} alt="Customer Trusted Brand 2" className="max-w-full h-auto" />
                    </div>
                    <div>
                        <img src={three} alt="Customer Trusted Brand 3" className="max-w-full h-auto" />
                    </div>
                    <div>
                        <img src={four} alt="Customer Trusted Brand 4" className="w-[8.5rem] h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};


const Product = ({ currentLang, translations }) => {
    const productRef = useRef(null);

    return (
        <div ref={productRef} className="min-h-screen relative">
            {/* Rest of the Product section */}
            <div className="p-8">
                <div className="text-center mb-8">
                    <h1 className="text-blue-900 text-4xl font-bold mb-4">{translations[currentLang].product.title}</h1>
                    <h2 className="text-amber-800 text-2xl font-semibold">{translations[currentLang].product.subtitle}</h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <img
                            src={product}
                            alt="Dr. Joints Pain Relief Oil Product"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="space-y-6 pr-4">
                        <h1 className="text-gray-800 font-bold text-2xl">{translations[currentLang].product.title2}</h1>
                        <p className="text-gray-800 leading-relaxed">{translations[currentLang].product.content1}</p>
                        <p className="text-gray-800 leading-relaxed">{translations[currentLang].product.content2}</p>
                        <p className="text-gray-800 leading-relaxed">{translations[currentLang].product.content3}</p>
                        <button className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                            <a href="/product">Buy Now</a>
                        </button>
                    </div>
                </div>
            </div>
            {/* Featured Media Coverage Slider */}
            {/* <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-8 mb-8">


                <div className="text-center mb-6">
                    <div className="flex justify-center items-center space-x-4 mb-4 overflow-hidden">
                        <div className="flex space-x-6 animate-pulse">
                            {[pr1, pr2, pr3, pr4, pr5].map((logo, index) => (
                                <div key={index} className=" flex items-center justify-center">
                                    <img 
                                        src={logo} 
                                        alt={`Media ${index + 1}`}
                                        className="w-6 h-6 md:w-24 md:h-24 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative">
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                🔥 TRENDING NOW 
                            </span>
                            <span className="block text-2xl md:text-3xl mt-2">
                                Media Spotlight
                            </span>
                        </h3>
                        
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse"></div>
                    </div>
                    
                    <p className="text-blue-100 mt-4 text-lg">
                        🌟 Dr. Joints making headlines across India's top news platforms
                    </p>
                    
                    <div className="flex justify-center items-center mt-3">
                        <div className="flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm animate-bounce">
                            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                            <span className="font-medium">LIVE COVERAGE</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div 
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateX(-${currentMediaSlide * 100}%)` }}
                    >
                        {mediaLinks.map((item, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-4">
                                <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border border-gray-100 
                                                  transform hover:scale-105 transition-all duration-300 
                                                  hover:shadow-2xl shadow-xl relative overflow-hidden">
                                        
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 
                                                      text-white px-3 py-1 rounded-full text-xs font-bold 
                                                      animate-pulse shadow-lg">
                                            🔥 TRENDING
                                        </div>
                                        
                                        <div className="text-center">
                                            <div className="flex justify-center mb-6">
                                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full 
                                                              bg-gradient-to-br from-blue-50 to-purple-50 
                                                              flex items-center justify-center shadow-lg
                                                              group-hover:shadow-xl transition-all duration-300
                                                              border-4 border-white">
                                                    <img 
                                                        src={item.icon} 
                                                        alt={item.source}
                                                        className="w-24 h-24 md:w-32 md:h-32 object-contain
                                                                 group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                                <span className="font-semibold text-blue-600">Dr. Joints Pain Relief Oil</span> 
                                                <br />
                                                
                                            </p>
                                            

                                            <div className="flex items-center justify-center space-x-4">
                                                <span className="text-blue-600 font-medium flex items-center
                                                               group-hover:text-blue-800 transition-colors
                                                               bg-blue-50 px-4 py-2 rounded-full">
                                                    Read Full Story
                                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                              d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="mt-4 flex justify-center">
                                                <div className="flex items-center space-x-2 text-red-600 text-sm font-medium">
                                                    <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                                                    <span>Breaking: National Coverage</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6 space-x-3">
                    {mediaLinks.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                                index === currentMediaSlide 
                                    ? 'bg-yellow-300 scale-125 shadow-lg' 
                                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                            }`}
                            onClick={() => setCurrentMediaSlide(index)}
                        />
                    ))}
                </div>
            </div> */}

            {/* <div>
                <img src={one_two} alt="One" className="w-full mt-10 h-auto object-cover" />
            </div> */}
        </div>
    );
};

const Testimonials = ({ currentLang, translations }) => {
    const testimonials = translations[currentLang]?.testimonials?.testimonial || [];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered && testimonials.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => {
                    const nextSlide = prevSlide + 1;
                    if (nextSlide >= testimonials.length) {
                        return 0;
                    }
                    return nextSlide;
                });
            }, 4000); // Change slide every 4 seconds
            
            return () => clearInterval(interval);
        }
    }, [testimonials.length, isHovered]);

    // Helper function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        );
    };

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <div className="bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50 py-20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500">
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </svg>
                </div>
                <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
                        <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-green-200 mb-6">
                        <span className="text-2xl mr-3">🌱</span>
                        <span className="text-green-700 font-semibold">Real Journeys, Real Transformation</span>
                    </div>

                    <h2 className="text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-green-700 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                            Sobriety Success Stories
                        </span>
                    </h2>

                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Explore how people from all walks of life have embraced a healthier, alcohol-free lifestyle with natural support from Dr. Alcofree.
                        <br />
                        <span className="text-green-700 font-semibold">Start your journey to clarity, balance, and freedom today.</span>
                    </p>
                </div>

                {/* Testimonials Grid - Show 3 at a time */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {testimonials.slice(currentSlide, currentSlide + 3).concat(
                        currentSlide + 3 > testimonials.length 
                            ? testimonials.slice(0, (currentSlide + 3) - testimonials.length)
                            : []
                    ).map((testimonial, index) => (
                        <div key={`${currentSlide}-${index}`} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 border border-gray-100 relative overflow-hidden group">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-blue-50 rounded-full transform translate-x-16 -translate-y-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Quote Icon and Rating */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                    </div>
                                    
                                    {/* Star Rating */}
                                    <div className="flex items-center space-x-1">
                                        {renderStars(testimonial.rating || 5)}
                                    </div>
                                </div>
                                
                                {/* Review Text */}
                                <p className="text-gray-700 text-base leading-relaxed mb-8 italic font-medium">
                                    "{testimonial.text}"
                                </p>
                                
                                {/* Customer Info */}
                                <div className="border-t border-gray-100 pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 font-medium">{testimonial.location}</p>
                                        </div>
                                        
                                        {/* Customer Initial Avatar */}
                                        <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-xl">
                                                {testimonial.name ? testimonial.name.charAt(0).toUpperCase() : "T"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Verification Badge */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-sm">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center space-x-6">
                    {/* Previous Button */}
                    <button 
                        onClick={goToPrevSlide}
                        className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    
                    {/* Slide Indicators */}
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-green-500 scale-125' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button 
                        onClick={goToNextSlide}
                        className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const AmazonSection = () => {
    return (
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Also Available on <span className="text-orange-600">Amazon</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Shop Dr. Alcofree from your preferred platform. Same authentic product, multiple trusted channels.
                    </p>
                </div>

                {/* Amazon Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Amazon Logo Side */}
                            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-12 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                                <div className="relative z-10 text-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                                        <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8H14.5l1.76-5.24c.15-.45-.24-.81-.69-.81-.23 0-.45.09-.61.24z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Amazon</h3>
                                    <p className="text-orange-100 text-lg">Trusted Marketplace</p>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Amazon?</h4>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Amazon Prime eligible - Fast delivery</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Secure payment & buyer protection</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Easy returns & customer support</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Same authentic Dr. Alcofree product</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a 
                                        href="https://www.amazon.in/Dr-Alcofree-Natural-Alcohol-Recovery/dp/B0B28KXNL7" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Shop on Amazon
                                    </a>
                                    <a 
                                        href="/product"
                                        className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300"
                                    >
                                        Shop Direct
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UrgencySection = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
    const [stockCount, setStockCount] = useState(47);

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

    // Simulate stock decrease
    useEffect(() => {
        const stockTimer = setInterval(() => {
            setStockCount(prev => {
                if (prev > 15) {
                    return Math.max(15, prev - Math.floor(Math.random() * 3));
                }
                return prev;
            });
        }, 30000); // Decrease stock every 30 seconds

        return () => clearInterval(stockTimer);
    }, []);

    return (
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-16 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 to-orange-500/20 animate-pulse"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Flash Sale Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6 animate-pulse">
                        <span className="text-2xl mr-3">⚡</span>
                        <span className="text-red-600 font-bold text-lg">FLASH SALE ENDING SOON</span>
                    </div>
                    
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Limited Time Offer!
                    </h2>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        Don't miss your chance to start your alcohol-free journey at the lowest price ever!
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Sale Ends In:</h3>
                        <p className="text-red-200">Hurry! This exclusive discount won't last long</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                        <div className="bg-white rounded-lg p-4 text-center shadow-lg">
                            <div className="text-3xl font-bold text-red-600">{String(timeLeft.hours).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-600 font-medium">HOURS</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center shadow-lg">
                            <div className="text-3xl font-bold text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-600 font-medium">MINUTES</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center shadow-lg animate-pulse">
                            <div className="text-3xl font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-600 font-medium">SECONDS</div>
                        </div>
                    </div>
                </div>

                {/* Offer Details */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Offer Details */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl text-white font-bold">Special Price:</span>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-yellow-300">₹3,990</div>
                                    <div className="text-lg text-red-200 line-through">₹6,990</div>
                                </div>
                            </div>
                            
                            <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center font-bold mb-4">
                                Save ₹4,000 (57% OFF)
                            </div>
                        </div>

                        {/* Stock Alert */}
                        <div className="bg-red-700/50 border border-red-400 rounded-lg p-4 mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-semibold">🔥 Only {stockCount} left in stock!</span>
                                <span className="text-red-200 text-sm animate-pulse">High Demand</span>
                            </div>
                            <div className="w-full bg-red-900 rounded-full h-2">
                                <div 
                                    className="bg-gradient-to-r from-yellow-400 to-red-400 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${(stockCount / 100) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-red-200 text-xs mt-1">Stock selling fast!</p>
                        </div>

                        {/* Bonus Offers */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3 text-white">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>FREE shipping (worth ₹200)</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>30-day money-back guarantee</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Bonus wellness guide (worth ₹1,500)</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a href="/product" className="block">
                            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse">
                                🚀 CLAIM YOUR DISCOUNT NOW
                            </button>
                        </a>
                    </div>

                    {/* Right Side - Social Proof */}
                    <div className="space-y-6">
                        {/* Recent Purchases */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="text-xl font-bold text-white mb-4">🔥 Recent Purchases</h4>
                            <div className="space-y-3">
                                {/*
                                    { name: "Rajesh K.", location: "Mumbai", time: "2 minutes ago" },
                                    { name: "Priya S.", location: "Delhi", time: "5 minutes ago" },
                                    { name: "Amit P.", location: "Bangalore", time: "8 minutes ago" },
                                    { name: "Sneha M.", location: "Pune", time: "12 minutes ago" }
                                */}
                                { [
                                    { name: "Rajesh K.", location: "Chennai", time: "2 minutes ago" },
                                    { name: "Priya S.", location: "Bangalore", time: "5 minutes ago" },
                                    { name: "Arjun M.", location: "Hyderabad", time: "8 minutes ago" },
                                    { name: "Kavitha R.", location: "Kochi", time: "12 minutes ago" }
                                ].map((purchase, index) => (
                                    <div key={index} className="flex items-center justify-between text-white border-b border-white/20 pb-2">
                                        <div>
                                            <span className="font-medium">{purchase.name}</span>
                                            <span className="text-red-200 text-sm ml-2">{purchase.location}</span>
                                        </div>
                                        <span className="text-green-300 text-xs">{purchase.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Customer Count */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                            <div className="text-4xl font-bold text-yellow-300 mb-2">10,000+</div>
                            <div className="text-white font-medium">Satisfied Customers</div>
                            <div className="text-red-200 text-sm">Join them today!</div>
                        </div>

                        {/* Risk-Free Guarantee */}
                        <div className="bg-green-600/20 border border-green-400 rounded-xl p-6">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🛡️</div>
                                <h4 className="text-xl font-bold text-white mb-2">100% Risk-Free</h4>
                                <p className="text-green-200 text-sm">Not satisfied? Get your money back within 30 days. No questions asked!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Warning */}
                <div className="text-center mt-8">
                    <div className="bg-red-700/50 border border-red-400 rounded-lg p-4 max-w-2xl mx-auto">
                        <p className="text-white font-bold text-lg">⚠️ WARNING: Price will return to ₹6,990 after this sale!</p>
                        <p className="text-red-200 text-sm">This is your last chance to get Dr. Alcofree at this special price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};






const Home = ({ currentLang, translations }) => {
    return (
            <div>
                <div className='overflow-x-hidden'>
                    <Hero currentLang={currentLang} />
                    <Product currentLang={currentLang} translations={translations} />
                    <ProductSection currentLang={currentLang} />
                    <UrgencySection />
                    <AmazonSection />
                    <FAQ currentLang={currentLang} translations={translations} />
                    <Testimonials currentLang={currentLang} translations={translations} />
                </div>
            </div>
        );
    };

export default Home;





//
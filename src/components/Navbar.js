import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/imagess/logo.webp';
import icons_one from '../assets/imagess/icon1.webp';
import icons_two from '../assets/imagess/icon2.webp';
import icons_three from '../assets/imagess/icon4.webp';
import icons_four from '../assets/imagess/icon3.webp';

const Navbar = ({ currentLang, setCurrentLang, translations, languages }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Set isLoaded to true after component mounts to trigger animations
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    console.log('Current Language:', currentLang);
    console.log('Translations:', translations);

    const nav = translations[currentLang]?.nav;

    console.log('Nav:', nav);

    if (!nav) {
        return null; // or some fallback UI
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isLangMenuOpen) setIsLangMenuOpen(false);
    };

    const toggleLangMenu = () => {
        setIsLangMenuOpen(!isLangMenuOpen);
    };

    const handleLangSelect = (langCode) => {
        setCurrentLang(langCode);
        setIsLangMenuOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white relative overflow-hidden">
            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes popIn {
                    0% { transform: scale(0.8); opacity: 0; }
                    70% { transform: scale(1.1); }
                    100% { transform: scale(1); opacity: 1; }
                }
                .pop-in {
                    animation: popIn 0.5s ease forwards;
                }
                
                /* Continuous animations */
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                .pulse {
                    animation: pulse 2s ease-in-out infinite;
                }
                
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }
                .bounce {
                    animation: bounce 2s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }
                .shimmer-bg {
                    background: linear-gradient(
                        90deg,
                        rgba(255,255,255,0) 0%,
                        rgba(255,255,255,0.8) 50%,
                        rgba(255,255,255,0) 100%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 8s infinite linear;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                }
                
                @keyframes borderGlow {
                    0% { box-shadow: 0 0 5px rgba(66, 153, 225, 0.1); }
                    50% { box-shadow: 0 0 15px rgba(66, 153, 225, 0.3); }
                    100% { box-shadow: 0 0 5px rgba(66, 153, 225, 0.1); }
                }
                .border-glow {
                    animation: borderGlow 3s infinite;
                }
                
                @keyframes colorCycle {
                    0% { color: #2b6cb0; }
                    25% { color: #4299e1; }
                    50% { color: #3182ce; }
                    75% { color: #2c5282; }
                    100% { color: #2b6cb0; }
                }
                .color-cycle {
                    animation: colorCycle 8s infinite;
                }

                /* Staggered animations */
                .staggered-item:nth-child(1) { animation-delay: 0.1s; }
                .staggered-item:nth-child(2) { animation-delay: 0.2s; }
                .staggered-item:nth-child(3) { animation-delay: 0.3s; }
                .staggered-item:nth-child(4) { animation-delay: 0.4s; }
                .staggered-item:nth-child(5) { animation-delay: 0.5s; }

                @keyframes slideDown {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .slide-down {
                    animation: slideDown 0.3s ease forwards;
                }
            `}</style>

            {/* Shimmer background effect */}
            <div className="shimmer-bg"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo with pulse animation */}
                    <div className={`flex-shrink-0 ${isLoaded ? 'pop-in pulse' : 'opacity-0'}`}>
                        <a href={nav.homelink || "#"}>
                            <img src={logo} alt="Dr. Joints Logo" className="h-8 sm:h-12 md:h-16" />
                        </a>
                    </div>

                    {/* Desktop Navigation with bounce animations */}
                    <div className="hidden md:flex items-center px-2">
                        <a href={nav.homelink || "#"}
                            className={`text-gray-700 hover:text-blue-600 flex justify-center px-3 py-2 hover:scale-110 transition-transform bounce ${isLoaded ? 'pop-in staggered-item' : 'opacity-0'}`}>
                            {/* <img src={icons_one} alt="Home Icon" className="inline-block h-6 w-6 mr-1" /> */}
                            <span className="color-cycle">{nav.home}</span>
                        </a>
                        <a href={nav.aboutUslink || "#"}
                            className={`text-gray-700 hover:text-blue-600 flex justify-center px-3 py-2 hover:scale-110 transition-transform bounce ${isLoaded ? 'pop-in staggered-item' : 'opacity-0'}`}
                            style={{animationDelay: '0.5s'}}>
                            <img src={icons_two} alt="About Us Icon" className="inline-block h-6 w-6 mr-1" />
                            {nav.aboutUs}
                        </a>
                        <a href={nav.productlink || "#"}
                            className={`text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-110 transition-transform bounce ${isLoaded ? 'pop-in staggered-item' : 'opacity-0'}`}
                            style={{animationDelay: '1s'}}>
                            <img src={icons_three} alt="Product Icon" className="inline-block h-6 w-6 mr-1" />
                            {nav.product}
                        </a>
                        <a href={nav.contactUslink || "#"}
                            className={`text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-110 transition-transform bounce ${isLoaded ? 'pop-in staggered-item' : 'opacity-0'}`}
                            style={{animationDelay: '1.5s'}}>
                            <img src={icons_four} alt="Contact Us Icon" className="inline-block h-6 w-6 mr-1" />
                            {nav.contactUs}
                        </a>
                        {/* <a href={nav.bloglink || "#"}
                            className={`text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-110 transition-transform bounce ${isLoaded ? 'pop-in staggered-item' : 'opacity-0'}`}
                            style={{animationDelay: '2s'}}>
                            <Globe className="inline-block h-6 w-6 mr-1" />
                            {nav.blog}
                        </a> */}
                    </div>

                    {/* Mobile Menu Button with pulse animation */}
                    <div className={`md:hidden flex items-center ${isLoaded ? 'pop-in pulse' : 'opacity-0'}`}>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 p-2 transition-transform active:scale-90 hover:scale-110 color-cycle"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <>
                    <div className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40" onClick={toggleMenu}></div>
                    <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-50 pop-in slide-down border-glow">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <a href={nav.homelink || "#"}
                                className="block text-gray-700 hover:text-blue-600 px-3 py-3 hover:scale-105 transition-transform pop-in staggered-item bounce">
                                {nav.home}
                            </a>
                            <a href={nav.aboutUslink || "#"}
                                className="block text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-105 transition-transform pop-in staggered-item bounce"
                                style={{animationDelay: '0.3s'}}>
                                {nav.aboutUs}
                            </a>
                            <a href={nav.productlink || "#"}
                                className="block text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-105 transition-transform pop-in staggered-item bounce"
                                style={{animationDelay: '0.6s'}}>
                                {nav.product}
                            </a>
                            <a href={nav.contactUslink || "#"}
                                className="block text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-105 transition-transform pop-in staggered-item bounce"
                                style={{animationDelay: '0.9s'}}>
                                {nav.contactUs}
                            </a>
                            {/* <a href={nav.bloglink || "#"}
                                className="block text-gray-700 hover:text-blue-600 px-3 py-2 hover:scale-105 transition-transform pop-in staggered-item bounce"
                                style={{animationDelay: '1.2s'}}>
                                {nav.blog}
                            </a> */}
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
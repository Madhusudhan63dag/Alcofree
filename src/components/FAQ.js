import React, { useState } from 'react';
import ten from '../assets/imagess/2.webp';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <button
                className="w-full p-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-gray-900">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-50">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ translations }) => {
    const faqData = translations.en.faq.faqData;

    return (
        <div className='w-full py-12 px-4 sm:px-8'>
            <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">FAQ's</h1>
            
            <div className='flex flex-col md:flex-row gap-8 items-center'>
                {/* FAQ Questions Section - Takes full width on mobile, half on desktop */}
                <div className="w-full md:w-1/2">
                    <div className="space-y-4 max-w-xl mx-auto">
                        {faqData.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
                {/* Image Section - Takes full width on mobile, half on desktop */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={ten} 
                        alt="FAQ Background" 
                        className="max-w-full h-auto object-contain rounded-lg shadow-lg" 
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
import React from 'react'
import one from '../assets/images/one.webp'
import two from '../assets/images/two.webp'  
import three from '../assets/images/three.webp'
import four from '../assets/images/four.webp'
import pain from '../assets/icons/pain.webp'


const Secondsection = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Common Types of Pain We Help Relieve
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Large Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
              <img 
                src={one} 
                alt="Joint Pain Relief" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Neck Pain</h3>
                  <p className="text-lg">Stiff neck, cervical pain, or tension headaches? Our products help ease muscle tightness and improve flexibility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {/* Back Pain */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative group">
                <img 
                  src={two} 
                  alt="Back Pain Relief" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">Back Pain</h3>
                    <p className="text-sm">Lower back pain and spinal stiffness relief with natural solutions</p>
                  </div>
                </div>
              </div>

              {/* Body Pains */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative group">
                <img 
                  src={three} 
                  alt="Body Pain Relief" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">Body Pains</h3>
                    <p className="text-sm">Natural relief for fatigue and body aches</p>
                  </div>
                </div>
              </div>

              {/* Muscle & Joint Pain */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative group">
                <img 
                  src={four} 
                  alt="Muscle Joint Pain Relief" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">Muscle & Joint Pain</h3>
                    <p className="text-sm">Targeted solutions for inflammation and joint health</p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <a href="/product">
                  <div className="text-center">
                    <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full 
                    hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 
                    shadow-md hover:shadow-lg active:scale-95">
                      Order Now
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-blue-800 mb-4">SYMPTOMS</h2>
                </div>
                <img src={pain} alt="Pain Relief" className="w-full h-auto" />
            </div>

      
    </div>
  )
}

export default Secondsection
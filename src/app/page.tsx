'use client'

import { PhoneIcon } from '@heroicons/react/24/outline'

export default function HomePage() {

  const handleCallHotline = () => {
    window.location.href = '/login'
  }

  return (
    <>
      {/* Hero Section - Professional medical background */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/assets/images/fields.jpeg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
              filter: 'brightness(1.1) contrast(1.1) saturate(1.1)'
            } as React.CSSProperties}
          />
          {/* Gradient overlay to blend and fill edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-green-900/20"></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:mt-0 py-4 sm:py-14 lg:py-20">
          <div className="text-center animate-fade-in-up flex flex-col justify-start sm:justify-center h-full">
            {/* Professional glass background container */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-14 mx-auto max-w-6xl sm:max-w-5xl shadow-2xl border border-white/20">
              <h1 className="font-gothic-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 sm:mb-7 text-white leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.6)' } as React.CSSProperties}>
                Medicare Part D
                <span className="block text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.6)' } as React.CSSProperties}>Prescription Drug Plans</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-7 sm:mb-10 lg:mb-12 max-w-4xl mx-auto text-white leading-relaxed px-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' } as React.CSSProperties}>
                Find affordable Medicare Part D prescription drug coverage and pricing. 
                Licensed Medicare brokers help you compare prescription drug costs.
              </p>
        
              {/* Call to Action - Mobile Optimized */}
              <div className="flex flex-col gap-5 sm:gap-7 justify-center items-center px-4">
                <button
                  onClick={() => window.location.href = '/download-app'}
                  className="bg-white text-black px-6 sm:px-9 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-50 flex items-center justify-center space-x-2 sm:space-x-3 shadow-clean-lg w-full sm:w-auto max-w-sm transition-all duration-300 hover:scale-105"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' } as React.CSSProperties}
                >
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>Download App</span>
                </button>
                <button
                  onClick={() => window.location.href = '/learn-more'}
                  className="bg-primary-green text-white px-6 sm:px-9 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary-lightGreen flex items-center justify-center space-x-2 sm:space-x-3 shadow-clean-lg w-full sm:w-auto max-w-sm transition-all duration-300 hover:scale-105"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' } as React.CSSProperties}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

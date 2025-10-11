'use client'

// No icon imports needed for platform logos

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
              backgroundImage: `url("/assets/images/map.jpeg")`,
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
                  className="bg-white text-black px-6 sm:px-9 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-50 flex items-center justify-center space-x-2 sm:space-x-3 shadow-clean-lg w-full sm:w-auto max-w-sm transition-all duration-300 hover:scale-105 min-w-[200px]"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' } as React.CSSProperties}
                >
                  <div className="flex items-center space-x-1">
                    {/* Apple Logo */}
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    {/* Android Logo */}
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.6808 12 7.6808s-3.5902.5631-5.1367 1.7359L4.841 5.9137a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
                    </svg>
                  </div>
                  <span>Download App</span>
                </button>
                <button
                  onClick={() => window.location.href = '/learn-more'}
                  className="bg-primary-green text-white px-6 sm:px-9 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary-lightGreen flex items-center justify-center space-x-2 sm:space-x-3 shadow-clean-lg w-full sm:w-auto max-w-sm transition-all duration-300 hover:scale-105 min-w-[200px]"
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

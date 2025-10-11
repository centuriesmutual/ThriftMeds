'use client'

import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function LearnMorePage() {
  const handleCallHotline = () => {
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Features Section - Full Page Stacked */}
      <section className="bg-white">
        {/* Affordable Pricing Section */}
        <div 
          className="min-h-screen flex items-center relative"
          style={{
            backgroundImage: `url("/assets/images/fairy1.png")`,
            backgroundSize: '50% auto',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          } as React.CSSProperties}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left bg-white/75 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-white/20">
                       <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-primary-black">
                         Medicare Part D Drug Plans
                       </h3>
                       <p className="text-primary-gray leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
                         Compare Medicare Part D prescription drug plans and find affordable coverage for your medications. 
                         Our licensed Medicare brokers help you navigate the coverage gap, deductibles, and copay structures 
                         to maximize your prescription drug benefits. We work with CMS-approved Medicare Advantage and Part D 
                         plans to ensure you get the best possible coverage while minimizing out-of-pocket costs.
                       </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-clean-lg">
                <div className="text-center">
                  <h4 className="font-heading font-semibold text-2xl mb-6 text-primary-black">Medicare Part D Coverage</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Lipitor 20mg - Tier 2</span>
                      <span className="text-primary-green font-bold">$25 copay</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Metformin 500mg - Tier 1</span>
                      <span className="text-primary-green font-bold">$5 copay</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Insulin - Tier 3</span>
                      <span className="text-primary-green font-bold">$47 copay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instant Information Section */}
        <div 
          className="min-h-screen flex items-center relative"
          style={{
            backgroundImage: `url("/assets/images/fairy2.png")`,
            backgroundSize: '50% auto',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          } as React.CSSProperties}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-clean-lg order-2 lg:order-1">
                <div className="text-center">
                  <h4 className="font-heading font-semibold text-2xl mb-6 text-primary-black">Available Hours</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-primary-green font-bold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                      <span className="font-medium">Saturday - Sunday</span>
                      <span className="text-primary-green font-bold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        onClick={handleCallHotline}
                        className="btn-primary text-lg px-8 py-4 shadow-clean"
                      >
                        Call (800) 631-MEDS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left order-1 lg:order-2 bg-white/75 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-white/20">
                       <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-primary-black">
                         Medicare Enrollment Support
                       </h3>
                       <p className="text-primary-gray leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
                         Get instant Medicare Part D enrollment assistance from licensed insurance brokers. 
                         Our Medicare specialists help you understand plan formularies, coverage gaps, and 
                         catastrophic coverage thresholds. We provide real-time quotes for Medicare Advantage 
                         and Part D plans, helping you make informed decisions during open enrollment periods. 
                         Our CMS-approved brokers are available 7 days a week to guide you through Medicare eligibility and plan selection.
                       </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted & Reliable Section */}
        <div 
          className="min-h-screen flex items-center relative"
          style={{
            backgroundImage: `url("/assets/images/fairy3.png")`,
            backgroundSize: '50% auto',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          } as React.CSSProperties}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left bg-white/75 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-white/20">
                       <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-primary-black">
                         CMS Approved Medicare Plans
                       </h3>
                       <p className="text-primary-gray leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
                         We are CMS approved and work exclusively with licensed Medicare Advantage and Part D plan providers 
                         to ensure compliance with federal healthcare regulations. Our Medicare brokers are certified and 
                         trained to help you navigate the complex world of prescription drug coverage, formularies, and 
                         Medicare eligibility requirements. Every plan we offer meets CMS standards for Medicare beneficiaries, 
                         ensuring you receive reliable, government-approved prescription drug coverage.
                       </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-clean-lg">
                <div className="text-center">
                  <h4 className="font-heading font-semibold text-2xl mb-6 text-primary-black">Medicare Certifications</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">CMS Approved Plans</span>
                      <span className="text-primary-green font-bold">✓ Verified</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Licensed Medicare Brokers</span>
                      <span className="text-primary-green font-bold">✓ Certified</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Medicare Part D Network</span>
                      <span className="text-primary-green font-bold">✓ Licensed</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">HIPAA Compliant</span>
                      <span className="text-primary-green font-bold">✓ Protected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
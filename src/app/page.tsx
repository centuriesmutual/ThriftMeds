'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, PhoneIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Medication {
  id: string
  name: string
  genericName?: string
  category: string
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Medication[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock medication database
  const mockMedications: Medication[] = [
    { id: '1', name: 'Lipitor', genericName: 'Atorvastatin', category: 'Cholesterol' },
    { id: '2', name: 'Metformin', category: 'Diabetes' },
    { id: '3', name: 'Lisinopril', category: 'Blood Pressure' },
    { id: '4', name: 'Amlodipine', category: 'Blood Pressure' },
    { id: '5', name: 'Omeprazole', category: 'Acid Reflux' },
    { id: '6', name: 'Simvastatin', category: 'Cholesterol' },
    { id: '7', name: 'Losartan', category: 'Blood Pressure' },
    { id: '8', name: 'Albuterol', category: 'Asthma' },
    { id: '9', name: 'Gabapentin', category: 'Pain Management' },
    { id: '10', name: 'Hydrochlorothiazide', category: 'Blood Pressure' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      const results = mockMedications.filter(med => 
        med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.genericName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 1000)
  }

  const handleCallHotline = () => {
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional medical background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/assets/images/landscape.jpeg")`,
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center animate-fade-in-up">
            {/* Round transparent background container */}
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 mx-auto max-w-6xl shadow-2xl border border-white/10">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 text-white leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' } as React.CSSProperties}>
                Medicare Part D
                <span className="block text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' } as React.CSSProperties}>Prescription Drug Plans</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto text-gray-200 leading-relaxed px-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' } as React.CSSProperties}>
                Find affordable Medicare Part D prescription drug coverage and healthcare insurance plans. 
                Licensed Medicare brokers help you compare prescription drug costs and save on medications with Medicare Advantage plans.
              </p>
        
              {/* Call to Action - Mobile Optimized */}
              <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center px-4">
                <button
                  onClick={handleCallHotline}
                  className="bg-white text-primary-green px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl hover:bg-gray-50 flex items-center space-x-3 sm:space-x-4 shadow-clean-lg w-full sm:w-auto max-w-sm transition-all duration-300 hover:scale-105"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' } as React.CSSProperties}
                >
                  <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span>Call (800) 631-MEDS</span>
                </button>
                <div className="text-center text-white">
                  <div className="text-sm sm:text-base text-gray-200 font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' } as React.CSSProperties}>Licensed Medicare Brokers Available 7 days a week</div>
                  <div className="font-semibold text-base sm:text-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' } as React.CSSProperties}>Mon-Fri: 8AM-8PM • Sat-Sun: 9AM-6PM</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' } as React.CSSProperties}>Medicare Part D enrollment assistance • CMS approved plans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results - Mobile Optimized */}
      {searchResults.length > 0 && (
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-center mb-6 sm:mb-8 text-primary-black">
              Search Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {searchResults.map((medication) => (
                <div key={medication.id} className="bg-white rounded-xl shadow-clean p-4 sm:p-6 hover:shadow-clean-lg transition-shadow">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-primary-black mb-2">
                    {medication.name}
                  </h3>
                  {medication.genericName && (
                    <p className="text-primary-gray mb-2 text-sm sm:text-base">
                      Generic: {medication.genericName}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-primary-gray mb-4">
                    Category: {medication.category}
                  </p>
                  <button
                    onClick={handleCallHotline}
                    className="w-full btn-primary flex items-center justify-center space-x-2 shadow-clean text-sm sm:text-base py-2 sm:py-3"
                  >
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Get Pricing</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section - Full Page Stacked */}
      <section className="bg-white">
        {/* Affordable Pricing Section */}
        <div className="min-h-screen flex items-center bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="bg-primary-green/10 rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0 mb-6 sm:mb-8 flex items-center justify-center">
                  <CurrencyDollarIcon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-green" />
                </div>
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
        <div className="min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
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
              <div className="text-center lg:text-left order-1 lg:order-2">
                <div className="bg-primary-green/10 rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0 mb-6 sm:mb-8 flex items-center justify-center">
                  <ClockIcon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-green" />
                </div>
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
        <div className="min-h-screen flex items-center bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="bg-primary-green/10 rounded-2xl p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0 mb-6 sm:mb-8 flex items-center justify-center">
                  <ShieldCheckIcon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-green" />
                </div>
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

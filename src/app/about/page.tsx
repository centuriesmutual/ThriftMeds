'use client'

import { PhoneIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-red to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            About ThriftMeds
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Your trusted partner in finding affordable medications and healthcare solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-primary-gray mb-6">
                At ThriftMeds, we believe that access to affordable medications shouldn't be 
                a luxury. Our mission is to make prescription medications more accessible 
                and affordable for everyone by providing transparent pricing information 
                and connecting patients with cost-effective solutions.
              </p>
              <p className="text-lg text-primary-gray mb-8">
                We understand that healthcare costs can be overwhelming, and we're committed 
                to helping you find the best prices for your medications without compromising 
                on quality or safety.
              </p>
              <Link
                href="/search"
                className="inline-flex items-center bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
              >
                Search Our Database
              </Link>
            </div>
            <div className="bg-primary-green/10 rounded-lg p-8">
              <div className="text-center">
                <HeartIcon className="h-16 w-16 text-primary-green mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black mb-4">
                  Healthcare for Everyone
                </h3>
                <p className="text-primary-gray">
                  We're dedicated to breaking down barriers to affordable healthcare 
                  and ensuring that everyone has access to the medications they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              The principles that guide everything we do at ThriftMeds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-red/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-red" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Affordability
              </h3>
              <p className="text-primary-gray">
                We're committed to finding the most cost-effective medication options 
                for our customers without compromising on quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-green/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Trust & Safety
              </h3>
              <p className="text-primary-gray">
                All medications in our database are verified and sourced from 
                legitimate, licensed pharmacies and manufacturers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-gray/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ClockIcon className="h-8 w-8 text-primary-gray" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Accessibility
              </h3>
              <p className="text-primary-gray">
                Our hotline is available 7 days a week to provide instant pricing 
                information when you need it most.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-red/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <HeartIcon className="h-8 w-8 text-primary-red" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Compassion
              </h3>
              <p className="text-primary-gray">
                We understand the stress of managing healthcare costs and are here 
                to support you with empathy and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              Getting affordable medication pricing is simple with our three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-red text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Search Our Database
              </h3>
              <p className="text-primary-gray">
                Use our comprehensive search tool to find your medication by name, 
                generic name, or category. Browse through our extensive database 
                of verified medications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-green text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Call Our Hotline
              </h3>
              <p className="text-primary-gray">
                Once you've found your medication, call our hotline at (555) 123-THRIFT 
                for instant pricing information. Our knowledgeable team is standing by 
                to help you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-gray text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Get Your Medications
              </h3>
              <p className="text-primary-gray">
                With our pricing information, you can make an informed decision about 
                where to purchase your medications at the best available price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Contact us today to learn more about how we can help you save on your medications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-2">
                <div className="bg-white text-primary-green px-2 py-1 rounded text-xs font-bold">
                  CMS
                </div>
                <span className="text-white font-semibold text-sm">✓ Licensed</span>
              </div>
                     <button
                       onClick={() => window.location.href = '/login'}
                       className="bg-white text-primary-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 flex items-center space-x-3 shadow-lg"
                     >
                       <UserIcon className="h-6 w-6" />
                       <span>Login</span>
                     </button>
            </div>
            <Link
              href="/search"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-green transition-colors"
            >
              Search Medications
            </Link>
          </div>
          <div className="mt-8 text-green-100">
            <p className="font-semibold">Available 7 days a week</p>
            <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}

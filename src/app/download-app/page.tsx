'use client'

import { DevicePhoneMobileIcon, ComputerDesktopIcon, ArrowDownTrayIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function DownloadAppPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Download ThriftMeds App
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            Access Medicare Part D plans and compare prescription drug costs on the go
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-primary-black">
              Download for Your Device
            </h2>
            <p className="text-lg text-primary-gray max-w-3xl mx-auto">
              Get the ThriftMeds app on your smartphone, tablet, or computer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* iOS App */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <DevicePhoneMobileIcon className="h-10 w-10 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-4 text-primary-black">iOS App</h3>
              <p className="text-primary-gray mb-6">
                Download for iPhone and iPad from the App Store
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors w-full">
                <div className="flex items-center justify-center space-x-2">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>Download for iOS</span>
                </div>
              </button>
              <p className="text-sm text-gray-500 mt-3">Requires iOS 14.0 or later</p>
            </div>

            {/* Android App */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <DevicePhoneMobileIcon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-4 text-primary-black">Android App</h3>
              <p className="text-primary-gray mb-6">
                Download for Android phones and tablets from Google Play
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors w-full">
                <div className="flex items-center justify-center space-x-2">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>Download for Android</span>
                </div>
              </button>
              <p className="text-sm text-gray-500 mt-3">Requires Android 8.0 or later</p>
            </div>

            {/* Web App */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-blue-100 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <ComputerDesktopIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-4 text-primary-black">Web App</h3>
              <p className="text-primary-gray mb-6">
                Access from any web browser on your computer
              </p>
              <button 
                onClick={() => window.location.href = '/dashboard'}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors w-full"
              >
                <div className="flex items-center justify-center space-x-2">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>Open Web App</span>
                </div>
              </button>
              <p className="text-sm text-gray-500 mt-3">Works on all modern browsers</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-primary-black">
              App Features
            </h2>
            <p className="text-lg text-primary-gray max-w-3xl mx-auto">
              Everything you need to manage your Medicare Part D coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-clean">
              <div className="bg-primary-green/10 rounded-lg p-4 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary-black">Plan Comparison</h3>
              <p className="text-primary-gray">Compare Medicare Part D plans side by side to find the best coverage for your medications</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-clean">
              <div className="bg-primary-green/10 rounded-lg p-4 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary-black">Drug Pricing</h3>
              <p className="text-primary-gray">Check prescription drug costs and copayments for different plans in real-time</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-clean">
              <div className="bg-primary-green/10 rounded-lg p-4 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary-black">Broker Support</h3>
              <p className="text-primary-gray">Connect with licensed Medicare brokers for personalized assistance and enrollment</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-clean">
              <div className="bg-primary-green/10 rounded-lg p-4 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary-black">Formulary Search</h3>
              <p className="text-primary-gray">Search plan formularies to see if your medications are covered</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-clean">
              <div className="bg-primary-green/10 rounded-lg p-4 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary-black">Pharmacy Locator</h3>
              <p className="text-primary-gray">Find preferred pharmacies near you for the best prescription prices</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-clean">
              <div className="bg-primary-green/10 rounded-lg p-4 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary-black">Coverage Tracking</h3>
              <p className="text-primary-gray">Track your coverage phases and out-of-pocket costs throughout the year</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-primary-black">
              What Our Users Say
            </h2>
            <p className="text-lg text-primary-gray max-w-3xl mx-auto">
              Join thousands of satisfied users who found their perfect Medicare Part D plan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-primary-gray mb-4">
                "The app made it so easy to compare plans. I found a plan that saves me $200 a month on my prescriptions!"
              </p>
              <div className="font-semibold text-primary-black">- Sarah M.</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-primary-gray mb-4">
                "The broker support was amazing. They helped me understand all the coverage details and found the perfect plan."
              </p>
              <div className="font-semibold text-primary-black">- Robert K.</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-primary-gray mb-4">
                "Simple, fast, and reliable. I can check my drug costs anytime and the interface is very user-friendly."
              </p>
              <div className="font-semibold text-primary-black">- Maria L.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-white">
            Ready to Download?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start comparing Medicare Part D plans and find the best coverage for your prescription needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-green px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 hover:scale-105">
              <DevicePhoneMobileIcon className="h-6 w-6" />
              <span>Download iOS App</span>
            </button>
            <button className="bg-white text-primary-green px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 hover:scale-105">
              <DevicePhoneMobileIcon className="h-6 w-6" />
              <span>Download Android App</span>
            </button>
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary-green transition-all duration-300"
            >
              Use Web App
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

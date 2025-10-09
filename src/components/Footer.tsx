import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-red text-white rounded-xl p-3 shadow-clean">
                <span className="font-heading font-bold text-2xl">TM</span>
              </div>
              <div>
                     <h3 className="font-heading font-bold text-3xl">ThriftMeds</h3>
                     <p className="text-gray-300 font-medium">Medicare Part D Plans</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in finding affordable Medicare Part D prescription drug plans. 
              Compare Medicare Advantage and Part D coverage options with licensed insurance brokers.
            </p>
            <div className="flex items-center space-x-3 text-primary-lightGreen">
              <PhoneIcon className="h-6 w-6" />
              <span className="font-semibold text-xl">(800) 631-MEDS</span>
            </div>
          </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-semibold text-xl mb-6">Company</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-gray-300 hover:text-white transition-colors font-medium">
                Press
              </Link>
            </li>
            <li>
              <Link href="/legal" className="text-gray-300 hover:text-white transition-colors font-medium">
                Legal
              </Link>
            </li>
          </ul>
        </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-lightGreen mt-0.5" />
                <div>
                  <div className="text-gray-300 font-medium">Licensed Broker Line</div>
                  <div className="font-semibold text-white">(800) 631-MEDS</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-lightGreen mt-0.5" />
                <div>
                  <div className="text-gray-300 font-medium">Email</div>
                  <div className="font-semibold text-white">support@thriftmeds.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary-lightGreen mt-0.5" />
                <div>
                  <div className="text-gray-300 font-medium">Hours</div>
                  <div className="font-semibold text-white">Mon-Fri: 8AM-8PM</div>
                  <div className="font-semibold text-white">Sat-Sun: 9AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 ThriftMeds. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/medical-disclaimer" className="text-gray-400 hover:text-white text-sm">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

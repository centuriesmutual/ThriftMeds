import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-6">
              <div className="relative w-16 h-16 mb-4 md:mb-0">
                <Image
                  src="/assets/logos/thriftlogo.png"
                  alt="ThriftMeds Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                     <h3 className="font-heading font-bold text-3xl">ThriftMeds</h3>
                     <p className="text-gray-300 font-medium">Medicare Part D Plans</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
              Your trusted partner in finding affordable Medicare Part D prescription drug plans. 
              Compare Medicare Advantage and Part D coverage options with licensed insurance brokers.
            </p>
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
                  <div className="text-gray-300 font-medium">Phone</div>
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

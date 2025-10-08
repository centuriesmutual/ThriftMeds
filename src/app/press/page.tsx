import { NewspaperIcon, CalendarIcon, UserIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Press Center</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            Stay updated with the latest news, announcements, and media resources from ThriftMeds.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Latest Press Releases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Press Release 1 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary-green" />
                <span className="text-sm text-primary-gray font-medium">Press Release</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                ThriftMeds Launches Comprehensive Medication Database
              </h3>
              <p className="text-primary-gray mb-4 leading-relaxed">
                New platform connects patients with affordable prescription medications through 
                licensed brokers and verified pharmacy networks.
              </p>
              <div className="flex items-center justify-between text-sm text-primary-gray">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-4 w-4" />
                  <span>Press Team</span>
                </div>
              </div>
            </div>

            {/* Press Release 2 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary-green" />
                <span className="text-sm text-primary-gray font-medium">Press Release</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                CMS Approval Strengthens ThriftMeds' Position in Healthcare
              </h3>
              <p className="text-primary-gray mb-4 leading-relaxed">
                ThriftMeds receives CMS approval, expanding access to affordable medications 
                for patients nationwide.
              </p>
              <div className="flex items-center justify-between text-sm text-primary-gray">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>December 1, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-4 w-4" />
                  <span>Press Team</span>
                </div>
              </div>
            </div>

            {/* Press Release 3 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary-green" />
                <span className="text-sm text-primary-gray font-medium">Press Release</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                Partnership with Licensed Pharmacy Network Announced
              </h3>
              <p className="text-primary-gray mb-4 leading-relaxed">
                ThriftMeds partners with nationwide pharmacy network to provide 
                competitive pricing on prescription medications.
              </p>
              <div className="flex items-center justify-between text-sm text-primary-gray">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>November 20, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-4 w-4" />
                  <span>Press Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Media Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-clean">
              <div className="flex items-center space-x-3 mb-6">
                <NewspaperIcon className="h-8 w-8 text-primary-green" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black">
                  Press Kit
                </h3>
              </div>
              <p className="text-primary-gray mb-6 leading-relaxed">
                Download our comprehensive press kit including company information, 
                executive bios, high-resolution logos, and brand guidelines.
              </p>
              <button className="btn-primary">
                Download Press Kit
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-clean">
              <div className="flex items-center space-x-3 mb-6">
                <UserIcon className="h-8 w-8 text-primary-green" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black">
                  Media Contact
                </h3>
              </div>
              <p className="text-primary-gray mb-6 leading-relaxed">
                For media inquiries, interview requests, or additional information, 
                please contact our press team.
              </p>
              <div className="space-y-2 text-primary-gray">
                <p><strong>Email:</strong> support@thriftmeds.com</p>
                <p><strong>Phone:</strong> (800) 631-MEDS</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            About ThriftMeds
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-primary-gray leading-relaxed mb-6">
                ThriftMeds is a leading provider of affordable prescription medications, 
                connecting patients with licensed brokers and verified pharmacy networks 
                to ensure access to cost-effective healthcare solutions.
              </p>
              
              <p className="text-primary-gray leading-relaxed mb-6">
                Our CMS-approved platform serves patients nationwide, providing instant 
                pricing information and connecting them with licensed professionals who 
                can help find the most affordable medication options.
              </p>
              
              <p className="text-primary-gray leading-relaxed">
                Committed to transparency and patient safety, ThriftMeds works exclusively 
                with licensed pharmacies and certified brokers to maintain the highest 
                standards of healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Media Inquiries?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Contact our press team for interviews, quotes, or additional information about ThriftMeds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@thriftmeds.com"
              className="bg-white text-primary-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Email Press Team
            </a>
            <a
              href="tel:8006316337"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-green transition-colors"
            >
              Call (800) 631-MEDS
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

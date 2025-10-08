import { ScaleIcon, DocumentTextIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Legal Information</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            Important legal information, terms of service, privacy policy, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Legal Documents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Terms of Service */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <DocumentTextIcon className="h-8 w-8 text-primary-green" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black">
                  Terms of Service
                </h3>
              </div>
              <p className="text-primary-gray mb-6 leading-relaxed">
                Our terms of service outline the rules and regulations for using our platform, 
                including user responsibilities and service limitations.
              </p>
              <p className="text-sm text-primary-gray mb-4">
                <strong>Last Updated:</strong> December 15, 2024
              </p>
              <button className="btn-primary">
                View Terms of Service
              </button>
            </div>

            {/* Privacy Policy */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-primary-green" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black">
                  Privacy Policy
                </h3>
              </div>
              <p className="text-primary-gray mb-6 leading-relaxed">
                Learn how we collect, use, and protect your personal information when you 
                use our services and platform.
              </p>
              <p className="text-sm text-primary-gray mb-4">
                <strong>Last Updated:</strong> December 15, 2024
              </p>
              <button className="btn-primary">
                View Privacy Policy
              </button>
            </div>

            {/* HIPAA Compliance */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <ScaleIcon className="h-8 w-8 text-primary-green" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black">
                  HIPAA Compliance
                </h3>
              </div>
              <p className="text-primary-gray mb-6 leading-relaxed">
                Information about our compliance with the Health Insurance Portability 
                and Accountability Act and patient data protection measures.
              </p>
              <p className="text-sm text-primary-gray mb-4">
                <strong>Compliance Status:</strong> Fully Compliant
              </p>
              <button className="btn-primary">
                View HIPAA Information
              </button>
            </div>

            {/* Disclaimers */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-clean-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <ExclamationTriangleIcon className="h-8 w-8 text-primary-green" />
                <h3 className="font-heading font-semibold text-2xl text-primary-black">
                  Important Disclaimers
                </h3>
              </div>
              <p className="text-primary-gray mb-6 leading-relaxed">
                Important disclaimers regarding medication information, pricing, 
                and the role of licensed brokers in our service.
              </p>
              <p className="text-sm text-primary-gray mb-4">
                <strong>Effective Date:</strong> December 15, 2024
              </p>
              <button className="btn-primary">
                View Disclaimers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Regulatory Compliance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-clean text-center">
              <div className="bg-primary-green/10 rounded-2xl p-6 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                CMS Approved
              </h3>
              <p className="text-primary-gray leading-relaxed">
                ThriftMeds is approved by the Centers for Medicare & Medicaid Services, 
                ensuring compliance with federal healthcare regulations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-clean text-center">
              <div className="bg-primary-green/10 rounded-2xl p-6 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ScaleIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Licensed Brokers
              </h3>
              <p className="text-primary-gray leading-relaxed">
                All brokers working with ThriftMeds are properly licensed and certified 
                to provide medication pricing and consultation services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-clean text-center">
              <div className="bg-primary-green/10 rounded-2xl p-6 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <DocumentTextIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Data Protection
              </h3>
              <p className="text-primary-gray leading-relaxed">
                We maintain strict data protection protocols and comply with all applicable 
                privacy laws and healthcare regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Important Information
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-yellow-800 mb-3">
                    Medical Disclaimer
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    ThriftMeds provides pricing information and connects patients with licensed brokers. 
                    We do not provide medical advice, diagnosis, or treatment. Always consult with your 
                    healthcare provider before making any medical decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-blue-800 mb-3">
                    Licensed Pharmacy Network
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    All pharmacies in our network are properly licensed and regulated. 
                    We work exclusively with verified, licensed pharmacies to ensure 
                    the safety and quality of all medications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-start space-x-3">
                <ScaleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-green-800 mb-3">
                    Regulatory Compliance
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    ThriftMeds operates in full compliance with federal and state regulations 
                    governing healthcare services, medication pricing, and patient privacy. 
                    Our services are regularly audited to ensure continued compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Legal Team */}
      <section className="py-16 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Legal Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            For legal inquiries, compliance questions, or to request copies of our legal documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@thriftmeds.com"
              className="bg-white text-primary-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Legal Team
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

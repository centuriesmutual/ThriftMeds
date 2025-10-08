import { ShieldCheckIcon, DocumentCheckIcon, ClipboardDocumentCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Compliance Center</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            Our commitment to regulatory compliance, safety standards, and ethical healthcare practices.
          </p>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Our Compliance Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-clean-lg transition-shadow">
              <div className="bg-primary-green/10 rounded-2xl p-6 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Regulatory Compliance
              </h3>
              <p className="text-primary-gray leading-relaxed">
                We maintain full compliance with all federal and state healthcare regulations, 
                including CMS guidelines and pharmacy licensing requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-clean-lg transition-shadow">
              <div className="bg-primary-green/10 rounded-2xl p-6 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <DocumentCheckIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Quality Assurance
              </h3>
              <p className="text-primary-gray leading-relaxed">
                Our quality assurance programs ensure that all medications meet strict 
                safety and efficacy standards before reaching patients.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-clean-lg transition-shadow">
              <div className="bg-primary-green/10 rounded-2xl p-6 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary-black">
                Continuous Monitoring
              </h3>
              <p className="text-primary-gray leading-relaxed">
                We continuously monitor our operations and partner networks to ensure 
                ongoing compliance with all applicable standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Certifications & Approvals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-clean">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-green text-white rounded-lg p-3">
                  <ShieldCheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-primary-black">
                    CMS Approval
                  </h3>
                  <p className="text-primary-gray">Centers for Medicare & Medicaid Services</p>
                </div>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                ThriftMeds is fully approved by CMS, ensuring compliance with federal 
                healthcare regulations and eligibility to serve Medicare and Medicaid beneficiaries.
              </p>
              <div className="flex items-center space-x-2 text-primary-green font-semibold">
                <span>✓ Approved</span>
                <span>•</span>
                <span>Active Status</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-clean">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-green text-white rounded-lg p-3">
                  <DocumentCheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-primary-black">
                    HIPAA Compliance
                  </h3>
                  <p className="text-primary-gray">Health Insurance Portability and Accountability Act</p>
                </div>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                We maintain strict HIPAA compliance to protect patient privacy and ensure 
                the security of all personal health information.
              </p>
              <div className="flex items-center space-x-2 text-primary-green font-semibold">
                <span>✓ Compliant</span>
                <span>•</span>
                <span>Regular Audits</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-clean">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-green text-white rounded-lg p-3">
                  <ClipboardDocumentCheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-primary-black">
                    Pharmacy Licensure
                  </h3>
                  <p className="text-primary-gray">State Pharmacy Board Approvals</p>
                </div>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                All pharmacies in our network are properly licensed and regulated by 
                their respective state pharmacy boards.
              </p>
              <div className="flex items-center space-x-2 text-primary-green font-semibold">
                <span>✓ Licensed</span>
                <span>•</span>
                <span>All States</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-clean">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-green text-white rounded-lg p-3">
                  <ShieldCheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-primary-black">
                    Broker Certification
                  </h3>
                  <p className="text-primary-gray">Licensed Insurance Brokers</p>
                </div>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                All brokers working with ThriftMeds are properly licensed and certified 
                to provide medication pricing and consultation services.
              </p>
              <div className="flex items-center space-x-2 text-primary-green font-semibold">
                <span>✓ Certified</span>
                <span>•</span>
                <span>Ongoing Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-black mb-12 text-center">
            Compliance Policies & Procedures
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                  Medication Safety Protocols
                </h3>
                <p className="text-primary-gray leading-relaxed">
                  Comprehensive protocols for medication verification, storage, and distribution 
                  to ensure patient safety and regulatory compliance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                  Privacy & Data Protection
                </h3>
                <p className="text-primary-gray leading-relaxed">
                  Strict data protection measures and privacy protocols to safeguard 
                  patient information and maintain HIPAA compliance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                  Quality Control Standards
                </h3>
                <p className="text-primary-gray leading-relaxed">
                  Rigorous quality control processes to ensure all medications meet 
                  FDA standards and safety requirements.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                  Regulatory Reporting
                </h3>
                <p className="text-primary-gray leading-relaxed">
                  Comprehensive reporting systems to maintain transparency and ensure 
                  compliance with all regulatory requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                  Training & Education
                </h3>
                <p className="text-primary-gray leading-relaxed">
                  Ongoing training programs for all staff and partners to maintain 
                  the highest standards of compliance and patient care.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                  Audit & Monitoring
                </h3>
                <p className="text-primary-gray leading-relaxed">
                  Regular audits and monitoring procedures to ensure continuous 
                  compliance and identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-yellow-800 mb-3">
                  Compliance Notice
                </h3>
                <p className="text-yellow-700 leading-relaxed">
                  ThriftMeds maintains the highest standards of regulatory compliance and patient safety. 
                  Our compliance programs are regularly reviewed and updated to ensure adherence to all 
                  applicable federal and state regulations. For questions about our compliance practices 
                  or to report any concerns, please contact our compliance team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Compliance Team */}
      <section className="py-16 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Compliance Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Contact our compliance team for questions about our regulatory practices, 
            certifications, or to report any compliance concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@thriftmeds.com"
              className="bg-white text-primary-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Compliance Team
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

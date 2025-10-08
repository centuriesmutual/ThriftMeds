import { ShieldCheckIcon, DocumentTextIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            We are committed to protecting your privacy and personal information.
          </p>
          <p className="text-sm mt-4 text-green-200">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-primary-green" />
                <h2 className="font-heading font-bold text-2xl text-primary-black">
                  Our Commitment to Privacy
                </h2>
              </div>
              <p className="text-primary-gray leading-relaxed">
                ThriftMeds is committed to protecting your privacy and ensuring the security of your personal 
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                1. Information We Collect
              </h2>
              
              <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                Personal Information
              </h3>
              <p className="text-primary-gray leading-relaxed mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4 mb-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Demographic information (age, location)</li>
                <li>Health and medication information you choose to provide</li>
                <li>Insurance information (if applicable)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="font-heading font-semibold text-xl text-primary-black mb-3">
                Technical Information
              </h3>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Provide medication search and pricing services</li>
                <li>Connect you with licensed brokers and pharmacies</li>
                <li>Improve our services and user experience</li>
                <li>Send important updates about our services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protect against fraud and ensure security</li>
              </ul>
            </div>

            {/* HIPAA Compliance */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <LockClosedIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-blue-800 mb-3">
                    HIPAA Compliance
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    As a healthcare-related service, we maintain strict compliance with the Health Insurance 
                    Portability and Accountability Act (HIPAA). We implement appropriate safeguards to protect 
                    your health information and ensure it is used and disclosed only as permitted by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>With licensed brokers and pharmacies to provide requested services</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                4. Data Security
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze site usage, 
                and provide personalized content. You can control cookie settings through your browser, 
                but disabling cookies may affect the functionality of our services.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                7. Data Retention
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We retain your personal information only as long as necessary to provide our services, 
                comply with legal obligations, resolve disputes, and enforce our agreements. When we no 
                longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-primary-gray leading-relaxed">
                Our services may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these external sites. We encourage you to review the 
                privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-primary-gray leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected such information, we will take steps to delete it promptly.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary-green" />
                <h2 className="font-heading font-bold text-2xl text-primary-black">
                  Contact Us
                </h2>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
    </div>
  )
}

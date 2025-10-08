import { DocumentTextIcon, ExclamationTriangleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm mt-4 text-green-200">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary-green" />
                <h2 className="font-heading font-bold text-2xl text-primary-black">
                  Agreement to Terms
                </h2>
              </div>
              <p className="text-primary-gray leading-relaxed">
                By accessing and using ThriftMeds services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using or accessing this site.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                1. Service Description
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                ThriftMeds provides a platform that connects patients with licensed brokers and pharmacies 
                to help find affordable prescription medications. Our services include:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Medication search and pricing information</li>
                <li>Connection with licensed insurance brokers</li>
                <li>Access to verified pharmacy networks</li>
                <li>Educational resources about medications</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                2. User Responsibilities
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to circumvent any security measures</li>
                <li>Respect the intellectual property rights of ThriftMeds</li>
                <li>Consult with healthcare providers before making medical decisions</li>
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-yellow-800 mb-3">
                    Medical Disclaimer
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    ThriftMeds does not provide medical advice, diagnosis, or treatment. All medication 
                    information is for educational purposes only. Always consult with your healthcare 
                    provider before making any medical decisions or changes to your medication regimen.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                3. Privacy and Data Protection
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed 
                by our Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>
              <p className="text-primary-gray leading-relaxed">
                By using our services, you consent to the collection and use of information as described 
                in our Privacy Policy.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                4. Service Availability
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We strive to provide continuous service availability, but we do not guarantee that our 
                services will be uninterrupted or error-free. We reserve the right to modify, suspend, 
                or discontinue any part of our services at any time without notice.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                To the maximum extent permitted by law, ThriftMeds shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Loss of profits, data, or use</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
                <li>Any damages resulting from the use or inability to use our services</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-primary-gray leading-relaxed">
                All content, trademarks, and intellectual property on our platform are owned by ThriftMeds 
                or our licensors. You may not reproduce, distribute, or create derivative works without 
                our express written permission.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                7. Termination
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice 
                or liability, for any reason whatsoever, including if you breach these Terms of Service.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users 
                of any material changes by posting the new Terms of Service on this page. Your continued 
                use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-primary-green" />
                <h2 className="font-heading font-bold text-2xl text-primary-black">
                  Contact Information
                </h2>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

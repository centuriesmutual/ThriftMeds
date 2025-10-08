import { ExclamationTriangleIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-lightGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Medical Disclaimer</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
            Important information about the limitations of our services.
          </p>
          <p className="text-sm mt-4 text-green-200">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-heading font-bold text-2xl text-red-800 mb-3">
                    Important Medical Notice
                  </h2>
                  <p className="text-red-700 leading-relaxed">
                    <strong>ThriftMeds does not provide medical advice, diagnosis, or treatment.</strong> 
                    All information provided through our platform is for educational and informational 
                    purposes only and should not be considered as medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Not a Medical Service */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                1. We Are Not a Medical Service
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                ThriftMeds is not a healthcare provider, pharmacy, or medical service. We are a platform 
                that connects patients with licensed brokers and pharmacies to help find affordable 
                medication pricing information.
              </p>
              <p className="text-primary-gray leading-relaxed">
                Our services include:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4 mt-4">
                <li>Medication search and pricing information</li>
                <li>Connection with licensed insurance brokers</li>
                <li>Access to verified pharmacy networks</li>
                <li>Educational resources about medications</li>
              </ul>
            </div>

            {/* No Medical Advice */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                2. No Medical Advice Provided
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                The information provided through our platform is not intended to:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4 mb-4">
                <li>Replace professional medical advice</li>
                <li>Diagnose, treat, cure, or prevent any medical condition</li>
                <li>Recommend specific medications or treatments</li>
                <li>Provide medical opinions or interpretations</li>
              </ul>
              <p className="text-primary-gray leading-relaxed">
                All medication information is for educational purposes only and should not be used to 
                make medical decisions without consulting a qualified healthcare professional.
              </p>
            </div>

            {/* Consult Healthcare Provider */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-yellow-800 mb-3">
                    Always Consult Your Healthcare Provider
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Before making any changes to your medication regimen, starting new medications, 
                    or stopping current medications, you must consult with your healthcare provider. 
                    Only a qualified healthcare professional can provide appropriate medical advice 
                    based on your specific health condition and medical history.
                  </p>
                </div>
              </div>
            </div>

            {/* Medication Information Limitations */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                3. Limitations of Medication Information
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                While we strive to provide accurate medication information, please understand that:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Medication information may not be complete or up-to-date</li>
                <li>Pricing information is subject to change without notice</li>
                <li>Medication availability may vary by location</li>
                <li>Generic and brand-name medications may have different effects</li>
                <li>Individual responses to medications vary</li>
              </ul>
            </div>

            {/* Emergency Situations */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                4. Emergency Situations
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                <strong>If you are experiencing a medical emergency, call 911 immediately.</strong>
              </p>
              <p className="text-primary-gray leading-relaxed">
                Do not use our platform or any information provided through our services for emergency 
                medical situations. Our services are not designed for emergency medical care and should 
                not be relied upon in life-threatening situations.
              </p>
            </div>

            {/* Drug Interactions and Side Effects */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                5. Drug Interactions and Side Effects
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                Information about potential drug interactions, side effects, and contraindications 
                should always be verified with your healthcare provider or pharmacist. We do not 
                provide comprehensive information about:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>Drug-drug interactions</li>
                <li>Drug-food interactions</li>
                <li>Potential side effects</li>
                <li>Contraindications for specific conditions</li>
                <li>Dosage adjustments for special populations</li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                6. Third-Party Services and Providers
              </h2>
              <p className="text-primary-gray leading-relaxed mb-4">
                When you use our services to connect with licensed brokers or pharmacies:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4">
                <li>We are not responsible for the medical advice provided by third parties</li>
                <li>Brokers and pharmacies operate independently</li>
                <li>You should verify the credentials of any healthcare provider</li>
                <li>We do not endorse specific medications or treatments</li>
              </ul>
            </div>

            {/* No Warranty */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                7. No Warranty or Guarantee
              </h2>
              <p className="text-primary-gray leading-relaxed">
                We make no warranties or guarantees regarding:
              </p>
              <ul className="list-disc list-inside text-primary-gray space-y-2 ml-4 mt-4">
                <li>The accuracy of medication information</li>
                <li>The effectiveness of any medications</li>
                <li>The availability of specific medications</li>
                <li>The suitability of medications for your condition</li>
                <li>The results of using our services</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-primary-black mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-primary-gray leading-relaxed">
                To the maximum extent permitted by law, ThriftMeds shall not be liable for any medical 
                decisions, health outcomes, or consequences resulting from the use of our services or 
                reliance on information provided through our platform.
              </p>
            </div>

            {/* Professional Medical Care */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-3">
                <DocumentTextIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-green-800 mb-3">
                    Seek Professional Medical Care
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    Always seek the advice of qualified healthcare professionals for any questions you may 
                    have regarding a medical condition, medication, or treatment. Never disregard professional 
                    medical advice or delay seeking it because of information obtained through our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-primary-green" />
                <h2 className="font-heading font-bold text-2xl text-primary-black">
                  Questions About This Disclaimer
                </h2>
              </div>
              <p className="text-primary-gray leading-relaxed mb-4">
                If you have any questions about this Medical Disclaimer, please contact us:
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

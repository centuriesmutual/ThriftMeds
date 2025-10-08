'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleLogin = () => {
    window.location.href = '/login'
  }

  const handleCallHotline = () => {
    window.open('tel:8006316337', '_self')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-red to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Get in touch with our team for medication pricing information and support
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-heading font-bold text-3xl text-primary-black mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-red text-white rounded-lg p-3">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary-black mb-2">
                    Licensed Broker Line
                  </h3>
                  <p className="text-primary-gray mb-2">
                    Speak with licensed brokers for instant medication pricing information
                  </p>
                  <button
                    onClick={handleCallHotline}
                    className="text-primary-red font-semibold text-lg hover:text-red-700"
                  >
                    (800) 631-MEDS
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green text-white rounded-lg p-3">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary-black mb-2">
                    Email Support
                  </h3>
                  <p className="text-primary-gray mb-2">
                    Send us your questions and we'll respond within 24 hours
                  </p>
                  <a
                    href="mailto:support@thriftmeds.com"
                    className="text-primary-green font-semibold text-lg hover:text-green-700"
                  >
                    support@thriftmeds.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-gray text-white rounded-lg p-3">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary-black mb-2">
                    Business Hours
                  </h3>
                  <div className="text-primary-gray">
                    <p className="mb-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="mb-1">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">
                      Eastern Time Zone
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-red text-white rounded-lg p-3">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary-black mb-2">
                    Service Area
                  </h3>
                  <p className="text-primary-gray">
                    We provide medication pricing information nationwide across the United States
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Login CTA */}
            <div className="mt-12 bg-primary-green text-white rounded-lg p-8 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Need Immediate Access?
          </h3>
          <p className="text-green-100 mb-6">
            Login to access your account and speak with licensed brokers for instant medication pricing information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
              <div className="bg-white text-primary-green px-2 py-1 rounded text-xs font-bold">
                CMS
              </div>
              <span className="text-white font-semibold text-sm">✓ Licensed</span>
            </div>
            <button
              onClick={handleLogin}
              className="bg-white text-primary-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 flex items-center space-x-3 shadow-lg"
            >
              <UserIcon className="h-6 w-6" />
              <span>Login</span>
            </button>
          </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading font-bold text-3xl text-primary-black mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="medication-pricing">Medication Pricing</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-red text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

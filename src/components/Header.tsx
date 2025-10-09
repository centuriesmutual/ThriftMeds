'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery)
  }

  const handleLogin = () => {
    window.location.href = '/login'
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top banner - Clean and minimal */}
      <div className="bg-black text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="font-medium">📞 Speak With A Licensed Broker</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="hidden md:inline text-gray-300">No Obligation</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/legal" className="hover:text-gray-300 transition-colors">Legal</Link>
            <Link href="/compliance" className="hover:text-gray-300 transition-colors">Compliance</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center py-3 sm:py-4">
          {/* Logo - Desktop */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/assets/logos/thriftlogo.png"
                alt="ThriftMeds Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
                     <h1 className="font-heading font-bold text-2xl sm:text-3xl text-primary-black">ThriftMeds</h1>
                     <p className="text-xs sm:text-sm text-primary-gray font-medium">Medicare Part D Plans</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Medicare Part D covered medications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent shadow-clean"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-green text-white p-2 rounded-lg hover:bg-primary-lightGreen shadow-clean"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Call to Action - Desktop */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="text-right">
              <div className="text-xs lg:text-sm text-primary-gray font-medium">CMS Approved</div>
              <div className="font-semibold text-primary-black text-sm lg:text-base">
                <span className="text-primary-green">✓ Licensed</span>
              </div>
            </div>
            <button onClick={handleLogin} className="btn-primary flex items-center space-x-2 shadow-clean text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3">
              <UserIcon className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout - Professional Logo/Text on Left, Search on Right */}
        <div className="md:hidden flex justify-between items-center py-3 sm:py-4">
          {/* Logo and Text - Left Side - Professional Desktop Look */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="relative w-14 h-14">
              <Image
                src="/assets/logos/thriftlogo.png"
                alt="ThriftMeds Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-primary-black">ThriftMeds</h1>
              <p className="text-xs text-primary-gray font-medium">Medicare Part D Plans</p>
            </div>
          </Link>

          {/* Search Bar - Right Side - Compact but Professional */}
          <div className="flex-shrink-0 ml-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search medications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 pl-4 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent shadow-clean"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-green text-white p-2 rounded-lg hover:bg-primary-lightGreen shadow-clean flex items-center justify-center"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </header>
  )
}

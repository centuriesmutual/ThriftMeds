'use client'

import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon, PhoneIcon, FilterIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Medication {
  id: string
  name: string
  genericName?: string
  category: string
  description?: string
}

const CATEGORIES = [
  'All',
  'Blood Pressure',
  'Cholesterol',
  'Diabetes',
  'Pain Management',
  'Acid Reflux',
  'Asthma',
  'Antibiotics',
  'Heart Conditions',
  'Mental Health'
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchResults, setSearchResults] = useState<Medication[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [allMedications] = useState<Medication[]>([
    { id: '1', name: 'Lipitor', genericName: 'Atorvastatin', category: 'Cholesterol', description: 'Used to lower cholesterol and reduce risk of heart disease' },
    { id: '2', name: 'Metformin', category: 'Diabetes', description: 'First-line treatment for type 2 diabetes' },
    { id: '3', name: 'Lisinopril', category: 'Blood Pressure', description: 'ACE inhibitor used to treat high blood pressure' },
    { id: '4', name: 'Amlodipine', category: 'Blood Pressure', description: 'Calcium channel blocker for blood pressure management' },
    { id: '5', name: 'Omeprazole', category: 'Acid Reflux', description: 'Proton pump inhibitor for acid reflux and ulcers' },
    { id: '6', name: 'Simvastatin', category: 'Cholesterol', description: 'Statin medication to lower cholesterol levels' },
    { id: '7', name: 'Losartan', category: 'Blood Pressure', description: 'ARB medication for blood pressure control' },
    { id: '8', name: 'Albuterol', category: 'Asthma', description: 'Bronchodilator for asthma and COPD treatment' },
    { id: '9', name: 'Gabapentin', category: 'Pain Management', description: 'Anti-seizure medication also used for nerve pain' },
    { id: '10', name: 'Hydrochlorothiazide', category: 'Blood Pressure', description: 'Diuretic medication for blood pressure and fluid retention' },
    { id: '11', name: 'Metoprolol', category: 'Blood Pressure', description: 'Beta-blocker for heart conditions and blood pressure' },
    { id: '12', name: 'Sertraline', category: 'Mental Health', description: 'SSRI antidepressant for depression and anxiety' },
    { id: '13', name: 'Amoxicillin', category: 'Antibiotics', description: 'Penicillin antibiotic for bacterial infections' },
    { id: '14', name: 'Atorvastatin', category: 'Cholesterol', description: 'Generic version of Lipitor for cholesterol management' },
    { id: '15', name: 'Insulin Glargine', category: 'Diabetes', description: 'Long-acting insulin for diabetes management' },
  ])

  const handleSearch = () => {
    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      let results = allMedications
      
      // Filter by category
      if (selectedCategory !== 'All') {
        results = results.filter(med => med.category === selectedCategory)
      }
      
      // Filter by search query
      if (searchQuery.trim()) {
        results = results.filter(med => 
          med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          med.genericName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          med.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          med.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      
      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  const handleLogin = () => {
    window.location.href = '/login'
  }

  // Auto-search when category changes
  useEffect(() => {
    handleSearch()
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-black mb-3 sm:mb-4">
            Medication Search
          </h1>
          <p className="text-lg sm:text-xl text-primary-gray max-w-2xl mx-auto px-4">
            Search our comprehensive database of medications and speak with licensed brokers for instant pricing
          </p>
        </div>

        {/* Search and Filter - Mobile Optimized */}
        <div className="bg-white rounded-xl shadow-clean p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Medications
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  placeholder="Enter medication name, generic name, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent shadow-clean"
                />
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-green text-white p-2 rounded-lg hover:bg-primary-lightGreen disabled:opacity-50 shadow-clean"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent shadow-clean"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-4">
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="w-full btn-primary flex items-center justify-center space-x-2 shadow-clean"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span>Search Medications</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-heading font-semibold text-xl text-primary-black">
              Search Results
              {searchResults.length > 0 && (
                <span className="text-primary-gray font-normal ml-2">
                  ({searchResults.length} found)
                </span>
              )}
            </h2>
          </div>

          {searchResults.length === 0 && !isSearching && (
            <div className="p-12 text-center">
              <MagnifyingGlassIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No medications found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          )}

          {isSearching && (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red mx-auto mb-4"></div>
              <p className="text-gray-500">Searching medications...</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="divide-y divide-gray-200">
              {searchResults.map((medication) => (
                <div key={medication.id} className="p-6 hover:bg-gray-50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-primary-black mb-2">
                        {medication.name}
                      </h3>
                      {medication.genericName && (
                        <p className="text-primary-gray mb-2">
                          Generic Name: <span className="font-medium">{medication.genericName}</span>
                        </p>
                      )}
                      <p className="text-sm text-primary-gray mb-2">
                        Category: <span className="font-medium">{medication.category}</span>
                      </p>
                      {medication.description && (
                        <p className="text-gray-600 text-sm">
                          {medication.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary-green text-white px-3 py-1 rounded text-xs font-bold">
                          CMS
                        </div>
                        <button
                          onClick={handleLogin}
                          className="bg-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 flex items-center space-x-2 shadow-md"
                        >
                          <UserIcon className="h-5 w-5" />
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-primary-green text-white rounded-lg p-8 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Need Help Finding a Medication?
          </h3>
          <p className="text-lg mb-6 text-green-100">
            Login to access your account and speak with licensed brokers for the best pricing on any medication.
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
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  UserIcon, 
  MagnifyingGlassIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  BellIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in - only on client side
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn')
      const email = localStorage.getItem('userEmail')
      
      if (!loggedIn) {
        router.push('/login')
        return
      }
      
      setIsLoggedIn(true)
      setUserEmail(email || '')
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userEmail')
    }
    router.push('/')
  }

  const handleLoginRedirect = () => {
    router.push('/login')
  }

  // Show loading state during hydration
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-green mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If not logged in, show login redirect
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access your dashboard</h2>
          <button
            onClick={handleLoginRedirect}
            className="bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-primary-lightGreen"
          >
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-green text-white rounded-xl p-2">
                <span className="font-heading font-bold text-xl">TM</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl text-primary-black">ThriftMeds</h1>
                <p className="text-sm text-primary-gray">Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{userEmail}</p>
                <p className="text-xs text-gray-500">Welcome back</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'dashboard'
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ChartBarIcon className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
              
              <button
                onClick={() => setActiveTab('mailbox')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'mailbox'
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>Mailbox</span>
              </button>
              
              <button
                onClick={() => setActiveTab('medications')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'medications'
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Medications</span>
              </button>
              
              <button
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'documents'
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <DocumentTextIcon className="h-5 w-5" />
                <span>Documents</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <CogIcon className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-clean">
                    <div className="flex items-center">
                      <div className="bg-primary-green/10 rounded-lg p-3">
                        <MagnifyingGlassIcon className="h-6 w-6 text-primary-green" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Medications Searched</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-clean">
                    <div className="flex items-center">
                      <div className="bg-primary-green/10 rounded-lg p-3">
                        <PhoneIcon className="h-6 w-6 text-primary-green" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Broker Calls</p>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-clean">
                    <div className="flex items-center">
                      <div className="bg-primary-green/10 rounded-lg p-3">
                        <EnvelopeIcon className="h-6 w-6 text-primary-green" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Messages</p>
                        <p className="text-2xl font-bold text-gray-900">5</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6 shadow-clean">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 rounded-full p-2">
                        <MagnifyingGlassIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Searched for Lipitor pricing</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <PhoneIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Called broker for Metformin quote</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-yellow-100 rounded-full p-2">
                        <EnvelopeIcon className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Received pricing information</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mailbox' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Mailbox</h2>
                
                <div className="bg-white rounded-xl shadow-clean">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    <div className="p-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary-green text-white rounded-full p-2">
                            <UserIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Licensed Broker - Sarah Johnson</p>
                            <p className="text-sm text-gray-500">Metformin pricing quote available</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">2 hours ago</p>
                          <div className="bg-primary-green text-white rounded-full w-2 h-2 mt-1 ml-auto"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary-green text-white rounded-full p-2">
                            <UserIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">ThriftMeds Support</p>
                            <p className="text-sm text-gray-500">Welcome to your dashboard</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">1 day ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary-green text-white rounded-full p-2">
                            <UserIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Licensed Broker - Mike Chen</p>
                            <p className="text-sm text-gray-500">Lipitor alternatives discussed</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'medications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">My Medications</h2>
                
                <div className="bg-white rounded-xl shadow-clean p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Searched Medications</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">Lipitor (Atorvastatin)</h4>
                          <p className="text-sm text-gray-500">Cardiovascular medication</p>
                          <p className="text-sm text-primary-green font-medium mt-1">Quote received: $45/month</p>
                        </div>
                        <button className="bg-primary-green text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-lightGreen">
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">Metformin</h4>
                          <p className="text-sm text-gray-500">Diabetes medication</p>
                          <p className="text-sm text-primary-green font-medium mt-1">Quote received: $12/month</p>
                        </div>
                        <button className="bg-primary-green text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-lightGreen">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
                
                <div className="bg-white rounded-xl shadow-clean p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Documents</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <DocumentTextIcon className="h-8 w-8 text-primary-green" />
                        <div>
                          <p className="font-medium text-gray-900">Lipitor Pricing Quote</p>
                          <p className="text-sm text-gray-500">PDF • 2 pages</p>
                        </div>
                      </div>
                      <button className="text-primary-green hover:text-primary-lightGreen">
                        Download
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <DocumentTextIcon className="h-8 w-8 text-primary-green" />
                        <div>
                          <p className="font-medium text-gray-900">Metformin Pricing Quote</p>
                          <p className="text-sm text-gray-500">PDF • 1 page</p>
                        </div>
                      </div>
                      <button className="text-primary-green hover:text-primary-lightGreen">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                
                <div className="bg-white rounded-xl shadow-clean p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={userEmail}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notification Preferences
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                          <span className="ml-2 text-sm text-gray-700">Email notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                          <span className="ml-2 text-sm text-gray-700">SMS notifications</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button className="bg-primary-green text-white px-6 py-2 rounded-lg hover:bg-primary-lightGreen">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

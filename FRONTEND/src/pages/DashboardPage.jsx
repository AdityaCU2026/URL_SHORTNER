import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center py-12 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-5xl">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900">URL Shortener</h1>
        <div className="space-y-10">
          <UrlForm />
          <UserUrl />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
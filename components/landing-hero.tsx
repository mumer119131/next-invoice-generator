"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Eye } from 'lucide-react'
import Link from 'next/link'

export default function LandingHero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full px-6 py-2 mb-8 border border-blue-200/50 dark:border-blue-700/50">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Free • No Registration • Instant PDF</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-none">
          Create 
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
            Beautiful
          </span>
          Invoices
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Professional invoice generator with stunning templates, automatic calculations, 
          and instant PDF export. Get paid faster with invoices that impress.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/invoice">
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 rounded-2xl">
              Start Creating Free <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 rounded-2xl transition-all duration-300">
            <Eye className="w-5 h-5 mr-3" />
            View Templates
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">Invoices Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4.9★</div>
            <div className="text-gray-600 dark:text-gray-400">User Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Free Forever</div>
          </div>
        </div>
      </div>
    </section>
  )
}

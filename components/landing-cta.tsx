"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LandingCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of professionals who trust InvoiceGen for their billing needs. 
          Create beautiful, professional invoices in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/invoice">
            <Button size="lg" className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 rounded-2xl font-semibold">
              Start Creating Now <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
          <div className="flex items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Always free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

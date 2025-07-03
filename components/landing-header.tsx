"use client"

import { Button } from '@/components/ui/button'
import { Receipt } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function LandingHeader() {
  return (
    <header className="container mx-auto px-4 py-6 relative z-10">
      <nav className="flex items-center justify-between backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl px-6 py-4 border border-white/20 dark:border-gray-700/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
            <Receipt className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">InvoiceGen</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/invoice">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
              Create Invoice
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

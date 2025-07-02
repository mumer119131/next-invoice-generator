"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FileText, 
  Calculator, 
  Download, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Receipt,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function LandingPage() {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Create beautiful, professional invoices that make your business look great."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Automatic Calculations",
      description: "Real-time calculations for subtotals, taxes, and totals. No math errors."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export to PDF",
      description: "Download your invoices as PDF files ready to send to clients."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate invoices in seconds, not minutes. Built for speed and efficiency."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Works Everywhere",
      description: "Access from any device with a web browser. No software to install."
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Complete Invoice Data",
      description: "Include all necessary information: contact details, items, taxes, and notes."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "This tool has saved me hours every week. Creating professional invoices is now effortless!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      content: "Clean, professional invoices that make my business look established. Love the simplicity!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Consultant",
      content: "Finally, an invoice generator that doesn't complicate things. Perfect for my needs.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">InvoiceGen</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/invoice">
              <Button variant="outline">Create Invoice</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Create Professional 
            <span className="text-blue-600 dark:text-blue-400"> Invoices </span>
            in Seconds
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate beautiful, professional invoices with automatic calculations, 
            tax handling, and PDF export. No registration required.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/invoice">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Creating <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>No Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>Completely Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>Instant PDF Export</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Create Perfect Invoices
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our invoice generator includes all the features you need to create 
            professional invoices that get you paid faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Creating professional invoices has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Fill in Details</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add your business info, client details, and invoice items
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Review & Preview</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check your invoice in our beautiful preview mode
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Download & Send</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Export as PDF and send to your clients instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Thousands of Users
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what our users have to say about InvoiceGen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 dark:text-gray-300 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your First Invoice?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust InvoiceGen for their billing needs. 
            Start creating beautiful invoices today.
          </p>
          <Link href="/invoice">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Create Invoice Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Receipt className="w-6 h-6" />
              <span className="text-xl font-bold">InvoiceGen</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 dark:text-gray-500">
                © 2025 InvoiceGen. Made with ❤️ for small businesses and freelancers.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

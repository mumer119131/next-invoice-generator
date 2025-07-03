import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FileText, 
  Calculator, 
  Download, 
  Zap, 
  Star, 
  Receipt,
  Globe
} from 'lucide-react'
import LandingHeader from '@/components/landing-header'
import LandingHero from '@/components/landing-hero'
import LandingCTA from '@/components/landing-cta'

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
      content: "This tool has saved me hours every week. Creating professional invoices now effortless!",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <LandingHero />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full px-6 py-2 mb-6 border border-indigo-200/50 dark:border-indigo-700/50">
            <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional invoicing tools designed to make your business look established 
            and get you paid faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl group-hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800/50 dark:via-slate-700/50 dark:to-slate-800/50"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute inset-0 bg-blue-400/5 bg-[length:60px_60px]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full px-6 py-2 mb-6 border border-green-200/50 dark:border-green-700/50">
              <Download className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get professional invoices in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-2xl shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Fill Details</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Add your business information, client details, and invoice items with our intuitive form
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-2xl shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -inset-4 bg-indigo-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Choose Template</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Select from beautiful templates and preview your invoice in real-time
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-2xl shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -inset-4 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Download & Send</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Export as PDF and send to your clients instantly to get paid faster
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full px-6 py-2 mb-6 border border-amber-200/50 dark:border-amber-700/50">
            <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by Creators
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of professionals who trust InvoiceGen for their business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl group-hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <LandingCTA />

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                <Receipt className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">InvoiceGen</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 dark:text-gray-500 mb-2">
                © 2025 InvoiceGen. Crafted with ❤️ for entrepreneurs worldwide.
              </p>
              <p className="text-sm text-gray-500">
                Making professional invoicing accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

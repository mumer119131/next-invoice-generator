"use client"

import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Trash2, Plus, Download, Eye, Home, Receipt } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

interface InvoiceData {
  invoiceNumber: string
  date: string
  dueDate: string
  fromName: string
  fromAddress: string
  fromEmail: string
  fromPhone: string
  toName: string
  toAddress: string
  toEmail: string
  toPhone: string
  items: InvoiceItem[]
  notes: string
  taxRate: number
}

type InvoiceTemplate = 'modern' | 'classic' | 'minimal' | 'professional'

interface TemplateProps {
  invoice: InvoiceData
  subtotal: number
  taxAmount: number
  total: number
}

// Modern Template (Original)
const ModernTemplate: React.FC<TemplateProps> = ({ invoice, subtotal, taxAmount, total }) => (
  <div className="bg-white shadow-lg rounded-lg p-8 print:shadow-none print:rounded-none text-gray-900">
    <div className="border-b pb-6 mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
          <p className="text-gray-600">#{invoice.invoiceNumber}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Date: {invoice.date}</p>
          <p className="text-sm text-gray-600">Due: {invoice.dueDate}</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
        <div className="text-sm text-gray-600">
          <p className="font-medium">{invoice.fromName}</p>
          <p className="whitespace-pre-line">{invoice.fromAddress}</p>
          <p>{invoice.fromEmail}</p>
          <p>{invoice.fromPhone}</p>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">To:</h3>
        <div className="text-sm text-gray-600">
          <p className="font-medium">{invoice.toName}</p>
          <p className="whitespace-pre-line">{invoice.toAddress}</p>
          <p>{invoice.toEmail}</p>
          <p>{invoice.toPhone}</p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-right">Rate</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoice.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-center">{item.quantity}</TableCell>
              <TableCell className="text-right">${item.rate.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

    <div className="flex justify-end mb-8">
      <div className="w-64">
        <div className="flex justify-between py-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {invoice.taxRate > 0 && (
          <div className="flex justify-between py-2">
            <span>Tax ({invoice.taxRate}%):</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between py-2 border-t font-semibold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>

    {invoice.notes && (
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Notes:</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">{invoice.notes}</p>
      </div>
    )}
  </div>
)

// Classic Template
const ClassicTemplate: React.FC<TemplateProps> = ({ invoice, subtotal, taxAmount, total }) => (
  <div className="bg-white shadow-lg rounded-lg p-8 print:shadow-none print:rounded-none text-gray-900 border-2 border-gray-300">
    <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">INVOICE</h1>
      <p className="text-lg text-gray-600">#{invoice.invoiceNumber}</p>
    </div>

    <div className="grid grid-cols-2 gap-12 mb-8">
      <div>
        <h3 className="text-lg font-serif font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">BILL FROM:</h3>
        <div className="text-sm text-gray-700 leading-relaxed">
          <p className="font-semibold text-base">{invoice.fromName}</p>
          <p className="whitespace-pre-line mt-1">{invoice.fromAddress}</p>
          <p className="mt-1">{invoice.fromEmail}</p>
          <p>{invoice.fromPhone}</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-serif font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">BILL TO:</h3>
        <div className="text-sm text-gray-700 leading-relaxed">
          <p className="font-semibold text-base">{invoice.toName}</p>
          <p className="whitespace-pre-line mt-1">{invoice.toAddress}</p>
          <p className="mt-1">{invoice.toEmail}</p>
          <p>{invoice.toPhone}</p>
        </div>
      </div>
    </div>

    <div className="mb-6">
      <div className="flex justify-between text-sm mb-4">
        <p><span className="font-semibold">Date:</span> {invoice.date}</p>
        <p><span className="font-semibold">Due Date:</span> {invoice.dueDate}</p>
      </div>
    </div>

    <div className="mb-8">
      <table className="w-full border-2 border-gray-800">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="text-left p-3 font-serif">Description</th>
            <th className="text-center p-3 font-serif">Qty</th>
            <th className="text-right p-3 font-serif">Rate</th>
            <th className="text-right p-3 font-serif">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-3 border-b border-gray-300">{item.description}</td>
              <td className="text-center p-3 border-b border-gray-300">{item.quantity}</td>
              <td className="text-right p-3 border-b border-gray-300">${item.rate.toFixed(2)}</td>
              <td className="text-right p-3 border-b border-gray-300">${item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-end mb-8">
      <div className="w-80 border-2 border-gray-800 p-4">
        <div className="flex justify-between py-2 text-sm">
          <span className="font-semibold">Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {invoice.taxRate > 0 && (
          <div className="flex justify-between py-2 text-sm">
            <span className="font-semibold">Tax ({invoice.taxRate}%):</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between py-2 border-t-2 border-gray-800 font-bold text-lg">
          <span>TOTAL:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>

    {invoice.notes && (
      <div className="border-t-2 border-gray-400 pt-4">
        <h3 className="font-serif font-bold text-gray-800 mb-2">NOTES:</h3>
        <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{invoice.notes}</p>
      </div>
    )}
  </div>
)

// Minimal Template
const MinimalTemplate: React.FC<TemplateProps> = ({ invoice, subtotal, taxAmount, total }) => (
  <div className="bg-white shadow-lg rounded-lg p-12 print:shadow-none print:rounded-none text-gray-900">
    <div className="mb-12">
      <h1 className="text-5xl font-light text-gray-900 mb-4">Invoice</h1>
      <div className="flex justify-between items-end">
        <p className="text-2xl font-light text-gray-500">#{invoice.invoiceNumber}</p>
        <div className="text-right text-sm text-gray-500">
          <p>{invoice.date}</p>
          <p>Due: {invoice.dueDate}</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-16 mb-12">
      <div>
        <div className="text-gray-900">
          <p className="text-lg font-medium mb-1">{invoice.fromName}</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p className="whitespace-pre-line">{invoice.fromAddress}</p>
            <p>{invoice.fromEmail}</p>
            <p>{invoice.fromPhone}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Bill To</p>
        <div className="text-gray-900">
          <p className="text-lg font-medium mb-1">{invoice.toName}</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p className="whitespace-pre-line">{invoice.toAddress}</p>
            <p>{invoice.toEmail}</p>
            <p>{invoice.toPhone}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-sm font-medium text-gray-500">
        <div className="col-span-6">Description</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-right">Rate</div>
        <div className="col-span-2 text-right">Amount</div>
      </div>
      {invoice.items.map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100">
          <div className="col-span-6 text-gray-900">{item.description}</div>
          <div className="col-span-2 text-center text-gray-600">{item.quantity}</div>
          <div className="col-span-2 text-right text-gray-600">${item.rate.toFixed(2)}</div>
          <div className="col-span-2 text-right text-gray-900">${item.amount.toFixed(2)}</div>
        </div>
      ))}
    </div>

    <div className="flex justify-end mb-12">
      <div className="w-80 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {invoice.taxRate > 0 && (
          <div className="flex justify-between text-gray-600">
            <span>Tax ({invoice.taxRate}%)</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-xl font-medium text-gray-900 pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>

    {invoice.notes && (
      <div className="border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{invoice.notes}</p>
      </div>
    )}
  </div>
)

// Professional Template
const ProfessionalTemplate: React.FC<TemplateProps> = ({ invoice, subtotal, taxAmount, total }) => (
  <div className="bg-white shadow-lg rounded-lg print:shadow-none print:rounded-none text-gray-900">
    <div className="bg-blue-900 text-white p-8 rounded-t-lg print:rounded-none">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">INVOICE</h1>
          <p className="text-blue-200 text-lg">#{invoice.invoiceNumber}</p>
        </div>
        <div className="text-right text-blue-100">
          <p>Issue Date: {invoice.date}</p>
          <p>Due Date: {invoice.dueDate}</p>
        </div>
      </div>
    </div>

    <div className="p-8">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-3">FROM:</h3>
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-gray-900">{invoice.fromName}</p>
              <p className="whitespace-pre-line mt-1">{invoice.fromAddress}</p>
              <p className="mt-1">{invoice.fromEmail}</p>
              <p>{invoice.fromPhone}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-3">TO:</h3>
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-gray-900">{invoice.toName}</p>
              <p className="whitespace-pre-line mt-1">{invoice.toAddress}</p>
              <p className="mt-1">{invoice.toEmail}</p>
              <p>{invoice.toPhone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="font-bold text-blue-900">Description</TableHead>
              <TableHead className="text-center font-bold text-blue-900">Qty</TableHead>
              <TableHead className="text-right font-bold text-blue-900">Rate</TableHead>
              <TableHead className="text-right font-bold text-blue-900">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoice.items.map((item, index) => (
              <TableRow key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <TableCell className="font-medium">{item.description}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-right">${item.rate.toFixed(2)}</TableCell>
                <TableCell className="text-right font-semibold">${item.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end mb-8">
        <div className="w-80 bg-gray-50 p-6 rounded-lg">
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {invoice.taxRate > 0 && (
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Tax ({invoice.taxRate}%):</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-300 pt-3">
              <div className="flex justify-between text-xl font-bold text-blue-900">
                <span>TOTAL:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {invoice.notes && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h3 className="font-bold text-gray-900 mb-2">Payment Terms & Notes:</h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">{invoice.notes}</p>
        </div>
      )}
    </div>
  </div>
)

export default function InvoiceGenerator() {
  const [invoice, setInvoice] = useState<InvoiceData>({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    fromName: '',
    fromAddress: '',
    fromEmail: '',
    fromPhone: '',
    toName: '',
    toAddress: '',
    toEmail: '',
    toPhone: '',
    items: [{ id: '1', description: '', quantity: 1, rate: 0, amount: 0 }],
    notes: '',
    taxRate: 0
  })

  const [isPreview, setIsPreview] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<InvoiceTemplate>('modern')
  const printRef = useRef<HTMLDivElement>(null)

  const updateInvoice = (field: keyof InvoiceData, value: string | number | InvoiceItem[]) => {
    setInvoice(prev => ({ ...prev, [field]: value }))
  }

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    }
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }))
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate
          }
          return updatedItem
        }
        return item
      })
    }))
  }

  const removeItem = (id: string) => {
    if (invoice.items.length > 1) {
      setInvoice(prev => ({
        ...prev,
        items: prev.items.filter(item => item.id !== id)
      }))
    }
  }

  const subtotal = invoice.items.reduce((sum, item) => sum + item.amount, 0)
  const taxAmount = subtotal * (invoice.taxRate / 100)
  const total = subtotal + taxAmount

  const handlePrint = () => {
    window.print()
  }

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and contemporary design' },
    { id: 'classic', name: 'Classic', description: 'Traditional business style' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant' },
    { id: 'professional', name: 'Professional', description: 'Corporate and formal' }
  ] as const

  const renderTemplate = () => {
    const commonProps = { invoice, subtotal, taxAmount, total }
    
    const TemplateComponent = () => {
      switch (selectedTemplate) {
        case 'modern':
          return <ModernTemplate {...commonProps} />
        case 'classic':
          return <ClassicTemplate {...commonProps} />
        case 'minimal':
          return <MinimalTemplate {...commonProps} />
        case 'professional':
          return <ProfessionalTemplate {...commonProps} />
        default:
          return <ModernTemplate {...commonProps} />
      }
    }

    return (
      <div ref={printRef}>
        <TemplateComponent />
      </div>
    )
  }

  if (isPreview) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        {/* Navigation Header */}
        <header className="container mx-auto px-4 mb-8 print:hidden">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              <Receipt className="w-6 h-6" />
              <span className="text-xl font-bold">InvoiceGen</span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </nav>
        </header>

        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 flex flex-col gap-4 print:hidden">
            <div className="flex gap-4">
              <Button onClick={() => setIsPreview(false)} variant="outline">
                ← Back to Edit
              </Button>
              <Button onClick={handlePrint} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
            
            {/* Template Selector */}
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium">Choose Template:</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {templates.map((template) => (
                  <Button
                    key={template.id}
                    variant={selectedTemplate === template.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTemplate(template.id as InvoiceTemplate)}
                    className="flex flex-col items-center gap-1 h-auto py-3"
                  >
                    <span className="font-medium">{template.name}</span>
                    <span className="text-xs opacity-75">{template.description}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {renderTemplate()}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      {/* Navigation Header */}
      <header className="container mx-auto px-4 mb-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            <Receipt className="w-6 h-6" />
            <span className="text-xl font-bold">InvoiceGen</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Invoice Generator</h1>
          <p className="text-gray-600 dark:text-gray-300">Create professional invoices in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Invoice Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoiceNumber">Invoice Number</Label>
                    <Input
                      id="invoiceNumber"
                      value={invoice.invoiceNumber}
                      onChange={(e) => updateInvoice('invoiceNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={invoice.date}
                      onChange={(e) => updateInvoice('date', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={invoice.dueDate}
                    onChange={(e) => updateInvoice('dueDate', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* From Section */}
            <Card>
              <CardHeader>
                <CardTitle>From</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fromName">Name/Company</Label>
                  <Input
                    id="fromName"
                    value={invoice.fromName}
                    onChange={(e) => updateInvoice('fromName', e.target.value)}
                    placeholder="Your name or company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromAddress">Address</Label>
                  <Textarea
                    id="fromAddress"
                    value={invoice.fromAddress}
                    onChange={(e) => updateInvoice('fromAddress', e.target.value)}
                    placeholder="Your address"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fromEmail">Email</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      value={invoice.fromEmail}
                      onChange={(e) => updateInvoice('fromEmail', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fromPhone">Phone</Label>
                    <Input
                      id="fromPhone"
                      value={invoice.fromPhone}
                      onChange={(e) => updateInvoice('fromPhone', e.target.value)}
                      placeholder="Your phone"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* To Section */}
            <Card>
              <CardHeader>
                <CardTitle>Bill To</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="toName">Name/Company</Label>
                  <Input
                    id="toName"
                    value={invoice.toName}
                    onChange={(e) => updateInvoice('toName', e.target.value)}
                    placeholder="Client name or company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toAddress">Address</Label>
                  <Textarea
                    id="toAddress"
                    value={invoice.toAddress}
                    onChange={(e) => updateInvoice('toAddress', e.target.value)}
                    placeholder="Client address"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="toEmail">Email</Label>
                    <Input
                      id="toEmail"
                      type="email"
                      value={invoice.toEmail}
                      onChange={(e) => updateInvoice('toEmail', e.target.value)}
                      placeholder="client@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="toPhone">Phone</Label>
                    <Input
                      id="toPhone"
                      value={invoice.toPhone}
                      onChange={(e) => updateInvoice('toPhone', e.target.value)}
                      placeholder="Client phone"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Items and Summary */}
          <div className="space-y-6">
            {/* Items */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Items</CardTitle>
                  <Button onClick={addItem} size="sm" className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoice.items.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
                      <div className="col-span-5 space-y-1">
                        {index === 0 && <Label className="text-xs">Description</Label>}
                        <Input
                          value={item.description}
                          onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          placeholder="Item description"
                        />
                      </div>
                      <div className="col-span-2 space-y-1">
                        {index === 0 && <Label className="text-xs">Qty</Label>}
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div className="col-span-2 space-y-1">
                        {index === 0 && <Label className="text-xs">Rate</Label>}
                        <Input
                          type="number"
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div className="col-span-2 space-y-1">
                        {index === 0 && <Label className="text-xs">Amount</Label>}
                        <div className="h-9 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md text-sm font-medium flex items-center">
                          ${item.amount.toFixed(2)}
                        </div>
                      </div>
                      <div className="col-span-1 space-y-1">
                        {index === 0 && <div className="h-4"></div>}
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          disabled={invoice.items.length === 1}
                          className="h-9 w-9"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tax Rate (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    value={invoice.taxRate}
                    onChange={(e) => updateInvoice('taxRate', parseFloat(e.target.value) || 0)}
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  {invoice.taxRate > 0 && (
                    <div className="flex justify-between">
                      <span>Tax ({invoice.taxRate}%):</span>
                      <span className="font-medium">${taxAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-semibold border-t pt-2">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={invoice.notes}
                    onChange={(e) => updateInvoice('notes', e.target.value)}
                    placeholder="Additional notes or payment terms..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button 
                onClick={() => setIsPreview(true)} 
                className="flex-1 flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Preview Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import InvoiceGenerator from "@/components/invoice-generator";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Invoice - InvoiceGen',
  description: 'Generate professional invoices with automatic calculations, tax handling, and PDF export.',
}

export default function InvoicePage() {
  return (
    <InvoiceGenerator />
  );
}

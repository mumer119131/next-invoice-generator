import LandingPage from "@/components/landing-page";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InvoiceGen - Professional Invoice Generator',
  description: 'Create beautiful, professional invoices in seconds. Free invoice generator with automatic calculations, tax handling, and PDF export. No registration required.',
  keywords: 'invoice generator, free invoice, professional invoices, PDF export, billing, freelance, small business',
}

export default function Home() {
  return (
    <LandingPage />
  );
}

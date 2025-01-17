import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">CodeCertify Technologies</h2>
            <p className="mt-2 text-sm">Empowering future tech leaders</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><Facebook /></a>
            <a href="#" className="hover:text-primary"><Twitter /></a>
            <a href="#" className="hover:text-primary"><Linkedin /></a>
            <a href="#" className="hover:text-primary"><Instagram /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Technologies. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-primary mr-4">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


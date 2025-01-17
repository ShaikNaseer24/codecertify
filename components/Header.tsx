'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from './ThemeToggle'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/codecertify.png"
              alt="CodeCertify Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLinks />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="hidden sm:inline-flex bg-primary hover:bg-secondary text-primary-foreground">
              Get Started
            </Button>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-background z-50 overflow-y-auto"
            >
              <div className="p-4">
                <button onClick={toggleMenu} className="mb-4">
                  <X size={24} />
                </button>
                <NavLinks mobile />
                <Button className="w-full mt-4 bg-primary hover:bg-secondary text-primary-foreground">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block py-2 text-foreground hover:text-primary"
    : "text-foreground hover:text-primary";

  return (
    <>
      <Link href="/" className={linkClass}>Home</Link>
      <Link href="/about" className={linkClass}>About</Link>
      <Link href="/courses" className={linkClass}>Courses</Link>
      <Link href="/internships" className={linkClass}>Internships</Link>
      <Link href="/services" className={linkClass}>Services</Link>
      <Link href="/freelance" className={linkClass}>Freelance</Link>
      <Link href="/contact" className={linkClass}>Contact</Link>
    </>
  )
}


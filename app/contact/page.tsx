"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@codecertify.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


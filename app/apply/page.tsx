"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Apply Now</h1>
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="program">Program</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, program: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development Bootcamp</SelectItem>
                  <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                  <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                  <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your background and why you're interested in this program"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="h-32"
              />
            </div>

            <Button type="submit" className="w-full bg-[#FFA500] hover:bg-[#000080]">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}


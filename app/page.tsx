import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">Welcome to CodeCertify Technologies</h1>
        <p className="text-xl mb-8 text-muted-foreground">Empowering the next generation of tech professionals through real-world internships and training</p>
        <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground text-lg py-6 px-8">
          <Link href="/courses">Explore Our Programs</Link>
        </Button>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Internships</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Gain hands-on experience in real-world projects and boost your career prospects.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Training Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Learn cutting-edge technologies from industry experts and stay ahead in the tech world.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Why Choose CodeCertify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Industry-Relevant Skills</h3>
            <p className="text-muted-foreground">Our programs are designed to meet the current demands of the tech industry.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Expert Mentorship</h3>
            <p className="text-muted-foreground">Learn from experienced professionals who are leaders in their fields.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Career Support</h3>
            <p className="text-muted-foreground">Get guidance on job placements and career advancement opportunities.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Ready to Start Your Tech Journey?</h2>
        <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground text-lg py-6 px-8">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  )
}


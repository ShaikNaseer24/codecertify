import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About CodeCertify Technologies</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image src="/about.webp" alt="Team at work" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At CodeCertify Technologies, we are committed to bridging the gap between academic learning and industry requirements. Our mission is to empower aspiring tech professionals with practical skills and real-world experience, preparing them for successful careers in the ever-evolving IT and software industry.
          </p>
          <p>
            Through our innovative internship programs and comprehensive training courses, we aim to create a new generation of tech leaders who are ready to tackle the challenges of tomorrow's digital landscape.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>We stay at the forefront of technological advancements, ensuring our students learn the most relevant and cutting-edge skills.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p>We strive for excellence in everything we do, from our curriculum design to our mentorship programs.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
            <p>We believe in empowering our students with knowledge, skills, and confidence to succeed in their tech careers.</p>
          </div>
        </div>
      </div>

      {/* <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
        <p className="text-center mb-8">
          CodeCertify Technologies is powered by a team of passionate educators, industry veterans, and tech enthusiasts. Our diverse team brings together years of experience from various sectors of the IT and software industry, ensuring that our students receive well-rounded and practical knowledge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {['John Doe', 'Jane Smith', 'Mike Johnson', 'Emily Brown'].map((name) => (
            <div key={name} className="text-center">
              <Image src="/placeholder.svg?height=150&width=150" alt={name} width={150} height={150} className="rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">Tech Expert</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}


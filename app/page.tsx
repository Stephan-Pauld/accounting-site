import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import config from '@/lib/config';

const services = [
  { title: 'Tax Planning', description: 'Comprehensive tax strategies for businesses and individuals.', icon: '📊' },
  { title: 'Bookkeeping', description: 'Accurate and timely bookkeeping services to keep you compliant.', icon: '📚' },
  { title: 'Auditing', description: 'Detailed audits to ensure financial accuracy and compliance.', icon: '🔍' },
  { title: 'Consulting', description: 'Business consulting to help with financial strategy and growth.', icon: '💡' },
];

const testimonials = [
  { quote: "BalanceWorks has transformed the way we handle our finances!", author: "John Doe, CEO of TechCorp" },
  { quote: "Their tax planning services saved us thousands!", author: "Jane Smith, CFO of GrowthInc" },
  { quote: "The most reliable accounting partner we've ever had.", author: "Mike Johnson, Owner of LocalBiz" },
];

const teamMembers = [
  { name: "Kathy Alexander ICIA", role: "Partner", image: "https://www.aswlethbridge.ca/wp-content/uploads/2018/10/Kathy-Alexander-225x300.jpg" },
  { name: "Brenda Sapriken ICIA", role: "Partner", image: "https://www.aswlethbridge.ca/wp-content/uploads/2021/02/Brenda-Resized-212x300.jpg" },
  { name: "Kelly Waldron ICIA", role: "Partner", image: "https://www.aswlethbridge.ca/wp-content/uploads/2018/10/Kelly-Waldron-1-225x300.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Precision, Clarity, and Growth for Your Finances</h1>
            <p className="text-xl mb-8">Expert accounting services tailored to your business needs</p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#F4A261] text-[#1D3557] hover:bg-[#E76F51]">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:text-[#1D3557] hover:bg-white">
                  See Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1D3557]">About {config.companyName}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              With over 10 years of experience and trusted by 500+ businesses, {config.companyName} is your partner in financial success. Our team of experts specializes in tax planning, bookkeeping, and audits, providing tailored solutions for your business needs.
            </p>
            <Link href="/about">
              <Button variant="outline" className="text-[#1D3557] border-[#1D3557] hover:bg-[#1D3557] hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-[#F1F1F1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1D3557]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="text-[#1D3557] border-[#1D3557] hover:bg-[#1D3557] hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1D3557]">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#F4A261]">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#1D3557] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white text-[#1D3557]">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-[#F4A261]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1D3557]">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8 text-[#1D3557]">Let's work together to achieve your financial goals.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#1D3557] text-white hover:bg-[#2A4A73]">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
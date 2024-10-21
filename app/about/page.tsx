import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Thompson",
    title: "Founder & CEO",
    credentials: "CPA, MBA",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bio: "Sarah has over 15 years of experience in accounting and financial management. She founded BalanceWorks with a vision to provide personalized financial services to small and medium-sized businesses."
  },
  {
    name: "Michael Chen",
    title: "Senior Tax Specialist",
    credentials: "CPA, MST",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bio: "Michael specializes in tax planning and strategy. With his extensive knowledge of tax laws, he helps clients minimize their tax liabilities while ensuring full compliance."
  },
  {
    name: "Emily Rodriguez",
    title: "Lead Auditor",
    credentials: "CPA, CIA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    bio: "Emily leads our audit team, ensuring financial accuracy and compliance for our clients. Her attention to detail and analytical skills are unmatched in the industry."
  },
  {
    name: "David Park",
    title: "Financial Consultant",
    credentials: "CFP, MBA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    bio: "David brings a wealth of experience in financial planning and strategy. He works closely with clients to develop comprehensive financial plans tailored to their unique needs and goals."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#1D3557]">About BalanceWorks</h1>

        {/* Company Overview */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Founded in 2010, BalanceWorks has grown from a small local accounting firm to a trusted financial partner for small and medium-sized businesses across the country. Our journey began with a simple yet powerful idea: to provide expert financial services that empower businesses to thrive in an ever-changing economic landscape.
              </p>
              <p>
                At BalanceWorks, we understand that each business has unique financial needs and challenges. That's why we've built a team of experienced professionals who are not just skilled in accounting and finance, but are also passionate about helping businesses succeed. Our approach combines cutting-edge technology with personalized service, ensuring that our clients receive the most accurate, timely, and relevant financial guidance.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mission Statement */}
        <section className="mb-16 bg-[#1D3557] text-white py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            "Our mission is to empower businesses with the financial clarity they need to grow and succeed. We are committed to providing expert, personalized financial services that help our clients make informed decisions, optimize their operations, and achieve their goals."
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1D3557]">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col md:flex-row items-center p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-[#F4A261] mb-1">{member.title}</p>
                    <p className="text-sm mb-2">{member.credentials}</p>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1D3557]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Trust", description: "We build long-lasting relationships with our clients based on mutual trust and respect." },
              { title: "Transparency", description: "We believe in clear, open communication and full disclosure in all our financial practices." },
              { title: "Accuracy", description: "We are committed to delivering precise, reliable financial information and advice." }
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
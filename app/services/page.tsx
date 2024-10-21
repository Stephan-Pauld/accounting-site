import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calculator, BookOpen, Search, LightbulbIcon, PieChart, DollarSign, TrendingUp, Shield, BarChart } from "lucide-react";

const services = [
  {
    title: "Tax Planning",
    icon: <Calculator className="w-12 h-12 text-[#F4A261]" />,
    description: "Our tax planning services are designed to maximize your savings and keep you compliant with ever-changing tax regulations.",
    benefits: [
      "Custom tax strategies tailored to your business",
      "Year-round support and tax filing services",
      "Audit representation if necessary"
    ]
  },
  {
    title: "Bookkeeping",
    icon: <BookOpen className="w-12 h-12 text-[#F4A261]" />,
    description: "Accurate, timely, and stress-free bookkeeping services to keep your finances in order.",
    benefits: [
      "Daily, weekly, or monthly bookkeeping services",
      "Full financial reporting for better decision-making",
      "Payroll processing and management"
    ]
  },
  {
    title: "Auditing",
    icon: <Search className="w-12 h-12 text-[#F4A261]" />,
    description: "Ensure your financial statements are accurate and compliant with our comprehensive auditing services.",
    benefits: [
      "In-depth financial statement reviews",
      "Compliance with GAAP and other accounting standards",
      "Detailed audit reports and recommendations"
    ]
  },
  {
    title: "Business Consulting",
    icon: <LightbulbIcon className="w-12 h-12 text-[#F4A261]" />,
    description: "Strategic advice to help your business grow and thrive in today's competitive market.",
    benefits: [
      "Business plan development and review",
      "Financial forecasting and budgeting",
      "Performance improvement strategies"
    ]
  },
  {
    title: "Financial Analysis",
    icon: <PieChart className="w-12 h-12 text-[#F4A261]" />,
    description: "Gain deep insights into your financial performance with our expert analysis services.",
    benefits: [
      "Comprehensive financial statement analysis",
      "Ratio analysis and benchmarking",
      "Trend analysis and forecasting"
    ]
  },
  {
    title: "Cash Flow Management",
    icon: <DollarSign className="w-12 h-12 text-[#F4A261]" />,
    description: "Optimize your cash flow to ensure your business always has the liquidity it needs.",
    benefits: [
      "Cash flow forecasting and planning",
      "Working capital optimization",
      "Credit management strategies"
    ]
  },
  {
    title: "Financial Planning",
    icon: <TrendingUp className="w-12 h-12 text-[#F4A261]" />,
    description: "Comprehensive financial planning services to help you achieve your long-term goals.",
    benefits: [
      "Retirement planning for business owners",
      "Investment strategy development",
      "Risk management and insurance review"
    ]
  },
  {
    title: "Fraud Prevention",
    icon: <Shield className="w-12 h-12 text-[#F4A261]" />,
    description: "Protect your business from financial fraud with our preventive measures and detection strategies.",
    benefits: [
      "Internal control system design and implementation",
      "Fraud risk assessments",
      "Employee training on fraud prevention"
    ]
  },
  {
    title: "Financial Reporting",
    icon: <BarChart className="w-12 h-12 text-[#F4A261]" />,
    description: "Clear, accurate, and timely financial reports to keep you informed about your business's performance.",
    benefits: [
      "Custom report design tailored to your needs",
      "Regular financial statement preparation",
      "Management reporting and KPI tracking"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#1D3557]">Our Services</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          At BalanceWorks, we offer a comprehensive suite of financial services designed to help your business thrive. 
          From tax planning to fraud prevention, our expert team is here to support all your accounting needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-center mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center mb-4">{service.description}</CardDescription>
                <ul className="list-disc list-inside space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1D3557]">Let's Discuss Your Accounting Needs</h2>
          <p className="text-xl mb-8">
            Ready to take your financial management to the next level? Our team of experts is here to help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#F4A261] text-[#1D3557] hover:bg-[#E76F51] text-lg py-6 px-8">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
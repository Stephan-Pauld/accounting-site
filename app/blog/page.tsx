import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: 'Understanding Tax Deductions for Small Businesses',
    description: 'Learn about the various tax deductions available for small businesses and how to maximize your savings.',
    date: 'May 15, 2023',
    slug: 'understanding-tax-deductions'
  },
  {
    title: 'The Importance of Accurate Bookkeeping',
    description: 'Discover why maintaining accurate books is crucial for your business's financial health and decision-making process.',
    date: 'April 22, 2023',
    slug: 'importance-of-accurate-bookkeeping'
  },
  {
    title: 'Preparing for an Audit: What You Need to Know',
    description: 'Get insights on how to prepare for a business audit and ensure a smooth process.',
    date: 'March 10, 2023',
    slug: 'preparing-for-audit'
  },
  {
    title: 'Financial Planning for Business Growth',
    description: 'Learn strategies for effective financial planning to support and drive your business growth.',
    date: 'February 5, 2023',
    slug: 'financial-planning-business-growth'
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">BalanceWorks Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import config from '@/lib/config';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            {config.companyName}
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-foreground hover:text-primary">Home</Link>
            <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About Us</Link>
            <Link href="/blog" className="text-foreground hover:text-primary">Blog</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#E76F51] hover:text-white">
              Book Consultation
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
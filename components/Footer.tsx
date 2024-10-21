import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import config from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">{config.companyName}</h3>
            <p className="text-sm">Professional accounting services for your business success.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">{config.address}<br />Phone: {config.phone}<br />Email: {config.email}</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={config.socialMedia.facebook} className="hover:text-accent"><Facebook size={24} /></a>
              <a href={config.socialMedia.twitter} className="hover:text-accent"><Twitter size={24} /></a>
              <a href={config.socialMedia.linkedin} className="hover:text-accent"><Linkedin size={24} /></a>
              <a href={config.socialMedia.instagram} className="hover:text-accent"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {config.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
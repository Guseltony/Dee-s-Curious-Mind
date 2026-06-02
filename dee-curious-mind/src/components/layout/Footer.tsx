import React from "react";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 font-inter border-t border-slate-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group text-white">
            <div className="p-2 bg-primary text-white rounded-xl">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight font-poppins">
              Dee's <span className="text-primary-hover">Curious Minds</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            A premium childminding and childcare service that parents trust. We provide a nurturing home environment filled with creativity, exploration, and individual care.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-xl transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-xl transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold font-poppins text-lg">Quick Links</h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition-colors">Photo Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact & Enquiries</Link>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold font-poppins text-lg">Opening Hours</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-white">Mon – Fri:</p>
                <p className="text-xs text-slate-400">7:30 AM – 6:00 PM</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-slate-600 shrink-0" />
              <div>
                <p className="font-semibold text-slate-400">Sat – Sun:</p>
                <p className="text-xs text-slate-500">Closed</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold font-poppins text-lg">Contact Us</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>123 Curious Lane, Childcare District, London, UK</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+441234567890" className="hover:text-primary transition-colors">+44 123 456 7890</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@deescuriousminds.co.uk" className="hover:text-primary transition-colors">info@deescuriousminds.co.uk</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-slate-950 text-xs text-slate-500 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Dee's Curious Minds Childcare. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

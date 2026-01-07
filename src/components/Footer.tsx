
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Leaf } from 'lucide-react';
import { COMPANY } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-dark text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-emerald-light" />
              <span className="text-2xl font-serif font-bold text-white">Nusarasa</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Membawa keindahan dan kekayaan alam Indonesia langsung ke genggaman Anda. Fokus pada kualitas, keberlanjutan, dan tradisi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-light transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-light transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-light transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Koleksi Produk</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Kategori</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Makanan</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Minuman</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-light shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-light shrink-0" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-light shrink-0" />
                <span>{COMPANY.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 mt-8 text-center text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} Nusarasa Indonesia. All rights reserved. Crafted with passion for Archipelago.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

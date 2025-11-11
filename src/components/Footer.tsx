import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-red-500" />
              <div>
                <h1 className="text-xl font-black">UNFILTERED</h1>
                <p className="text-xs text-red-500 -mt-1">PERFORMANCE</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Premium diesel truck repair and performance modifications. 
              Unleash your truck's true potential.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-400 hover:text-white transition-colors">
                  Parts
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Performance Tuning</li>
              <li>Engine Rebuild</li>
              <li>Maintenance</li>
              <li>Diagnosis & Repair</li>
              <li>Custom Builds</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">info@unfilteredperformance.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-red-500 mt-1" />
                <div className="text-gray-400">
                  <p>123 Performance Drive</p>
                  <p>Diesel City, DC 12345</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-red-900 rounded">
              <p className="text-sm">
                <strong>Emergency Service:</strong><br />
                (555) 911-HELP
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Unfiltered Performance. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <Link to="/admin" className="text-gray-400 hover:text-white text-sm transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
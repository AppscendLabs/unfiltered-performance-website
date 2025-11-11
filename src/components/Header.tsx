import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-red-500" />
            <div>
              <h1 className="text-xl font-black">UNFILTERED</h1>
              <p className="text-xs text-red-500 -mt-1">PERFORMANCE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-red-500 transition-colors ${isActive('/') ? 'text-red-500' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-red-500 transition-colors ${isActive('/services') ? 'text-red-500' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/parts" 
              className={`hover:text-red-500 transition-colors ${isActive('/parts') ? 'text-red-500' : ''}`}
            >
              Parts
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-red-500 transition-colors ${isActive('/contact') ? 'text-red-500' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`hover:text-red-500 transition-colors ${isActive('/') ? 'text-red-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`hover:text-red-500 transition-colors ${isActive('/services') ? 'text-red-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/parts" 
                className={`hover:text-red-500 transition-colors ${isActive('/parts') ? 'text-red-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Parts
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-red-500 transition-colors ${isActive('/contact') ? 'text-red-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
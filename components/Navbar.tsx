import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 text-2xl font-bold">
                CloudHost
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Login
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <a href="#features" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              Features
            </a>
            <a href="#pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              Pricing
            </a>
            <a href="#testimonials" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              Testimonials
            </a>
            <a href="#faq" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              FAQ
            </a>
            <a href="#contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              Contact
            </a>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium bg-blue-600 text-white">
              Login
            </a>
          </div>
        </div>}
    </nav>;
};
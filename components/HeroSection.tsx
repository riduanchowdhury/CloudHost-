import React from 'react';
import { ServerIcon, ShieldCheckIcon, ZapIcon } from 'lucide-react';
export const HeroSection = () => {
  return <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              High-Performance Cloud Hosting for Your Business
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Reliable, secure, and scalable hosting solutions with 99.9% uptime
              guarantee and 24/7 expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center transition-colors">
                View Plans
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium text-center transition-colors">
                Contact Sales
              </a>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 mr-2" />
                <span>Secure</span>
              </div>
              <div className="flex items-center">
                <ZapIcon className="h-6 w-6 mr-2" />
                <span>Fast</span>
              </div>
              <div className="flex items-center">
                <ServerIcon className="h-6 w-6 mr-2" />
                <span>Reliable</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80" alt="Server room" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
      </div>
    </div>;
};
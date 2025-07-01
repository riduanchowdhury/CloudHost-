import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export const SpecsSection = () => {
  const specs = [{
    category: 'Hardware',
    items: ['Latest Intel Xeon Processors', 'NVMe SSD Storage', 'Enterprise-grade SSDs in RAID', 'Redundant Power Supply', 'Multiple Network Interfaces']
  }, {
    category: 'Network',
    items: ['99.9% Uptime Guarantee', 'Global CDN with 50+ Locations', 'DDoS Protection', '1Gbps Network Ports', 'Multiple Tier-1 Carriers']
  }, {
    category: 'Security',
    items: ['Free SSL Certificates', 'Web Application Firewall', 'Automated Malware Scanning', 'IP Blocking & Filtering', 'Two-Factor Authentication']
  }, {
    category: 'Software',
    items: ['Latest PHP, MySQL, Node.js', 'One-click Application Installer', 'Automated Daily Backups', 'Git Integration', 'Custom Control Panel']
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Technical Specifications
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our infrastructure is built with the latest technology to ensure
            optimal performance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((spec, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {spec.category}
              </h3>
              <ul className="space-y-3">
                {spec.items.map((item, idx) => <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};
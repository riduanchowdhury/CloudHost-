import React from 'react';
import { CloudIcon, LockIcon, GaugeIcon, RefreshCwIcon, HeadphonesIcon, ServerIcon } from 'lucide-react';
export const FeaturesSection = () => {
  const features = [{
    icon: <CloudIcon className="h-10 w-10 text-blue-600" />,
    title: 'Cloud Infrastructure',
    description: 'Powered by the latest cloud technology for maximum reliability and performance.'
  }, {
    icon: <LockIcon className="h-10 w-10 text-blue-600" />,
    title: 'Advanced Security',
    description: 'Enterprise-grade security with DDoS protection and SSL certificates included.'
  }, {
    icon: <GaugeIcon className="h-10 w-10 text-blue-600" />,
    title: 'High Performance',
    description: 'SSD storage and optimized servers for lightning-fast website loading times.'
  }, {
    icon: <RefreshCwIcon className="h-10 w-10 text-blue-600" />,
    title: 'Auto Scaling',
    description: 'Resources that automatically scale to handle traffic spikes and growth.'
  }, {
    icon: <HeadphonesIcon className="h-10 w-10 text-blue-600" />,
    title: '24/7 Support',
    description: 'Expert technical support available around the clock to assist you.'
  }, {
    icon: <ServerIcon className="h-10 w-10 text-blue-600" />,
    title: 'Global CDN',
    description: 'Content delivery network with points of presence worldwide for faster access.'
  }];
  return <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose CloudHost
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide industry-leading hosting solutions with features designed
            to power your success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
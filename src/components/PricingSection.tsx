import React from 'react';
import { CheckIcon } from 'lucide-react';
export const PricingSection = () => {
  const plans = [{
    name: 'Starter',
    price: '$9.99',
    period: 'per month',
    description: 'Perfect for small personal websites',
    features: ['1 Website', '10 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL Certificate', '1 Email Account', '24/7 Support'],
    highlighted: false
  }, {
    name: 'Business',
    price: '$24.99',
    period: 'per month',
    description: 'Ideal for growing businesses',
    features: ['Unlimited Websites', '50 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL Certificate', 'Unlimited Email Accounts', 'Priority Support', 'Free Domain for 1 Year', 'Daily Backups'],
    highlighted: true
  }, {
    name: 'Enterprise',
    price: '$49.99',
    period: 'per month',
    description: 'For high-traffic websites',
    features: ['Unlimited Websites', '100 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL Certificate', 'Unlimited Email Accounts', 'Priority Support', 'Free Domain for Life', 'Daily Backups', 'Dedicated IP Address', 'Enhanced Security'],
    highlighted: false
  }];
  return <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`rounded-lg overflow-hidden ${plan.highlighted ? 'ring-2 ring-blue-600 shadow-xl relative' : 'border border-gray-200 shadow-md'}`}>
              {plan.highlighted && <div className="bg-blue-600 text-white text-sm font-medium px-4 py-1 text-center">
                  MOST POPULAR
                </div>}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xl text-gray-500">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>)}
                </ul>
                <div className="mt-8">
                  <a href="#" className={`w-full flex items-center justify-center px-5 py-3 rounded-md text-base font-medium ${plan.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition-colors`}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
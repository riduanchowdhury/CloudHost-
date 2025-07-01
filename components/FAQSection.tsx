import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    question: 'How reliable is your hosting service?',
    answer: 'We guarantee 99.9% uptime for all our hosting plans. Our infrastructure is built with redundancy at every level, and we monitor our systems 24/7 to ensure maximum reliability.'
  }, {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade your hosting plan at any time with just a few clicks from your control panel. The transition is seamless with no downtime for your website.'
  }, {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not completely satisfied with our service within the first 30 days, we'll refund your payment in full."
  }, {
    question: 'How fast is your customer support?',
    answer: 'Our support team is available 24/7/365. Our average ticket response time is under 15 minutes, and we offer live chat support for immediate assistance with technical issues.'
  }, {
    question: 'Do you provide website migration services?',
    answer: 'Yes, we offer free website migration for all new customers. Our technical team will handle the entire process to ensure your website is transferred correctly with minimal downtime.'
  }, {
    question: 'Can I host multiple websites on one account?',
    answer: 'Yes, our Business and Enterprise plans support hosting multiple websites on a single account. The Starter plan is limited to one website only.'
  }];
  return <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our hosting services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
              <button className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
              </button>
              {openIndex === index && <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};
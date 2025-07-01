import React from 'react';
import { MailIcon, PhoneIcon, MessageCircleIcon } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our team is here to help you find the perfect
            hosting solution.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help you?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Please provide details about your inquiry..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Call us</p>
                  <p className="text-gray-600">+1 (888) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Email us</p>
                  <p className="text-gray-600">support@cloudhost.com</p>
                  <p className="text-gray-500 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MessageCircleIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Live Chat</p>
                  <p className="text-gray-600">Chat with our support team</p>
                  <p className="text-gray-500 text-sm">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 text-sm">
                <strong>Looking for sales information?</strong> Our sales team
                is available for personalized consultations to help you choose
                the right hosting solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
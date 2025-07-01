import React from 'react';
import { StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    content: 'CloudHost has been instrumental in scaling our e-commerce platform. The performance is exceptional, and their support team is always quick to respond to our needs.',
    author: 'Sarah Johnson',
    position: 'CTO, ShopWave',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
  }, {
    content: "Since moving our company website to CloudHost, we've seen a significant improvement in load times and overall reliability. Their security features give us peace of mind.",
    author: 'Michael Chen',
    position: 'Web Developer, TechSolutions',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }, {
    content: "As a digital agency managing multiple client websites, CloudHost's platform has made our job so much easier. The dashboard is intuitive, and the uptime is rock solid.",
    author: 'Emma Rodriguez',
    position: 'Director, PixelPerfect Agency',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  }];
  return <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of businesses worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
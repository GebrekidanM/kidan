import React from 'react';
import { Button } from '../../components/ui/button'; 
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind, a job opportunity, or just want to say hello? I'd love to hear from you. Fill out the form below or connect with me on social media.
        </p>

        <div className="max-w-xl mx-auto">
          <form 
            action="https://formspree.io/f/xrbabvev"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full font-semibold bg-neutral-400 text-white hover:bg-neutral-500 duration-700 cursor-pointer">
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Or connect with me here:</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/GebrekidanM" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              >
                <Github className="w-8 h-8" />
              </a>

              <a 
                href="https://www.linkedin.com/in/kidangebre-mequanint" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Others Say
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-xl italic text-gray-700 leading-relaxed">
              "Gebrekidan was a pleasure to work with, delivering excellent results ahead of schedule. Highly recommended!"
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              - Upwork Client
            </p>
          </div>
          
          {/* Placeholder for your next testimonial */}
          <div className="mt-8 p-8 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-xl italic text-gray-700 leading-relaxed">
              "The 'Nitsuh Academy' software has streamlined our operations and saved our teachers countless hours. We are thrilled with the result."
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              - Director, Freedom Kg and Primary School
            </p>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
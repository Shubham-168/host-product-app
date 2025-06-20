import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen mt-5 flex flex-col justify-between">
      {/* Main About Content */}
      <div className="py-12 px-6 md:px-16 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-green-600">Shubham Trendz</span>, we believe beauty should be simple, effective, and cruelty-free. 
            Our products are designed to bring out your natural elegance while being kind to animals and the environment.
          </p>
          <p className="text-md text-gray-500 mt-6">
            Founded in 2025, we’ve served thousands of happy customers with high-quality mascara and other beauty products.
            We focus on quality, transparency, and customer satisfaction above all else.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-6 mt-10 md:mb-2 border-t">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Shubham Trendz. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <a href="/privacy" className="hover:text-green-600 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-green-600 transition">Terms of Service</a>
            <a href="/contact" className="hover:text-green-600 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

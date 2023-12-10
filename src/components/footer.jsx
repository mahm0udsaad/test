import React from 'react';

const Footer = (props) => {
  return (
    <footer className="bg-zinc-700 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Watch the Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Channels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Scale</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investor Relations</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Partners</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Media Kit</h3>
          </div>
        </div>
        <div className="mt-12 text-center text-lg">
          © 2023 Lookscout. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

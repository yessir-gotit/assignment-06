import React from 'react';
import fbImg from './assets/Facebook.png';
import twitterImg from './assets/Twitter.png';
import instaImg from './assets/Instagram.png';

const Footer = () => {
  return (

    <footer className="flex w-full justify-center bg-[#101727] pt-20 pb-8">

      <div className="flex w-full max-w-[1600px] flex-col px-8">

        <div className="flex w-full justify-between">
          <div className="flex w-[320px] flex-col">
            <h2 className="text-4xl font-bold text-white">
              DigiTools
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#94a3b8]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex gap-22.5">

            <div className="flex flex-col">
              <h3 className="mb-6 text-[18px] font-medium text-white">Product</h3>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Features</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Templates</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Integrations</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-[18px] font-medium text-white">Company</h3>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">About</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Blog</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Careers</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Press</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-[18px] font-medium text-white">Resources</h3>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Community</a></li>
                <li><a href="#" className="text-[15px] text-gray-400 transition-colors hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-[18px] font-medium text-white">Social Links</h3>
              <div className="flex items-center gap-4">

                <a href="#" className="transition-opacity hover:opacity-80">
                  <img src={instaImg} alt="Instagram" className="h-10 w-10" />
                </a>
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img src={fbImg} alt="Facebook" className="h-10 w-10" />
                </a>
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img src={twitterImg} alt="Twitter" className="h-10 w-10" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="my-10 h-[1px] w-full bg-gray-700"></div>

        {/* Legal Section */}
        <div className="flex w-full items-center justify-between text-[14px] text-gray-400">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

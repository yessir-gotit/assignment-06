import React from 'react';

const CTA = () => {
  return (
    
    <section className="flex w-full justify-center bg-linear-to-r from-[#6230fc] to-[#a33efa] py-28">
      
      <div className="flex w-full max-w-[1600px] flex-col items-center px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-[48px] font-extrabold text-white">
          Ready To Transform Your Workflow?
        </h2>
        {/* Sub Heading */}
        <p className="mt-5 text-[18px] leading-relaxed text-white">
          Join thousands of professionals who are already using Digitools to work smarter. <br />
          Start your free trial today.
        </p>

        {/* Buttons Container */}
        <div className="mt-10 flex items-center gap-5">
          {/* First Button */}
          <button className="btn h-[52px] rounded-full border-none bg-white px-8 text-[16px] font-medium  text-[#7b3dfd] transition-all hover:bg-gray-100">
            Explore Products
          </button>
          
          {/* Second Button */}
          <button className="btn h-[52px] rounded-full border border-white bg-transparent px-8 text-[16px] font-medium  text-white transition-all hover:border-white hover:bg-white/10">
            View Pricing
          </button>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-[14px] font-normal text-gray-100">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTA;
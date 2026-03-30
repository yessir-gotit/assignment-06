import React from 'react';
import userImg from './assets/user.png';
import packageImg from './assets/package.png'; 
import rocketImg from './assets/rocket.png';

const Steps = () => {
  return (

    <section className="flex w-full justify-center bg-[#F9FAFC] py-24  text-black">
      
      <div className="flex w-full max-w-[1600px] flex-col items-center px-8">
        
        {/* Section Start */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[44px] font-extrabold text-black">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-[17px] text-[#6b7280]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Cards Container */}
        <div className="mt-16 flex h-full min-h-[380px] w-full justify-center gap-8">
          
          {/* Card 1 */}
          <div className="relative flex w-[380px] flex-col items-center rounded-[20px] border border-gray-100 bg-white px-8 py-12 shadow-lg hover:-translate-y-4 transition-all">
            <div className="absolute right-6 top-6 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] text-sm font-bold text-white">
              01
            </div>
            
            <div className="mb-6 mt-6 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#f4ebff] ">
              <img src={userImg} alt="Create Account" className="h-12 w-12" />
            </div>
            
            <h3 className="mb-3 mt-5 text-[22px] font-bold text-black leading-none">
              Create Account
            </h3>
            
            <p className="text-center text-[15px] text-gray-600">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative flex w-95 flex-col items-center rounded-[20px] border border-gray-100 bg-white px-8 py-12 shadow-lg hover:-translate-y-4 transition-all">
            <div className="absolute right-6 top-6 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] text-[13px] font-bold text-white">
              02
            </div>
            
            <div className="mb-6 mt-6 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#f4ebff]">
              <img src={packageImg} alt="Choose Products" className="h-12 w-12" />
            </div>
            
            <h3 className="mb-3 mt-5 text-[22px] font-bold text-black leading-none">
              Choose Products
            </h3>
            
            <p className="text-center text-[15px] text-[#6b7280]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative flex w-[380px] flex-col items-center rounded-[20px] border border-gray-100 bg-white px-8 py-12 shadow-lg hover:-translate-y-4 transition-all">
            <div className="absolute right-6 top-6 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] text-[13px] font-bold text-white">
              03
            </div>
            
            <div className="mb-6 mt-6 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#f4ebff]">
              <img src={rocketImg} alt="Start Creating" className="h-12 w-12" />
            </div>
            
            <h3 className="mb-3 mt-5 text-[22px] font-bold text-black leading-none">
              Start Creating
            </h3>
            
            <p className="text-center text-[15px] leading-relaxed text-[#6b7280]">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;
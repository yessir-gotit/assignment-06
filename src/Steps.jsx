import React from "react";
import userImg from './assets/user.png';
import packageImg from "./assets/package.png" 
import rocketImg from './assets/rocket.png';

const Steps = () => {
  
  // thought about putting this in an array and mapping it but it's only a few steps also it's optional, saw it on group, I'll pass the map method
  return (
    <section className='flex w-full justify-center bg-gray-50 py-16 md:py-24 text-black'>
      
      <div className="flex w-full max-w-[1600px] flex-col items-center px-6 md:px-8">
        
         {/* section header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black">
            Get Started In 3 Steps
          </h2>
           <p className="mt-4 text-sm md:text-[17px] text-gray-500">
             Start using premium digital tools in minutes, not hours.
           </p>
        </div>

        {/* cards wrapper */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row w-full justify-center gap-6 md:gap-8">
          
          {/* card 1 */}
          <div className="relative flex w-full md:w-95 flex-col items-center rounded-[20px] border border-gray-100 bg-white px-8 py-12 shadow-lg hover:-translate-y-4 transition-all">
            
             <div className="absolute right-6 top-6 flex h-8.5 w-8.5 items-center justify-center rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] text-sm font-bold text-white">
               01
             </div>
            <div className='mb-6 mt-6 flex h-26 w-26 items-center justify-center rounded-full bg-white'>
              <img src={userImg} alt="Create Account" className="h-12 w-12" />
            </div>
            <h3 className="mb-3 mt-5 text-2xl font-bold text-black leading-none">
               Create Account
            </h3>
             <p className="text-center text-[15px] text-gray-600">
               Sign up for free in seconds. No credit card required to get started.
             </p>
          </div>

          {/* card 2 */}
           <div className="relative flex w-full md:w-[380px] flex-col items-center rounded-[20px] border border-gray-100 bg-white px-8 py-12 shadow-lg hover:-translate-y-4 transition-all">
            

             <div className="absolute right-6 top-6 flex h-8.5 w-8.5 items-center justify-center rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] text-[13px] font-bold text-white">
               02
             </div>
            <div className="mb-6 mt-6 flex h-26 w-26 items-center justify-center rounded-full bg-[#f4ebff]">
              
               <img src={packageImg} alt='Choose Products' className="h-12 w-12" />
            </div>
            <h3 className="mb-3 mt-5 text-[22px] font-bold text-black leading-none">
              Choose Products
            </h3>
            
            <p className="text-center text-[15px] text-gray-600">
              
              Browse our catalog and select the tools that fit your needs.
            </p>
            
          </div>

           {/* card 3 */}
          <div className="relative flex w-full md:w-95 flex-col items-center rounded-[20px] border border-gray-100 bg-white px-8 py-12 shadow-lg hover:-translate-y-4 transition-all">
            <div className="absolute right-6 top-6 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] text-[13px] font-bold text-white">
              03
            </div>
            
            
            <div className="mb-6 mt-6 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#f4ebff]">
              <img src={rocketImg} alt="Start Creating" className="h-12 w-12"  />
            </div>
             <h3 className="mb-3 mt-5 text-[22px] font-bold text-black leading-none">
               Start Creating
             </h3>
            
            <p className="text-center text-[15px] leading-relaxed text-gray-600">
               Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Steps;
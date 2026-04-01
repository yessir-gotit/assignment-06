import React from "react";
import bannerImg from './assets/banner.png';
import groupImg from "./assets/group.png" 
import playImg from './assets/Play.png';

const Hero = () => {


  return (
    <section className='flex bg-white w-full justify-center pt-10 pb-16 lg:pb-24 text-black'>
      
      <div className="flex w-full max-w-[1600px] flex-col lg:flex-row items-center justify-between px-6 lg:px-8">
    
          {/* left side content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-10 order-2 lg:order-1">
          
            {/* badge */}
           <div className='flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[13px] md:text-[14px] font-medium text-purple-600'>
              <img src={groupImg} alt="badge icon" className="h-4 w-4" />
             <span>New: AI-Powered Tools Available</span>
           </div>

          {/* heading */}
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black">
            Supercharge Your <br className='hidden md:block' /> Digital Workflow
          </h1>

          {/* Todo: gotta make it responsive  */}
           <p className="mt-6 max-w-135 text-[16px] md:text-[18px] leading-[1.6] text-gray-500">
             Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
           </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">

              <button className='btn w-full sm:w-auto h-13 rounded-full border-none bg-purple-500 px-8 text-[16px] font-medium text-white hover:bg-[#6829e6]'>
                Explore Products
              </button>
              
               <button className="btn w-full sm:w-auto h-13 rounded-full border border-purple-600 bg-white px-8 text-[16px] font-medium text-purple-600 shadow-none hover:bg-gray-100">
                 <img src={playImg} alt='play icon' className="mr-1 h-5 w-5" />
                 Watch Demo
               </button>

            </div>
          
        </div>
        
         {/* right side - banner image */}
        <div className="flex justify-center lg:justify-end lg:pl-10 mb-12 lg:mb-0 order-1 lg:order-2">
           <img 
             src={bannerImg} 
             alt="Digital Workflow Interface" 
             className='w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] rounded-2xl'
           />
        </div>

      </div>
    </section>
  )
}

export default Hero;
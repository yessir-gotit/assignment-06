import React from 'react';
import bannerImg from './assets/banner.png';
import groupImg from './assets/group.png';
import playImg from './assets/Play.png';

const Hero = () => {
  return (
    <section className="flex w-full justify-center bg-white pt-10 pb-24 text-black">
      
      <div className="flex w-full max-w-[1600px] items-center justify-between px-8">
    
        <div className="flex flex-col items-start pr-10">
          
          <div className="flex items-center gap-2 rounded-full bg-[#E1E7FF] px-4 py-1.5 text-[14px] font-medium text-[#7b3dfd]">
            <img src={groupImg} alt="badge icon" className="h-4 w-4" />
            <span>New: AI-Powered Tools Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 text-[72px] font-extrabold text-[#252835] leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Heading Paragraph */}
          <p className="mt-6 max-w-[540px] text-[18px] leading-[1.6] text-gray-500">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* Hero Buttons */}
          <div className="mt-10 flex items-center gap-5">
            {/* Primary Button */}
            <button className="btn h-[52px] rounded-full border-none bg-[#7b3dfd] px-8 text-[16px] font-medium  text-white transition-colors hover:bg-[#6829e6]">
              Explore Products
            </button>
            
            {/* Secondary Button */}
            <button className="btn h-[52px] rounded-full border border-[#7b3dfd] bg-white px-8 text-[16px] font-medium  text-[#7b3dfd] transition-all hover:border-[#7b3dfd] hover:bg-[#f8f5ff] shadow-none">
              <img src={playImg} alt="play icon" className="mr-1 h-5 w-5" />
              Watch Demo
            </button>
          </div>
          
        </div>
        
        <div className="flex justify-end pl-10">
          <img 
            src={bannerImg} 
            alt="Digital Workflow Interface" 
            className="w-full max-w-[500px] rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
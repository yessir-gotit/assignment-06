import React from 'react';

const Stats = () => {
  return (
    
    <section className="flex w-full justify-center bg-gradient-to-r from-[#6b35fb] to-[#9c3bf9] py-16">
      
      <div className="flex w-full max-w-[1600px] items-center justify-center gap-[150px]">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[56px] font-bold leading-none text-white">
            50K+
          </h2>
          <p className="mt-3 text-[18px] font-medium text-white">
            Active Users
          </p>
        </div>
        
        <div className="h-[65px] w-[1px] bg-white opacity-85"></div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[56px] font-bold leading-none text-white">
            200+
          </h2>
          <p className="mt-3 text-[18px] font-medium text-white">
            Premium Tools
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="h-[65px] w-[1px] bg-white opacity-85"></div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[56px] font-bold leading-none text-white">
            4.9
          </h2>
          <p className="mt-3 text-[18px] font-medium text-white/90">
            Rating
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
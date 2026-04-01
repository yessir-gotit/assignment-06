import React from "react"

const Stats = () => {

  const statsData = [
    { number: '50K+', label: "Active Users" },
    { number: "200+", label: 'Premium Tools' },
    { number: "4.9", label: "Rating" }
  ];

  return (
    <section className='flex w-full justify-center bg-linear-to-r from-[#6b35fb] to-[#9c3bf9] py-16'>
      
      <div className="flex w-full max-w-[1600px] items-center justify-center flex-col sm:flex-row gap-10 sm:gap-0 px-6">
        
         {/* stat 1 */}
        <div className="flex flex-col items-center justify-center sm:flex-1">
          <h2 className="text-4xl md:text-6xl font-bold leading-none text-white">50K+</h2>
           <p className='mt-3 text-[16px] md:text-[18px] font-medium text-white'>Active Users</p>
        </div>

        <div className="hidden sm:block h-16.25 w-px bg-white opacity-85"></div>

         {/* stat 2 */}
        <div className='flex flex-col items-center justify-center sm:flex-1'>
          <h2 className="text-4xl md:text-6xl font-bold leading-none text-white">200+</h2>
          <p className="mt-3 text-[16px] md:text-[18px] font-medium text-white">Premium Tools</p>
        </div>

         <div className="hidden sm:block h-[65px] w-px bg-white opacity-85"></div>

        {/* stat 3 */}
        <div className="flex flex-col items-center justify-center sm:flex-1">
           <h2 className="text-4xl md:text-6xl font-bold leading-none text-white">4.9</h2>
           <p className="mt-3 text-[16px] md:text-[18px] font-medium text-white">Rating</p>
        </div>

      </div>
    </section>
  )
}

export default Stats;
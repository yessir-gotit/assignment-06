import React from "react"

const CTA = () => {
  return (
    <section className="flex w-full justify-center bg-linear-to-r from-[#6230fc] to-[#a33efa] py-20 md:py-28">

      <div className='flex w-full max-w-[1600px] flex-col items-center px-6 md:px-8 text-center'>

         {/* main heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Ready To Transform Your Workflow?
        </h2>

        {/* sub heading */}
        <p className="mt-5 text-base md:text-lg leading-relaxed text-white">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>

        {/* buttons wrapper */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">

          {/* first button */}
          
          <button className="btn w-full sm:w-auto h-14 rounded-full border-none bg-white px-8 text-base font-medium text-[#7b3dfd] transition-all hover:bg-gray-100">
             Explore Products
          </button>

           {/* second button */}
           <button className='btn w-full sm:w-auto h-14 rounded-full border border-white bg-transparent px-8 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10'>
             View Pricing
           </button>

        </div>

         {/* bottom text */}
        <p className="mt-8 text-xs md:text-sm font-normal text-gray-100">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>

      </div>
    </section>
  )
}

export default CTA
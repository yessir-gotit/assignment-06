import React from 'react';

const Price = () => {
  return (
    
    <section className="flex w-full justify-center bg-white py-24 text-black">
  
      <div className="flex w-full max-w-[1600px] flex-col items-center px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[44px] font-extrabold text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-[17px] text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="mt-16 flex w-full justify-center gap-8">
          
          {/* Card 1 */}
          <div className="flex w-[380px] flex-col rounded-[20px] border border-gray-100 bg-[#F9FAFC] p-10 shadow-lg hover:-translate-y-4 transition-all">
            <h3 className="text-[26px] font-bold text-black">Starter</h3>
            <p className="mt-2 text-[15px] text-gray-600">Perfect for getting started</p>
            
            <div className="mt-6">
              <span className="text-[56px] font-bold leading-none text-black">$0</span>
              <span className="text-[17px] font-medium text-gray-500">/Month</span>
            </div>

            <ul className="mb-10 mt-8 flex flex-1 flex-col gap-4">
              {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature) => (
                <li className="flex items-center gap-3 text-[15px] text-gray-500">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn h-[52px] w-full rounded-full border-none bg-[#7b3dfd] text-[16px] font-medium text-white hover:bg-[#6829e6]">
              Get Started Free
            </button>
          </div>

          {/* Card 2: Pro (Active by default) */}
          <div className="relative flex w-[380px] flex-col rounded-[20px] bg-[#7b3dfd] p-10 shadow-lg hover:-translate-y-4 transition-all">
            {/* "Most Popular" Badge */}
            <div className="absolute -top-[15px] left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-[#FEF3C6] px-5 py-1.5 text-sm font-bold text-[#f59e0b]">
              Most Popular
            </div>

            <h3 className="text-[26px] font-bold text-white">Pro</h3>
            <p className="mt-2 text-[15px] text-gray-100">Best for professionals</p>
            
            <div className="mt-6">
              <span className="text-[56px] font-bold leading-none text-white">$29</span>
              <span className="ml-1 text-[17px] font-medium text-gray-100">/Month</span>
            </div>

            <ul className="mb-10 mt-8 flex flex-1 flex-col gap-4">
              {[
                'Access to all premium tools', 
                'Unlimited templates', 
                'Priority support', 
                'Unlimited projects', 
                'Cloud sync', 
                'Advanced analytics'
              ].map((feature) => (
                <li className="flex items-center gap-3 text-[15px] text-white">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn h-[52px] w-full rounded-full border-none bg-white text-[16px] font-medium text-[#7b3dfd] hover:bg-gray-200">
              Start Pro Trial
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex w-[380px] flex-col rounded-[20px] border border-gray-100 bg-[#F9FAFC] p-10 shadow-lg hover:-translate-y-4 transition-all">
            <h3 className="text-[26px] font-bold text-black">Enterprise</h3>
            <p className="mt-2 text-[15px] text-gray-500">For teams and businesses</p>
            
            <div className="mt-6">
              <span className="text-[56px] font-bold leading-none text-black">$99</span>
              <span className="ml-1 text-[17px] font-medium text-gray-500">/Month</span>
            </div>

            <ul className="mb-10 mt-8 flex flex-col gap-4">
              {[
                'Everything in Pro', 
                'Team collaboration', 
                'Custom integrations', 
                'Dedicated support', 
                'SLA guarantee', 
                'Custom branding'
              ].map((feature) => (
                <li className="flex items-center gap-3 text-[15px] text-gray-500">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn h-[52px] w-full rounded-full border-none bg-[#7b3dfd] text-[16px] font-medium text-white hover:bg-[#6829e6]">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Price;
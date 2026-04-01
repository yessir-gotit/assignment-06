import React, {useState} from "react";

const Nav = () => {
    const [ isOpen, setIsOpen] = useState(false); // mobile state

  return (
    <header className="relative flex w-full justify-center bg-white text-black border-b border-b-gray-200">
       <nav className='flex w-full max-w-[1600px] items-center justify-between px-6 py-5 md:px-8'>

          {/* logo part */}
          <div className="z-50 cursor-pointer text-purple-700 text-3xl md:text-4xl font-extrabold">
            <a href="#">DigiTools</a>
          </div>

        {/* links - hidden on mobile */}
        <div className='hidden md:flex items-center gap-5 lg:gap-8 text-[13px] lg:text-[15px] font-medium'>
            <a href="#" className="hover:text-purple-600 transition-all">Products</a>
          <a href="#" className="hover:text-purple-600 transition-all">Features</a>
           <a href="#" className='hover:text-purple-600 transition-all'>Pricing</a>
          <a href="#" className="hover:text-purple-600 transition-all">Testimonials</a>
          <a href="#" className="hover:text-purple-600 transition-all">FAQ</a>
        </div>

           {/* right side buttons */}
           <div className="hidden md:flex items-center gap-6 text-[15px] font-medium">
             
             {/* copied this svg from svgrepo :) */}
             <button onClick={() => {
               // console.log("cart clicked");
             }}>
               <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black hover:text-purple-500 transition cursor-pointer">
                 <g clipPath="url(#clip0_2_650)">
                   <path d="M4.66663 14C4.66663 13.2636 5.26358 12.6666 5.99996 12.6666C6.73634 12.6666 7.33329 13.2636 7.33329 14C7.33329 14.7363 6.73634 15.3333 5.99996 15.3333C5.26358 15.3333 4.66663 14.7363 4.66663 14ZM9.99996 14C9.99996 13.2636 10.5969 12.6666 11.3333 12.6666C12.0697 12.6666 12.6666 13.2636 12.6666 14C12.6666 14.7363 12.0697 15.3333 11.3333 15.3333C10.5969 15.3333 9.99996 14.7363 9.99996 14ZM2.20439 0.666629C2.27618 0.666627 2.36742 0.66633 2.44788 0.672488C2.53671 0.679298 2.6604 0.696596 2.79293 0.757123C2.94564 0.826913 3.07824 0.933825 3.17834 1.06767L3.21936 1.12626L3.27014 1.21741C3.3141 1.30715 3.33768 1.39101 3.35217 1.45634C3.36967 1.53523 3.38173 1.62611 3.39189 1.69723L3.62561 3.3333H14.0221C14.1207 3.3333 14.2378 3.33298 14.3385 3.34176C14.4318 3.34989 14.5663 3.3688 14.707 3.43681L14.7675 3.46936L14.8418 3.51754C15.0097 3.63655 15.138 3.80513 15.207 4.00061C15.2693 4.17718 15.2627 4.33886 15.2519 4.44527C15.2417 4.54584 15.2196 4.66093 15.2011 4.75777L14.3183 9.39059C14.2614 9.68942 14.2121 9.94932 14.1549 10.1621C14.0955 10.3829 14.0168 10.5984 13.8776 10.8007C13.6671 11.1064 13.3754 11.3478 13.0358 11.4974C12.811 11.5963 12.5847 11.6333 12.3567 11.6504C12.137 11.6668 11.872 11.6666 11.5677 11.6666H5.86259C5.54279 11.6666 5.26532 11.6673 5.03577 11.6497C4.79793 11.6314 4.56201 11.5906 4.32939 11.4837C3.97912 11.3228 3.68255 11.0643 3.47587 10.7389C3.33865 10.5228 3.26692 10.2943 3.21676 10.0612C3.16834 9.83606 3.13162 9.56102 3.0885 9.2441L2.38668 4.08981V4.08915L2.0885 1.99996H1.33329C0.965103 1.99996 0.666626 1.70149 0.666626 1.3333C0.666626 0.965105 0.965103 0.666629 1.33329 0.666629H2.20439ZM4.40946 9.06441C4.45532 9.40146 4.48499 9.6171 4.52014 9.78056C4.55355 9.93589 4.58244 9.99401 4.60152 10.024C4.67041 10.1325 4.76928 10.2185 4.88603 10.2721C4.91837 10.287 4.97961 10.3081 5.13798 10.3203C5.30469 10.3331 5.52239 10.3333 5.86259 10.3333H11.5677C11.8916 10.3333 12.0985 10.3328 12.2571 10.3209C12.4074 10.3097 12.4668 10.2907 12.4987 10.2767C12.6118 10.2268 12.7091 10.1467 12.7793 10.0449C12.799 10.0162 12.8287 9.96121 12.8678 9.81572C12.9091 9.66217 12.9478 9.45929 13.0084 9.14124L13.8613 4.66663H3.81116L4.40946 9.06441Z" fill="#101727"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_650">
                      <rect width="18" height="18" fill="currentColor"/>
                    </clipPath>
                  </defs>
               </svg>
             </button>
             <a href="#" className="hover:text-purple-600">Login</a>
             <button className="h-11 rounded-full bg-linear-to-r from-[#6230fc] to-[#a33efa] px-6 text-white hover:opacity-80 transition-all whitespace-nowrap">
               Get Started
             </button>
           </div>

        {/* hamburger icon for mobile */}
        <button className="md:hidden p-2" onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen)
        }}>
          { isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          )}
        </button>
       </nav>

      {/* mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 md:hidden z-40">
          <div className="flex flex-col items-start px-8 py-8 gap-6 font-medium text-lg">
            
            <a href="#" className="hover:text-purple-600">Products</a>
            <a href="#" className='hover:text-purple-600'>Features</a>
             <a href="#" className="hover:text-purple-600">Pricing</a>
            <a href="#" className="hover:text-purple-600">Testimonials</a>
            <a href="#" className="hover:text-purple-600 border-b w-full pb-4">FAQ</a>

            <div className="flex flex-col w-full gap-5 pt-2">
               <button className="flex items-center gap-3 hover:text-purple-600">
                 <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M4.66663 14C4.66663 13.2636 5.26358 12.6666 5.99996 12.6666C6.73634 12.6666 7.33329 13.2636 7.33329 14C7.33329 14.7363 6.73634 15.3333 5.99996 15.3333C5.26358 15.3333 4.66663 14.7363 4.66663 14ZM9.99996 14C9.99996 13.2636 10.5969 12.6666 11.3333 12.6666C12.0697 12.6666 12.6666 13.2636 12.6666 14C12.6666 14.7363 12.0697 15.3333 11.3333 15.3333C10.5969 15.3333 9.99996 14.7363 9.99996 14ZM2.20439 0.666629C2.27618 0.666627 2.36742 0.66633 2.44788 0.672488C2.53671 0.679298 2.6604 0.696596 2.79293 0.757123C2.94564 0.826913 3.07824 0.933825 3.17834 1.06767L3.21936 1.12626L3.27014 1.21741C3.3141 1.30715 3.33768 1.39101 3.35217 1.45634C3.36967 1.53523 3.38173 1.62611 3.39189 1.69723L3.62561 3.3333H14.0221C14.1207 3.3333 14.2378 3.33298 14.3385 3.34176C14.4318 3.34989 14.5663 3.3688 14.707 3.43681L14.7675 3.46936L14.8418 3.51754C15.0097 3.63655 15.138 3.80513 15.207 4.00061C15.2693 4.17718 15.2627 4.33886 15.2519 4.44527C15.2417 4.54584 15.2196 4.66093 15.2011 4.75777L14.3183 9.39059C14.2614 9.68942 14.2121 9.94932 14.1549 10.1621C14.0955 10.3829 14.0168 10.5984 13.8776 10.8007C13.6671 11.1064 13.3754 11.3478 13.0358 11.4974C12.811 11.5963 12.5847 11.6333 12.3567 11.6504C12.137 11.6668 11.872 11.6666 11.5677 11.6666H5.86259C5.54279 11.6666 5.26532 11.6673 5.03577 11.6497C4.79793 11.6314 4.56201 11.5906 4.32939 11.4837C3.97912 11.3228 3.68255 11.0643 3.47587 10.7389C3.33865 10.5228 3.26692 10.2943 3.21676 10.0612C3.16834 9.83606 3.13162 9.56102 3.0885 9.2441L2.38668 4.08981V4.08915L2.0885 1.99996H1.33329C0.965103 1.99996 0.666626 1.70149 0.666626 1.3333C0.666626 0.965105 0.965103 0.666629 1.33329 0.666629H2.20439Z" fill="currentColor"/>
                 </svg>
                 Your Cart
               </button>
               <a href="#" className="hover:text-purple-600">Login</a>
              <button className="w-full h-12 rounded-lg bg-linear-to-r from-[#6230fc] to-[#a33efa] text-white font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
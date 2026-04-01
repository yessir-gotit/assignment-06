import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import productData from './product.json'; 

const Product = () => {
    const [activeTab, setActiveTab] = useState('products');
  const [ cartItems, setCartItems ] = useState([]);

  const handleBuyNow = (p) => {
      // console.log("buying:", p.name);
      
    const alreadyInCart = cartItems.find((item) => item.id === p.id);

    if (!alreadyInCart) {
      setCartItems([...cartItems, p]);
      toast.success(`${p.name} added to cart!`, {
        position: 'top-right',
        autoClose: 2000,
      });
    } else {
        toast.info(`${p.name} is already in your cart!`, {
          position: "top-right",
          autoClose: 2000,
        });
    }
  }

  const removeFromCart = (p) => {
    setCartItems(cartItems.filter(item => item.id !== p.id));
    toast.error(`${p.name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    })
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    toast.success("Order processed! Your tools are ready for download.", {
      position: 'top-center',
      autoClose: 3000,
    });

    setCartItems([]);
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const getBadgeStyle = (tagType) => {
      if (tagType === 'best seller') return "bg-[#ffefcd] text-[#f59e0b]";
      if (tagType === "popular") return "bg-[#f0e6ff] text-[#813efd]";
      if (tagType === "new") return 'bg-[#dcfce7] text-[#22c55e]';
      return "bg-gray-100 text-gray-600";
  }

  const formatPeriod = (period) => {
    if (period === 'monthly') return "/Mo";
    return "/One-Time"
  }

  return (
    <section className="flex w-full justify-center bg-white py-16 md:py-24 text-black">
      <ToastContainer pauseOnFocusLoss={false} />
      
      <div className="flex w-full max-w-screen-2xl flex-col items-center px-6 md:px-8">

        {/* header */}
        <div className='flex flex-col items-center text-center'>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Premium Digital Tools
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* tabs */}
        <div className="mt-8 inline-flex items-center rounded-full border border-gray-100 bg-white p-1.5 shadow-sm">
           <button
             onClick={() => setActiveTab('products')}
             className={`rounded-full px-6 md:px-8 py-2.5 text-base font-medium transition-all duration-300 cursor-pointer ${
               activeTab === "products" ? "bg-[#813efd] text-white shadow-sm" : "text-black hover:bg-gray-50"
             }`}
           >
             Products
           </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`rounded-full px-6 md:px-8 py-2.5 text-base font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'cart'
                ? "bg-[#813efd] text-white shadow-sm"
                : "text-[#2a2444] hover:bg-gray-50"
            }`}
          >
            Cart {cartItems.length > 0 && `(${cartItems.length})`}
          </button>
        </div>

        {/* products grid */}
        {activeTab === 'products' && (
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            
            {productData.map((p) => (
              <div key={p.id} className="flex flex-col rounded-[20px] border border-gray-100 bg-white p-6 md:p-8 shadow-md transition-all hover:shadow-xl">
                
                {/* icon and badge */}
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-50 bg-gray-50">
                    <img src={p.icon} alt={p.name} className="h-8 w-8" />
                  </div>
                  <span className={`rounded-full px-3.5 py-1 text-sm font-bold ${getBadgeStyle(p.tagType)}`}>
                    {p.tag}
                  </span>
                </div>

                 <h3 className="mt-6 text-xl md:text-2xl font-bold text-[#212433]">{p.name}</h3>
                 <p className="mt-2 text-sm md:text-base leading-relaxed text-[#6b7280]">{p.description}</p>

                {/* price */}
                <div className="mt-6">
                  <span className="text-3xl md:text-4xl font-bold leading-none text-black">${p.price}</span>
                  <span className="ml-1 text-base font-medium text-gray-400">{formatPeriod(p.period)}</span>
                </div>

                {/* features list */}
                <ul className="mb-8 mt-6 flex flex-1 flex-col gap-3.5">
                  {p.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-[#6b7280]">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 shrink-0 text-[#22c55e]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyNow(p)}
                  className="h-12 w-full rounded-full bg-[#813efd] text-base font-medium text-white transition-all hover:bg-[#6829e6] active:scale-95"
                >
                  Buy Now
                </button>

              </div>
            ))}
          </div>
        )}

        {/* cart view */}
        {activeTab === "cart" && (
          <div className="mt-12 md:mt-16 w-full max-w-4xl rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
             <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Your Cart</h3>

            {/* empty cart */}
            {cartItems.length === 0 && (
              <div className="py-16 md:py-20 text-center">
                 <p className="text-gray-400 text-lg">Your cart is currently empty.</p>
              </div>
            )}

            {/* cart items */}
            {cartItems.length > 0 && (
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-2xl bg-gray-50/50 p-4 md:p-6 border border-gray-50">
                    
                    <div className="flex items-center gap-3 md:gap-4">
                       <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-sm shrink-0">
                         <img src={item.icon} alt="" className="h-6 w-6 md:h-7 md:w-7" />
                       </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-black">{item.name}</h4>
                        <p className="text-sm md:text-base font-medium text-gray-400">${item.price}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item)}
                      className="text-sm md:text-base font-bold text-red-600 hover:text-red-700 transition-colors shrink-0 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* total and checkout */}
                <div className="mt-6 md:mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-base md:text-lg font-medium text-gray-500">Total Cost:</span>
                    <span className="text-3xl md:text-4xl font-bold text-black">${totalPrice}</span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="mt-6 md:mt-8 h-14 md:h-16 w-full rounded-full bg-purple-600 text-base md:text-lg font-bold text-white shadow-lg hover:bg-purple-700 transition-all ccursor-pointer"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  )
}

export default Product
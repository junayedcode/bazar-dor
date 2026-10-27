import React from 'react';

import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full py-4 font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="flex items-center bg-white px-6 py-3 ">
          
          <div className="flex items-center gap-3">
            
          
            <div className="w-10 h-10 bg-[#1db954] rounded-lg flex items-center justify-center overflow-hidden p-1.5">
                        <Image
  src="/assets/logo-icon.png"
  alt="Logo"
  width={32}
  height={32}
/>
            </div>

           
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                বাজার দর
              </span>
              <span className="text-[12px] text-gray-500 font-medium mt-0.5">
                মালাদহ, ৪ ফাল্গুন, ২০২৬
              </span>
            </div>

          </div>

        </header>

      </div>
    </div>
  );
};

export default Header;
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Userinfo from './Userinfo';
const today = new Date().toLocaleDateString("bn-BD", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Dhaka",
});

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 mx-11">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          
        
          <Link href="/" className="flex items-center gap-3">
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
               {today}
              </span>
            </div>
          </Link>

         
          <Userinfo />

        </div>
      </div>
    </header>
  );
};

export default Header;
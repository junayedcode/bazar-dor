import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-3 mt-auto">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        
      
        <p className="text-[12px] text-gray-500 m-0 text-center md:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

    
        <p className="text-[12px] text-gray-500 m-0 text-center md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;
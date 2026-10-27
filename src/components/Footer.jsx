import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-3 mt-auto">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        
        {/* বাম দিকের টেক্সট */}
        <p className="text-[12px] text-gray-500 m-0 text-center md:text-left">
          বাংলাদেশ কৃষি — কৃষকদের জন্য একটি প্লাটফর্ম।
        </p>

        {/* ডান দিকের টেক্সট */}
        <p className="text-[12px] text-gray-500 m-0 text-center md:text-right">
          সকল দাম সম্পাদিত; বাজার অনুযায়ী এটি নিয়মিত কাজ পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;
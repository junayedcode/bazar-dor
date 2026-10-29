import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 md:flex-row md:gap-0">

        <p className="m-0 text-center text-xs text-gray-600 md:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="m-0 text-center text-xs text-gray-500 md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;
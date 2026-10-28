"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-[#f4f8f4] px-4 py-16 font-sans">
      <div className="w-full max-w-xl text-center">
        
     
        <Link
          href="/"
          className="mb-8 inline-block text-2xl font-extrabold tracking-tight text-gray-900"
        >
          বাজার দর <span className="text-green-600">বিডি</span>
        </Link>

      
        <h1 className="text-8xl font-black tracking-tighter text-green-600 sm:text-9xl">
          404
        </h1>

     
        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-green-600" />

      
        <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি।
        </h2>

        <p className="mx-auto mb-8 max-w-md text-base leading-7 text-gray-500">
          আপনি যে পণ্য বা পেজটি খুঁজছেন, সেটি সরানো হয়েছে,
          ঠিকানা পরিবর্তন হয়েছে অথবা পেজটি আর উপলব্ধ নেই।
        </p>

     
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-7 py-3 font-semibold text-white transition duration-200 hover:bg-green-800"
        >
          <span>←</span>
          হোম পেজে ফিরে যান
        </Link>

       
        <p className="mt-10 border-t border-gray-200 pt-5 text-sm text-gray-400">
          সঠিক দামের সন্ধানে, সবার আগে
        </p>
        
      </div>
    </div>
  );
};

export default NotFound;
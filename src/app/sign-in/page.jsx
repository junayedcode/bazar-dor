"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 

const SignInpage = () => {
  const router = useRouter(); 

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    
    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    
    if (data) {
      toast.success("সাইন ইন সফল হয়েছে");
      router.push("/");
      router.refresh();
    }
    
    if (error) {
      toast.error(error.message);
    }
  };

  
  const handlegoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };


  const handlegithubSignin = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f8f4] flex flex-col items-center justify-center py-10 px-4 font-sans">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">সাইন ইন</h2>
        <p className="text-[13px] text-gray-500">
          স্বাগতম! আপনার অ্যাকাউন্টে প্রবেশ করুন এবং কেনাকাটা উপভোগ করুন।
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 w-full max-w-[420px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-700">ইমেইল</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-700">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 transition"
              placeholder="পাসওয়ার্ড দিন"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 rounded-lg transition mt-2"
          >
            সাইন ইন
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1 border-gray-200" />
          <span className="text-[12px] text-gray-400">অথবা</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <div className="flex gap-3">
         
              <button 
  onClick={handlegoogleSignin}
  type="button"
  className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
>

            <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.5l6.3 5.3C36.9 40.3 44 35 44 24c0-1.3-.1-2.3-.4-3.5z" />
            </svg>
            Google দিয়ে সাইন ইন
          </button>

      
          <button
            onClick={handlegithubSignin}
            type="button"
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            GitHub দিয়ে সাইন ইন
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-[13px] text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link href="/signup" className="text-green-700 font-semibold hover:underline">
              রেজিস্টার করুন
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[13px] text-gray-500">
          ←{" "}
          <Link href="/" className="hover:text-green-700 hover:underline transition">
            হোম পেজে ফিরে যান
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInpage;
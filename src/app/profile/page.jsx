"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [name, setName] = useState(""); 
  const [isUpdating, setIsUpdating] = useState(false);

  
  if (isPending) {
    return <div className="min-h-screen flex items-center justify-center text-green-700 font-bold">লোড হচ্ছে...</div>;
  }

  const user = session?.user;

 
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("লগ আউট সফল হয়েছে");
          router.push("/sign-in");
        },
      },
    });
  };

 
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    
    try {
      
      const newName = name.trim() === "" ? user?.name : name;

      const { error } = await authClient.updateUser({
        name: newName,
      });

      if (error) {
        toast.error(error.message || "আপডেট করা যায়নি");
      } else {
        toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
        setName("");
        router.refresh(); 
      }
    } catch (err) {
      toast.error("একটি সমস্যা হয়েছে");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f8f4] py-10 px-4 font-sans flex flex-col items-center">

      <div className="w-full max-w-2xl mb-4">
        <h1 className="text-xl font-bold text-gray-900 m-0">আমার প্রোফাইল</h1>
        <p className="text-[13px] text-gray-500 mt-1 m-0">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন</p>
      </div>

    
      <div className="w-full max-w-2xl bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          
        
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 shrink-0">
            {user?.image ? (
              <Image 
                src={user.image} 
                alt={user.name} 
                width={56} 
                height={56} 
                className="w-full h-full object-cover"    
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-lg font-bold text-gray-500">
                {user?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
          
       
          <div>
            <h2 className="text-[17px] font-bold text-gray-900 m-0">{user?.name || "অজানা ইউজার"}</h2>
            <p className="text-[13px] text-gray-500 mt-1 m-0">{user?.email}</p>
          </div>
        </div>

       
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-red-50 transition cursor-pointer"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          লগ আউট
        </button>
      </div>

  
      <div className="w-full max-w-2xl bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-[15px] font-bold text-gray-800 mb-5">তথ্য</h3>
        
        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-700">নাম</label>
       
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 transition"
              placeholder="আপনার নতুন নাম লিখুন"
            />
          </div>

          <button
            type="submit"
            disabled={isUpdating}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 rounded-lg transition mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট করুন"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default ProfilePage;
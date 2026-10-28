import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Userinfo = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handelsignout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                },
            },
        });
    };

    
    if (isPending) {
        return <div className="h-10 w-24 animate-pulse bg-gray-200 rounded-lg"></div>;
    }

    return (
        <div>
            {user ? (
           
                <div className="dropdown dropdown-end">
                    {/* ট্রিগার বাটন */}
                    <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-gray-100 transition">
                        
                   
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                            {user.image ? (
                                <Image 
                                    src={user.image} 
                                    alt={user.name || "User"} 
                                    width={32} 
                                    height={32} 
                                    className="w-full h-full object-cover" 
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs font-bold text-gray-500">
                                    {user.name?.charAt(0) || "U"}
                                </div>
                            )}
                        </div>

               
                        <span className="text-[14px] font-medium text-gray-700 hidden sm:block">
                            {user.name}
                        </span>

                      
                        <svg className="w-3 h-3 text-gray-500 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>

                 
                    <ul tabIndex={0} className="dropdown-content z-[50] p-2 shadow-xl bg-white border border-gray-100 rounded-2xl w-64 mt-3">
                        
                     
                        <div className="px-3 py-2 mb-1 border-b border-gray-50">
                            <p className="text-[15px] font-bold text-gray-900 leading-tight">{user.name}</p>
                            <p className="text-[12px] text-gray-500 mt-0.5">{user.email}</p>
                        </div>

                  
                        <li>
                            <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition">
                               
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                আমার প্রোফাইল
                            </Link>
                        </li>

                     
                        <li>
                            <button onClick={handelsignout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium text-red-500 hover:bg-red-50 rounded-lg transition mt-1">
                              
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                সাইন আউট
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
               
                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        href="/sign-in"
                        className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="px-3 py-2 sm:px-4 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 transition"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Userinfo;
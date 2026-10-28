import React from 'react';
import Link from 'next/link';
import Allproduct from '@/components/Allproduct';


export default function ProductsPage() {
  return (
    <div className="bg-[#f5f7f5] min-h-screen pb-10">
      
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="text-[12px] text-gray-500 flex items-center gap-2 mb-2">
          <Link href="/" className="hover:text-green-600">হোম</Link>
          <span>/</span>
        
          <Link href="/product" className="hover:text-green-600">পণ্য</Link>
        </div>
      </div>

     
      <Allproduct />
      
    </div>
  );
}
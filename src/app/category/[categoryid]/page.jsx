import ProductCard from '@/components/ProductCard';
import React, { Suspense } from 'react';
import Link from 'next/link';

// ==========================================
// ১. মেইন পেজ (Suspense দিয়ে র‍্যাপ করা)
// ==========================================
const Categorypage = ({ params }) => {
    return (
        <div className="bg-[#f4f7f4] min-h-screen pb-10 font-sans">
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen text-green-600 font-bold">
                    লোড হচ্ছে...
                </div>
            }>
                <CategoryData params={params} />
            </Suspense>
        </div>
    );
};

// ==========================================
// ২. ডেটা ফেচ এবং UI রেন্ডার
// ==========================================
async function CategoryData({ params }) {
    const { categoryid } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryid}`,
        { cache: 'no-store' }
    );

    const data = await res.json();
    
    // API থেকে ডেটা Array আকারে আসছে কিনা চেক করা
    const products = Array.isArray(data) ? data : data.products || [];

    // ক্যাটাগরির নাম বের করা (যদি ডেটাতে থাকে, না থাকলে ডিফল্ট)
    const categoryName = products[0]?.categoryNameBn || "চাল"; 
    const totalProducts = products.length;

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            
          
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#f4f7f4] rounded-full flex items-center justify-center text-3xl shadow-inner shrink-0">
                    {products[0]?.categoryIcon}
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight m-0">{categoryName}</h1>
                    <p className="text-[13px] text-gray-500 mt-1 m-0">
                        {totalProducts}টি পণ্য • আজকের বাজার দর • সর্বশেষ আপডেট
                    </p>
                </div>
            </div>

           
            <div className="mb-4">
                <h2 className="text-[15px] font-bold text-gray-800 m-0">এই ক্যাটাগরির সব পণ্য</h2>
            </div>

      
            {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center p-10 text-gray-500 bg-white rounded-2xl border border-gray-100">
                    এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                </div>
            )}
            
        </div>
    );
}

export default Categorypage;
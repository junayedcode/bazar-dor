import React, { Suspense } from 'react';
import Link from 'next/link';
import CategoryProducts from '@/components/CategoryProducts';
import { notFound } from 'next/navigation';

const Categorypage = ({ params }) => {
    return (
        <div className="bg-[#f4f7f4] min-h-screen pb-10 font-sans">
            <Suspense
                fallback={
                    <div className="flex justify-center items-center h-screen text-green-600 font-bold">
                        লোড হচ্ছে...
                    </div>
                }
            >
                <CategoryData params={params} />
            </Suspense>
        </div>
    );
};

async function CategoryData({ params }) {
    const { categoryid } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryid}`,
        { cache: 'no-store' }
    );

    const data = await res.json();
    const products = Array.isArray(data) ? data : data.products || [];

   
    if (!products || products.length === 0) {
        notFound();
    }

    const categoryName = products[0]?.categoryNameBn;
    const totalProducts = products.length;

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">

         
            <div className="text-[12px] text-gray-500 flex items-center gap-2 mb-4">
                <Link href="/" className="hover:text-green-600">
                    হোম
                </Link>
                <span>/</span>
                <Link href="/product" className="hover:text-green-600">
                    পণ্য
                </Link>
            </div>

          
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#f4f7f4] rounded-full flex items-center justify-center text-3xl shadow-inner shrink-0">
                    {products[0]?.categoryIcon}
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight m-0">
                        {categoryName}
                    </h1>

                    <p className="text-[13px] text-gray-500 mt-1 m-0">
                        {totalProducts}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>
        
            <div>
               
            </div>

            <CategoryProducts products={products} />

        </div>
    );
}

export default Categorypage;
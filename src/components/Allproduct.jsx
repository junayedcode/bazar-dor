
import React, { Suspense } from 'react';
import ProductCard from './ProductCard';
import { connection } from 'next/server';

const Allproduct = () => {
    return (
        <Suspense
            fallback={
                <div className="mx-auto max-w-6xl px-3 py-3 text-center text-xs text-gray-500">
                    পণ্য লোড হচ্ছে...
                </div>
            }
        >
            <ProductList />
        </Suspense>
    );
};

async function ProductList() {
    await connection();

    const rse = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products',
        { cache: 'no-store' }
    );

    if (!rse.ok) {
        return (
            <div className="px-3 py-3 text-center text-red-500">
                পণ্য লোড করা যায়নি!
            </div>
        );
    }

    const data = await rse.json();
    const products = Array.isArray(data) ? data : data.products ?? [];

    return (
        <div className="mx-auto max-w-6xl px-3 py-3">
            <div className="mb-2 flex flex-col gap-0.5">
                <h2 className="m-0 text-sm font-bold text-gray-800">
                    সব পণ্য
                </h2>

                <p className="m-0 text-[10px] text-gray-500">
                    মোট {products.length}টি পণ্য দেখানো হচ্ছে
                </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
                {products.map((all, i) => (
                    <ProductCard
                        product={all}
                        key={all.id ?? i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Allproduct;

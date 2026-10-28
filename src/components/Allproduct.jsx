
import React, { Suspense } from 'react';
import ProductCard from './ProductCard';

const Allproduct = () => {
    return (
        <Suspense
            fallback={
                <div className="mx-auto max-w-6xl px-4 py-6 text-center text-gray-500">
                    পণ্য লোড হচ্ছে...
                </div>
            }
        >
            <ProductList />
        </Suspense>
    );
};

async function ProductList() {
    const rse = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products',
        { cache: 'no-store' }
    );

    if (!rse.ok) {
        return (
            <div className="px-4 py-6 text-center text-red-500">
                পণ্য লোড করা যায়নি!
            </div>
        );
    }

    const data = await rse.json();
    const products = Array.isArray(data) ? data : data.products ?? [];

    return (
        <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="mb-5 flex flex-col gap-1">
                <h2 className="text-[17px] font-bold text-gray-800 m-0">
                    সব পণ্য
                </h2>

                <p className="text-[13px] text-gray-500 m-0">
                    মোট {products.length}টি পণ্য দেখানো হচ্ছে
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

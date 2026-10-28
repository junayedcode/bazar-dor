
import React from 'react';
import ProductCard from './ProductCard';

const Growup = async () => {
    const rse = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await rse.json();

    const products = Array.isArray(data) ? data : data.products;
    const increasedProducts = products.filter(
        (product) => product.change.dir === 'up'
    );

    return (
        <div className="mx-auto max-w-6xl px-3 py-3">

            <div className="mb-2 flex items-center gap-1">
                <span className="text-xs text-red-600">▲</span>
                <h2 className="m-0 text-sm font-bold text-gray-800">
                    আজ দাম বেড়েছে
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
                {increasedProducts.map((product) => (
                    <ProductCard
                        key={product.id ?? product.name}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Growup;

import React from 'react';
import ProductCard from './ProductCard';

const Decrease = async () => {
    const rse = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await rse.json();

    const products = Array.isArray(data) ? data : data.products;
    const decreasedProducts = products.filter(
        (product) => product.change.dir === 'down'
    );

    return (
  
        <div className="mx-auto max-w-6xl px-4 py-6">
           
            <div className="flex items-center gap-1 mb-4">
                <span className="text-green-600 text-sm">▼</span>
                <h2 className="text-[16px] font-bold text-gray-800 m-0">আজ দাম কমেছে</h2>
            </div>

          
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {decreasedProducts.map((product) => (
                    <ProductCard
                        key={product.id ?? product.name}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Decrease;
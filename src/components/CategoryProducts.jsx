
"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";

export default function CategoryProducts({ products }) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedProducts = [...products];

  if (sortOrder === "low-to-high") {
    sortedProducts.sort(
      (a, b) =>
        Number(a.today ?? a.price ?? 0) -
        Number(b.today ?? b.price ?? 0)
    );
  }

  if (sortOrder === "high-to-low") {
    sortedProducts.sort(
      (a, b) =>
        Number(b.today ?? b.price ?? 0) -
        Number(a.today ?? a.price ?? 0)
    );
  }

  return (
    <>
      <FilterBar
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Total Products */}
      <p className="text-[13px] text-gray-500 mt-3 mb-2">
        মোট {products.length} টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
        {sortedProducts.map((product, i) => (
          <ProductCard
            key={product.id ?? i}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

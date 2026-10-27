
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const isUp = product.change?.dir === 'up';
  const percentage = Math.abs(product.change?.pct ?? 0);

  return (
    <div className="w-full max-w-[320px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-3 font-sans">

    
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#f4f7f4] rounded-xl flex items-center justify-center overflow-hidden shrink-0">
          {product.image?.startsWith('http') ||
          product.image?.startsWith('/') ? (
            <Image
              src={product.image}
              alt={product.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <span className="text-2xl">
              {product.image || '🛒'}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <h3 className="text-[17px] font-semibold text-gray-800 leading-tight m-0">
            {product.name}
          </h3>
          <p className="text-[13px] text-gray-500 m-0 mt-0.5">
            প্রতি কেজি
          </p>
        </div>
      </div>

    
      <div className="mt-1">
        <span className="text-[13px] text-gray-600">
          আজকের দাম
        </span>
      </div>

    
      <div className="flex justify-between items-end mt-1">
        <div className="text-[22px] font-bold text-gray-900 leading-none">
          {product.price ?? product.today}{' '}
          <span className="text-[14px] font-normal">টাকা</span>
        </div>

        <div
          className={`px-2 py-1 rounded-full text-[12px] font-semibold flex items-center gap-1 leading-none ${
            isUp
              ? 'bg-red-50 text-red-600'
              : product.change?.dir === 'down'
              ? 'bg-green-50 text-green-600'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          <span className="text-[10px]">
            {isUp ? '▲' : product.change?.dir === 'down' ? '▼' : '—'}
          </span>

          <span>
            {product.change?.dir === 'flat'
              ? 'পরিবর্তন নেই'
              : `${percentage}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import React, { Suspense } from 'react';
import Link from 'next/link';

export default function ProductDetails({ params }) {
  return (
    <Suspense
      fallback={
        <div className="text-center p-10 text-gray-500">
          পণ্যের তথ্য লোড হচ্ছে...
        </div>
      }
    >
      <ProductData params={params} />
    </Suspense>
  );
}

async function ProductData({ params }) {
  const { productsid } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productsid}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return (
      <div className="text-center p-10 text-red-500 font-bold">
        পণ্যটি পাওয়া যায়নি!
      </div>
    );
  }

  const data = await res.json();
  const isUp = data.change?.dir === 'up';

  const sortedMarkets = data.markets
    ? [...data.markets].sort((a, b) => a.min - b.min)
    : [];

  return (
    <div className="bg-[#f5f7f5] min-h-screen py-8 font-sans">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col gap-5">

        <div className="text-[12px] text-gray-500 flex items-center gap-2 mb-2">
          <Link href="/" className="hover:text-green-600">হোম</Link>
          <span>/</span>
          <Link href="/product" className="hover:text-green-600">পণ্য</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{data.nameBn}</span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#f4f7f4] rounded-full flex items-center justify-center text-3xl shadow-inner shrink-0">
              {data.image}
            </div>
            <div>
              <h1 className="text-[22px] font-bold text-gray-900 leading-tight">
                {data.nameBn}
              </h1>
              <p className="text-[13px] text-gray-500 mt-1">
                সর্বশেষ আপডেট: ১২ মিনিট আগে • আজ
              </p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-xl p-3 text-right min-w-[120px] shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">বর্তমান বাজার দর</p>
            <p className="text-2xl font-bold text-gray-900 leading-none">
              {data.today}{' '}
              <span className="text-[12px] font-normal text-gray-600">
                টাকা/{data.unit}
              </span>
            </p>
            <p className={`text-[12px] font-semibold mt-1.5 flex items-center justify-end gap-1 ${isUp ? 'text-red-500' : 'text-green-500'}`}>
              <span className="text-[10px]">{isUp ? '▲' : '▼'}</span>
              {data.change?.pct}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-[15px] font-bold text-gray-800 mb-4">
            দামের পরিসংখ্যান
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-gray-100 rounded-xl p-4 bg-white">
              <p className="text-[12px] text-gray-500 mb-1">সর্বনিম্ন</p>
              <p className="text-xl font-bold text-green-600">
                {sortedMarkets[0]?.min ?? data.today} টাকা
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                {sortedMarkets[0]?.market}
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-4 bg-white">
              <p className="text-[12px] text-gray-500 mb-1">সর্বোচ্চ</p>
              <p className="text-xl font-bold text-red-600">
                {sortedMarkets[sortedMarkets.length - 1]?.max ?? data.today} টাকা
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                {sortedMarkets[sortedMarkets.length - 1]?.market}
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-4 bg-white">
              <p className="text-[12px] text-gray-500 mb-1">গড় দাম</p>
              <p className="text-xl font-bold text-green-600">
                {data.today} টাকা
              </p>
              <p className="text-[11px] text-gray-400 mt-1">সারাদেশে গড়</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="text-[15px] font-bold text-gray-800 mb-4">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-[12px] text-gray-500">
                  <th className="pb-3 font-medium">বাজার</th>
                  <th className="pb-3 font-medium">বিভাগ</th>
                  <th className="pb-3 font-medium text-right">সর্বনিম্ন</th>
                  <th className="pb-3 font-medium text-right">সর্বোচ্চ</th>
                  <th className="pb-3 font-medium text-right">গড়</th>
                </tr>
              </thead>

              <tbody className="text-[13px] text-gray-700">
                {sortedMarkets.map((m, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
                  >
                    <td className="py-3.5 font-medium">{m.market}</td>
                    <td className="py-3.5 text-gray-500">{m.division}</td>
                    <td className="py-3.5 text-right font-medium">{m.min} টাকা</td>
                    <td className="py-3.5 text-right font-medium">{m.max} টাকা</td>
                    <td className="py-3.5 text-right font-medium">
                      {Math.round((m.min + m.max) / 2)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

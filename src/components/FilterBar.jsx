
"use client";

export default function FilterBar({ sortOrder, setSortOrder }) {
  return (
    <div className="w-full bg-white rounded-2xl p-3 px-4 shadow-sm border border-gray-100 flex justify-end items-center gap-3">
      <span className="text-[13px] text-gray-500 font-medium">
        সাজান
      </span>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="bg-white border border-gray-200 text-gray-700 text-[13px] rounded-lg px-3 py-1.5"
      >
        <option value="default">ডিফল্ট</option>
        <option value="low-to-high">কম থেকে বেশি</option>
        <option value="high-to-low">বেশি থেকে কম</option>
      </select>
    </div>
  );
}

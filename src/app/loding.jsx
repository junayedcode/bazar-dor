export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f4f8f4] flex flex-col items-center justify-center gap-6 font-sans">
      
      {/* Spinner (সবুজ রঙ) */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
        {/* মাঝখানে একটি ছোট আইকন বা ডট */}
        <div className="absolute w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
      </div>

      {/* টেক্সট */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-gray-800">লোড হচ্ছে...</h2>
        <p className="text-gray-500 text-[14px]">একটু অপেক্ষা করুন, বাজারের দাম আনা হচ্ছে</p>
      </div>

      {/* ডটস */}
      <div className="flex gap-2 mt-2">
        <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-bounce"></span>
        <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-bounce [animation-delay:0.15s]"></span>
        <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </div>
      
    </div>
  );
}
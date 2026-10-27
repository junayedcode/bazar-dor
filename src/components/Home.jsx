
import Image from "next/image";
import Link from "next/link";
import Growup from "./Growup";
import { Suspense } from "react";
import Decrease from "./Decrease";

const HomePage = () => {
  return (
   <div>
    <section className=" px-4 py-5">
      <div className="mx-auto flex min-h-[200px] max-w-5xl items-center justify-between rounded-xl border border-gray-200 bg-white/80 px-6 py-6 sm:px-8 md:px-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-medium text-green-700">
            সোমবার, ২৮ অক্টোবর, ২০২৬
          </span>

          <h1 className="mt-3 text-xl font-bold text-gray-800 md:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-md text-xs leading-6 text-gray-500 md:text-sm">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস—সব পণ্যের দাম এক জায়গায়।
            বাজারের সর্বশেষ দামের আপডেট সহজেই জেনে নিন।
          </p>

          <Link
            href="/products"
            className="mt-4 inline-block rounded-md bg-green-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800"
          >
            সব পণ্যের দাম দেখুন
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative ml-4 hidden h-40 w-40 shrink-0 sm:block md:h-52 md:w-52">
          <Image
            src="/assets/bazar-hero.png"
            alt="সবজির ঝুড়ি"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 160px, 208px"
          />
        </div>
      </div>
    </section>
      <Suspense fallback={<p>লোড হচ্ছে...</p>}>
  <Growup />
</Suspense>
      <Suspense fallback={<p>লোড হচ্ছে...</p>}>
  <Decrease/>
</Suspense>
   </div> 

    
  );
};

export default HomePage;

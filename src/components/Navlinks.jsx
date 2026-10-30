
import Link from "next/link";

async function getCategories() {
    'use cache';

    const rse = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories'
    );

    const data = await rse.json();
    return data;
}

const Navlinks = async () => {
    const data = await getCategories();

    return (
        <nav className="w-full bg-white border-b border-gray-100">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-start gap-5 py-2 whitespace-nowrap ml-16">

                    {data.map((nave, i) => (
                        <Link
                            href={`/category/${nave.id}`}
                            key={nave.id ?? i}
                            className="flex items-center gap-1.5 text-[12px] text-gray-700 font-medium hover:text-green-600 transition-colors duration-200 whitespace-nowrap"
                        >
                            <span className="text-[13px]">
                                {nave.icon}
                            </span>

                            <span>
                                {nave.nameBn}
                            </span>
                        </Link>
                    ))}

                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden py-2">

                    <details className="group relative">

                        <summary className="list-none cursor-pointer flex items-center justify-between px-2 py-2 text-gray-700 font-medium select-none">

                            <span className="text-sm">
                                সকল ক্যাটাগরি
                            </span>

                            {/* Hamburger Icon */}
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex flex-col items-center justify-center gap-1 shadow-sm group-open:bg-green-700 transition">

                                <span className="w-5 h-0.5 bg-white rounded transition-all group-open:translate-y-1.5 group-open:rotate-45"></span>

                                <span className="w-5 h-0.5 bg-white rounded transition-all group-open:opacity-0"></span>

                                <span className="w-5 h-0.5 bg-white rounded transition-all group-open:-translate-y-1.5 group-open:-rotate-45"></span>

                            </div>

                        </summary>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-xl p-3 z-50">

                            <p className="text-xs font-semibold text-gray-400 px-2 py-2">
                                পণ্য ক্যাটাগরি নির্বাচন করুন
                            </p>

                            <div className="grid grid-cols-2 gap-2">

                                {data.map((nave, i) => (
                                    <Link
                                        href={`/category/${nave.id}`}
                                        key={nave.id ?? i}
                                        className="flex items-center gap-2 bg-gray-50 hover:bg-green-50 rounded-lg p-3 text-gray-700 hover:text-green-700 transition-all duration-200"
                                    >
                                        <span className="text-lg">
                                            {nave.icon}
                                        </span>

                                        <span className="text-sm font-medium">
                                            {nave.nameBn}
                                        </span>
                                    </Link>
                                ))}

                            </div>

                        </div>

                    </details>

                </div>

            </div>

        </nav>
    );
};

export default Navlinks;

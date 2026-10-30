
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
                <div className="hidden md:flex items-center justify-center gap-2 py-3 flex-wrap">
                    {data.map((nave, i) => (
                        <Link
                            href={`/category/${nave.id}`}
                            key={nave.id ?? i}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 font-medium text-sm hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                        >
                            <span className="text-lg">{nave.icon}</span>
                            <span>{nave.nameBn}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden py-3">
                    <details className="group relative">

                        <summary className="list-none cursor-pointer flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-green-800 font-semibold select-none">

                            <div className="flex items-center gap-2">
                                <span className="text-lg">🛒</span>
                                <span>সকল ক্যাটাগরি</span>
                            </div>

                            {/* Hamburger Icon */}
                            <div className="w-9 h-9 bg-green-600 rounded-lg flex flex-col items-center justify-center gap-1 shadow-sm group-open:bg-green-700 transition">
                                <span className="w-5 h-0.5 bg-white rounded transition-all group-open:translate-y-1.5 group-open:rotate-45"></span>
                                <span className="w-5 h-0.5 bg-white rounded transition-all group-open:opacity-0"></span>
                                <span className="w-5 h-0.5 bg-white rounded transition-all group-open:-translate-y-1.5 group-open:-rotate-45"></span>
                            </div>

                        </summary>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-100 shadow-xl p-3 z-50">

                            <p className="text-xs font-semibold text-gray-400 px-3 py-2">
                                পণ্য ক্যাটাগরি নির্বাচন করুন
                            </p>

                            <div className="grid grid-cols-2 gap-2">
                                {data.map((nave, i) => (
                                    <Link
                                        href={`/category/${nave.id}`}
                                        key={nave.id ?? i}
                                        className="flex items-center gap-2 bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-100 rounded-xl p-3 text-gray-700 hover:text-green-700 transition-all duration-200"
                                    >
                                        <span className="text-xl">
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

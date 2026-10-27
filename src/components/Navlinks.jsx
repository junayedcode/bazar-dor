async function getCategories() {
    'use cache'; 
    
    const rse = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data = await rse.json();
    return data;
}

const Navlinks = async () => {
   const data = await getCategories();
    return (
    <div className='flex flex-wrap gap-8 justify-center items-center max-w-7xl mx-auto mt-5 px-4'>
    {
        data.map((nave, i) => (
            <div key={i} className='flex items-center gap-2'>
                <span>{nave.icon}</span>
                <span className='font-medium text-gray-700'>{nave.nameBn}</span>
            </div>
        ))
    }
</div>
    );
};

export default Navlinks;
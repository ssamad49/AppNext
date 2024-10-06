export default function categoryname({params, searchParams}) {
    console.log(params , searchParams)
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 className="text-4xl font-bold text-center">Category: {params.categoryname}</h2>
        <h2 className="text-4xl font-bold text-center">Product: {params.productId}</h2>
        <p className="text-4xl font-bold text-center">Search: {searchParams.search}</p>
        </div>
    );
    }
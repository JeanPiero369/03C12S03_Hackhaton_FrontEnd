// eslint-disable-next-line react/prop-types
export const Item=({asin,boughtInLastMonth,isBestSeller,price,imgUrl,stars,title})=>{
    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={imgUrl} alt={title} className="w-full"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                Price: ${price}
            </p>
            <p className="text-gray-700 text-base">
                Stars: {stars}
            </p>
            <p className="text-gray-700 text-base">
                ASIN: {asin}
            </p>
            <p className="text-gray-700 text-base">
                Bought in last month: {boughtInLastMonth === "1" ? "Yes" : "No"}
            </p>
            <p className="text-gray-700 text-base">
                Best Seller: {isBestSeller === "True" ? "Yes" : "No"}
            </p>
        </div>
    </div>
}
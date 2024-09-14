import { getCategories } from "@/utils/fetchCategories";
import Link from "next/link";

const PopularCategory = async () => {
    const categories = await getCategories()
    return (
        <div className="xl:my-20 lg:my-16 md:my-10 my-7">
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">Popular Categories</h2>
            <div className="py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                {
                    categories?.map((item, idx) => (
                        <Link href={`/category/${item?.slug}`} className="w-full h-full" key={idx}>
                            <div className="px-5 py-3 bg-gradient-to-r from-[#2e3241] to-[#171c2c] rounded text-white">
                                {item?.categoryName}                            
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default PopularCategory;
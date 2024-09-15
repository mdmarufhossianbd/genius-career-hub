import CategoryJobsWithPagination from "@/components/category/category";
import { fetchCategoryJobs } from "@/utils/fetchCategories";

export async function generateMetadata({params}) {
    const {slug} = params;
    const [jobs, categoryDetails] = await fetchCategoryJobs(slug)
    return {
        title : `${categoryDetails?.categoryName} || Genius Career Hub`,
        description : categoryDetails?.description,
        openGraph : {
            title : `${categoryDetails?.categoryName} || Genius Career Hub`,
            description : categoryDetails?.description,
            url : `/category/${slug}`,
            images : [
                {
                    url : 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1726388509/genius-career-hub/assets/aabr38fiiylqutbdpckb.png',
                    width : 1200,
                    height : 630,
                    alt : categoryDetails?.categoryName
                }
            ],
            type : 'article'
        }
    }
}

const CategoryJobs = async ({ params }) => {
    const { slug } = params;
    const [jobs, categoryDetails, totalJobs] = await fetchCategoryJobs(slug);
    return (
        <div>
            <div className="max-w-7xl mx-auto my-10 lg:px-3 md:px-5 px-3">
                <div className="flex justify-between md:items-end items-center mb-5">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Category Name : {categoryDetails?.categoryName}</h2>
                    <p>Found Total Jobs : {totalJobs ? totalJobs : '0'}</p>
                </div>
                <p className="text-justify mb-5">{categoryDetails?.description}</p>
                {
                    jobs.length === 0 ? <div className="flex items-center justify-center h-[300px]">
                        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold">No jobs found in {categoryDetails?.categoryName} category.</p>
                    </div> : <CategoryJobsWithPagination slug={slug} />
                }
            </div>

        </div>
    );
};

export default CategoryJobs;
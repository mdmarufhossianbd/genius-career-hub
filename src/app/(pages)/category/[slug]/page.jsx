import CategoryJobsWithPagination from "@/components/category/category";
import { fetchCategoryJobs } from "@/utils/fetchCategories";

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
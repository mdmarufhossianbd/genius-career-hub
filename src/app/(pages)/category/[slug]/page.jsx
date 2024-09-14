import JobsTemplate from "@/components/shared/jobsTemplate";

const fetchCategoryJobs = async (slug) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs/category-wise-jobs/${slug}`)
    const data = await res.json()
    const jobs = data.result
    const categoryDetails = data.categoryDetails
    const totalJobs = data?.totalJobs
    return [jobs, categoryDetails, totalJobs]
}

const CategoryJobs = async ({ params }) => {
    const [jobs, categoryDetails, totalJobs] = await fetchCategoryJobs(params.slug)
    
    return (
        <div>
            <div className="max-w-7xl mx-auto my-10 lg:px-3 md:px-5 px-3">
                <div className="flex justify-between md:items-end items-center mb-5">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Category Name : {categoryDetails?.categoryName}</h2>
                    <p>Found Total Jobs : {totalJobs ? totalJobs : '0'}</p>
                </div>
                <p className="text-justify mb-5">{categoryDetails?.description}</p>
                {jobs.length === 0 ? <div className="flex items-center justify-center h-[300px]">
                    <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold">No jobs found in {categoryDetails?.categoryName} category.</p>
                </div> : <JobsTemplate jobs={jobs} />}
            </div>
        </div>
    );
};

export default CategoryJobs;
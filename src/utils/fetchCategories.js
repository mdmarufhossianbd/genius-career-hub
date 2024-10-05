export const getCategories = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/category`, {cache : 'no-store'})
    const data = await res.json();
    const categories = data?.result
    return categories || []
}

export const fetchCategoryJobs = async (slug, page) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs/category-wise-jobs/${slug}?${page}&limit=10`, {cache : 'no-store'})
    const data = await res.json()
    const jobs = data?.result;
    const categoryDetails = data?.categoryDetails;
    const totalJobs = data?.totalJobs;
    const currentPage = data?.currentPage;
    const totalPages = data?.totalPages
    return [jobs, categoryDetails, totalJobs, currentPage, totalPages]
}
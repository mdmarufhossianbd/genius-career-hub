export const getSingaleCategoryJobs = async(category, page, limit) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs/category?category=${category}&page=${page}&limit=${limit}`, {cache : 'no-store'})
    const data = await res.json()
    const jobs = data?.result
    return jobs || []
}
// export const getCategoyJobs = async (params) => {
//     const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
//     const res = await fetch(`${baseUrl}/api/v1/category/${slug}?page={page}&limit=10`, {cache : 'no-store'})
//     const data = await res.json()
//     const jobs = data?.result
//     return jobs || []
// }

export const getSingaleCategoryJobs = async(category, page, limit) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs/category?category=${category}&page=${page}&limit=${limit}`, {cache : 'no-store'})
    const data = await res.json()
    const jobs = data?.result
    return jobs || []
}
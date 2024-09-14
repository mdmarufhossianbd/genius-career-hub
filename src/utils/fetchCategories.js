export const getCategories = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/category`, {cache : 'no-store'})
    const data = await res.json();
    const categories = data.result
    return categories || []
}
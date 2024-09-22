export const getAllCompanies = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/company`, {cache : 'no-store'})
    const data = await res.json()
    const companies = data.result;
    return companies || []
}
export const noticeDetails = async (_id) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/notice/${_id}`)
    const data = await res.json()
    const notice = data?.result;
    return notice
}
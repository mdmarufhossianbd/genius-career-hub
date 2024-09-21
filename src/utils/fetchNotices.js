
export const getAllNotices = async() => {
   const page = 1 
   const baseUrl = process.env.NEXT_PUBLIC_BASEURL
   const res = await fetch(`${baseUrl}/api/v1/notice?page=${page}&limit=10`, {cache : 'no-store'})
   const data = await res.json()
   const notices = data.result
   return notices || []
}
export const getLastSavenDaysJobs = async() =>  {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs/last-saven-days-jobs?limit=${10}`, {cache: 'no-store'})
    const data = await res.json();
    const jobs = data.result || []
    return jobs
}
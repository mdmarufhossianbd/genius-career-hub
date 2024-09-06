import axios from "axios";
export const getPublishedJobs = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/jobs')
    const data = await res.data
    const publishJobs = data.result.filter(jobs => jobs.publishStatus === 'published')    
    return publishJobs;
}
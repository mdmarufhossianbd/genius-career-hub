'use client'
import Loading from "@/app/loading";
import JobsTemplate from "@/components/shared/jobsTemplate";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const JobLocation = () => {
    const [jobs, setJobs] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const searchParams = useSearchParams()
    const keyword = searchParams.get('location')


    useEffect(() => {
        const locationJobs = async () => {
            setLoading(true)
            await axios.get(`/api/v1/location?keyword=${keyword}&page=${page}&limit=10`)
                .then(res => {
                    setJobs(res.data?.result)
                    setTotalPage(res.data?.totalPage)
                    setLoading(false)
                })
        }
        locationJobs()
        document.title = `${keyword} Job Circulars`
    }, [keyword, page])

    const handleNext = () => {
        setPage(page + 1)
        router.push(`/job-location?location=${keyword}&page=${page + 1}`)
    }
    const handlePrevious = () => {
        setPage(page - 1)
        router.push(`/job-location?location=${keyword}&page=${page - 1}`)
    }
    return (
        <div className="max-w-7xl mx-auto">
        <h2 className="my-10 font-bold text-4xl">{keyword} job circulars</h2>
        
        {
            loading ? <Loading /> : <JobsTemplate jobs={jobs} keyword={keyword} />
        }
        { 
            totalPage <= 1 ? '' :
            <div>
            <button onClick={handlePrevious} disabled={page === 1}>
                Previous
            </button>
            <span> Page {page} of {totalPage <= 1 ? 1 : totalPage} </span>
            <button onClick={handleNext} disabled={page >= totalPage}>
                Next
            </button>
        </div>}
    </div>
    );
};

export default JobLocation;
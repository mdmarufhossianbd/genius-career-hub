'use client'
import Loading from "@/app/loading";
import JobsTemplate from "@/components/shared/jobsTemplate";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
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
                    <div className='my-5 flex justify-between items-center'>
                        <span> Page {page} of {totalPage <= 1 ? 1 : totalPage} </span>
                        <div className='flex gap-4'>
                            <button onClick={handlePrevious} disabled={page === 1} className="flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black"><IconArrowNarrowLeft stroke={2} />Previous</button>

                            <button onClick={handleNext} disabled={page >= totalPage} className='flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black'>Next<IconArrowNarrowRight stroke={2} /></button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default JobLocation;
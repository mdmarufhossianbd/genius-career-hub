'use client'
import Loading from "@/app/loading";
import JobsTemplate from "@/components/shared/jobsTemplate";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const keyword = searchParams.get('keyword')
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const searchJobs = async() => {
            setLoading(true)
            await axios.get(`/api/v1/search/title?keyword=${keyword}&page=${page}&limit=10`)
            .then(res => {
                setJobs(res.data?.result)
                setTotalPage(res.data?.totalPage)
                setLoading(false)
            })
        }
        searchJobs()
        document.title = `${keyword} Job Circulars`
    },[keyword, page])
    const handleNext = () => {
        setPage(page + 1)
        router.push(`/search?keyword=${keyword}&page=${page + 1}`)
    }
    const handlePrevious = () => {
        setPage(page - 1)
        router.push(`/search?keyword=${keyword}&page=${page - 1}`)
    }
    return (
        <div className="max-w-7xl mx-auto my-10">
            {
                loading ? <Loading /> : <JobsTemplate jobs={jobs} keyword={keyword} />
            }
            { 
            totalPage <= 1 ? '' :
            <div className="my-5">
            <button className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white disabled:cursor-not-allowed " onClick={handlePrevious} disabled={page === 1}>
                Previous
            </button>
            <span> Page {page} of {totalPage <= 1 ? 1 : totalPage} </span>
            <button className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white disabled:cursor-not-allowed " onClick={handleNext} disabled={page >= totalPage}>
                Next
            </button>
        </div>}
        </div>
    );
};

export default Search;
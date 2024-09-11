'use client'
import Loading from "@/app/loading";
import JobsTemplate from "@/components/shared/jobsTemplate";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
    const searchParams = useSearchParams();
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
    
    return (
        <div className="max-w-7xl mx-auto">
            {
                loading ? <Loading /> : <JobsTemplate jobs={jobs} keyword={keyword} />
            }
        </div>
    );
};

export default Search;
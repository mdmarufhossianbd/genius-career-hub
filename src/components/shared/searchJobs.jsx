'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import JobsTemplate from "./jobsTemplate";

const SearchJobs = () => {
    const [jobs, setJobs] = useState();
    const [keyword, setKeyword] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const router = useRouter()

    const fetchJobs = async () => {
        await axios.get(`/api/v1/location?keyword=${keyword}&page=${page}&limit=9`)
        .then(res => {
            setJobs(res.data.result)
            setTotalPages(res.data.totalPage)
        })        
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        router.push(`/job-location?location=${keyword}`)
        fetchJobs();
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <JobsTemplate jobs={jobs} />
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchJobs;
'use client'
import Loading from "@/components/shared/loading";
import axios from "axios";
import { useEffect, useState } from "react";
import PublishJobsTableData from "./publishJobsTableData";

const PublishedJobs = () => {
    const [publishJobs, setPublishJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalJobs, setTotalJobs] = useState();
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllPublishJobs = async () => {
            setLoading(true)
            axios.get(`/api/v1/jobs?page=${page}&limit=10`)
                .then(res => {
                    if (res.data.success) {
                        setPublishJobs(res.data.result)
                        setPage(res.data.currentPage)
                        setTotalJobs(res.data.totalJobs)
                        setTotalPages(res.data.totalPages)
                        setLoading(false)
                    }
                    setLoading(false)
                })
        }
        getAllPublishJobs()
    }, [page])
    const handleNext = () => {
        setPage(page + 1)
    }
    const handlePrev = () => {
        setPage(page - 1)
    }
    return (
        <div>
            <div className="min-h-[550px]">
                {loading ? <Loading /> : <PublishJobsTableData publishJobs={publishJobs} totalJobs={totalJobs} />}
            </div>
            <div className="flex justify-between items-center my-3">
                <p>Current {page} of {totalPages} Total Pages</p>
                <div className="flex gap-3">
                    <button disabled={page === 1} onClick={handlePrev} className="py-1.5 px-4 rounded-l-full bg-blue-600 text-white disabled:bg-blue-300">Prev</button>
                    <button disabled={page === totalPages} onClick={handleNext} className="py-1.5 px-4 rounded-r-full bg-blue-600 text-white disabled:bg-blue-300">Next</button>
                </div>
            </div>
        </div>
    );
};

export default PublishedJobs;
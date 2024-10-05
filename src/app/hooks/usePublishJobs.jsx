'use client'
import axios from "axios";
import { useEffect, useState } from "react";

const usePublishJobs = () => {
    const [publishJobs, setPublishJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalJobs, setTotalJobs] = useState();
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllPublishJobs = async () => {
            setLoading(true)
            console.log(page);
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
    return ([publishJobs, totalJobs, page, setPage, totalPages, loading]);
};

export default usePublishJobs;
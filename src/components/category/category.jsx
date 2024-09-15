'use client'

import Loading from "@/app/loading";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import JobsTemplate from "../shared/jobsTemplate";

const CategoryJobsWithPagination = ({ slug }) => {
    
    const [page, setPage] = useState(1)
    const [jobs, setJobs] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {     
        const fetchCategoryJobs = async (slug, page) => {
            setLoading(true)
            const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
            await axios.get(`${baseUrl}/api/v1/jobs/category-wise-jobs/${slug}?page=${page}&limit=10`)
            .then(res => {                
                if(res.data.success){
                    setJobs(res.data?.result)
                    setTotalPages(res.data?.totalPages)
                    setPage(res.data?.currentPage)
                    setLoading(false)
                }
                setLoading(false)
            })
        }

        fetchCategoryJobs(slug, page)
    }, [slug, page])

    const handleNext = () =>{
        setPage(page + 1)
    }
    const handlePrevius = () => {
        setPage(page - 1)
    }
    return (
        <div>
            {
                loading ? <Loading /> : <JobsTemplate jobs={jobs} />
            }
            <div className="my-10 flex items-center justify-between gap-5">
                <p>{page} of {totalPages} Pages</p>
                <div className="flex items-center gap-3">
                    <button onClick={handlePrevius} disabled={page === 1} className="flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black"><IconArrowNarrowLeft stroke={2} />Previous</button>
                    <button onClick={handleNext} disabled={page === totalPages} className='flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black'>Next<IconArrowNarrowRight stroke={2} /></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryJobsWithPagination;
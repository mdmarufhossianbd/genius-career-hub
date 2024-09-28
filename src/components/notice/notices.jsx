'use client'

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import NoticeCard from "./noticeCard";

const Notices = ({category}) => {
    const [page, setPage] = useState(1);
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(false)
    const [totalNotice, setTotalNotice] = useState()
    const [totalPages, setTotalPages] = useState()
    
    useEffect(() => {
        const getNoticesByCategory = async() => {     
            setLoading(true)   
            await axios.get(`/api/v1/notice/category?category=${category}&page=${page}&limit=10`, {cache : 'no-store'})
            .then(res => {
                if(res.data.success){
                    setNotices(res.data.result)
                    setPage(res.data.currentPage)
                    setTotalNotice(res.data.totalNotice)
                    setTotalPages(res.data.totalPages)
                    setLoading(false)  
                }
                setLoading(false)  
            })
        }
        getNoticesByCategory()
    },[category, page])

    const handlePrevius = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }
    
    return (
        <div className="my-12 md:my-16 lg:my-20">
            {
                loading && <div className="flex items-center justify-center mt-32">
                    <ImSpinner9 className="animate-spin" size={50} />
                </div>
            }
            {
                notices.map( item => <NoticeCard key={item._id} item={item} />)
            }
            {
                totalNotice > 10 && <div className="my-5 mx-2 flex items-center justify-between gap-5">
                    <p>{page} of {totalPages} Pages</p>
                    <div className="flex items-center gap-3">
                        <button onClick={handlePrevius} disabled={page === 1} className="flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black"><IconArrowNarrowLeft stroke={2} />Previous</button>
                        <button onClick={handleNext} disabled={page === totalPages} className='flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black'>Next<IconArrowNarrowRight stroke={2} /></button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Notices;
'use client'
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

const Notices = () => {
    const [notices, setNotices] = useState([]);
    const [page, setPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalNotices, setTotalNotices] = useState();
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const getAllNotices = async () => {
            setLoading(true)
            await axios.get(`/api/v1/notice?page=${page}&limit=10`)
                .then(res => {
                    if (res.data?.success) {
                        setNotices(res.data?.result);
                        setTotalNotices(res.data?.totalNotices);
                        setTotalPages(res.data?.totalPages);
                        setPages(res.data?.currentPage);
                        setLoading(false)
                    }
                    setLoading(false)
                })
        }
        getAllNotices()
    }, [page])

    const handlePrevius = () => {
        setPages( page - 1)
    }

    const handleNext = () => {
        setPages( page + 1)
    }

    return (
        <div className="grid grid-cols-1 gap-2">
            {
                loading && <div className="flex items-center justify-center mt-32">
                        <ImSpinner9 className="animate-spin" size={50} />
                </div>
            }
            {
                notices?.map(item =>
                    <div key={item?._id} className="p-4 rounded border flex items-center justify-between">
                        <div>
                            <h2>{item?.title}</h2>                            
                        </div>
                        <Link className="px-5 py-2 rounded-md bg-[#1e508c] text-white" href={`/notice/${item?._id}`}>Notice Details</Link>
                    </div>
                )
            }
            {
                totalNotices > 10 && <div className="my-5 mx-2 flex items-center justify-between gap-5">
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
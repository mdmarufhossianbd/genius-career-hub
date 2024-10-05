'use client'

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const Pagination = ({ page, setPage, totalPages }) => {
    
    const handleNext = async() => {
        setPage(page + 1)         
    }
    const handlePrev = () => {
        setPage(page - 1)
    }

    return (
        <div className="flex justify-between items-center mt-5">
            <p>{page} of {totalPages} Total Pages</p>
            <div className="flex items-center gap-3">
                    <button onClick={handlePrev} disabled={page === 1} className="flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black"><IconArrowNarrowLeft stroke={2} />Previous</button>
                    <button onClick={handleNext} disabled={page === totalPages} className='flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black'>Next<IconArrowNarrowRight stroke={2} /></button>
            </div>
        </div>
    );
};

export default Pagination;
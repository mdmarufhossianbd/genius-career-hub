'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import axios from "axios";
import { toast } from "sonner";
import EditNotice from "../notice/editNotice";

const Notices = ({ notices, page, setPage, totalPages, setDeleted, setEdit }) => {

    const handleNext = () => {
        setPage(page + 1)
    }
    const handlePrevius = () => {
        setPage(page - 1)
    }

    const handleDelte = async(id) => {
        await axios.delete('/api/v1/notice', {data : {id}})
        .then(res => {
            if(res.data?.result?.acknowledged){
                setDeleted(true)
                toast.success(res.data?.message)
            }
            setDeleted(true)
        })
    }

    return (
        <div>
            <div className="border my-5 rounded">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Notice PDF</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            notices?.map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{idx + 1}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.pdfLink}</TableCell>
                                    <TableCell className="text-right flex gap-2 items-center justify-center">
                                        <EditNotice item={item} setEdit={setEdit} />
                                        <button onClick={() => {handleDelte(item._id)}} className="bg-[#1e508c] text-white px-4 py-1.5 rounded hover:bg-[#2e76ce] duration-300">Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <div className="my-5 mx-2 flex items-center justify-between gap-5">
                <p>{page} of {totalPages} Pages</p>
                <div className="flex items-center gap-3">
                    <button onClick={handlePrevius} disabled={page === 1} className="flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black"><IconArrowNarrowLeft stroke={2} />Previous</button>
                    <button onClick={handleNext} disabled={page === totalPages} className='flex gap-1 px-5 py-2 bg-[#1e508c] hover:bg-[#184174] text-white duration-500 rounded-md disabled:cursor-not-allowed disabled:bg-[#f6f8fc] disabled:text-black'>Next<IconArrowNarrowRight stroke={2} /></button>
                </div>
            </div>
        </div>
    );
};

export default Notices;
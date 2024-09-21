'use client'
import AddNoticeModel from "@/components/admin/add-notice/addNoticeModel";
import Notices from "@/components/admin/add-notice/notices";
import CustomLoading from "@/components/shared/customLoading";
import PageIntro from "@/components/shared/pageIntro";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";


const AddNotice = () => {
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(1);
    const [addNotice, setAddNotice] = useState(false)
    const [totalPages, setTotalPages] = useState();
    const [totalNotices, setTotalNotices] = useState();
    const [isLoading, setLoading] = useState(false)
    const [deleted, setDeleted] = useState(false)
    
    useEffect(() => {
        const getAllNotices = async() => {
            setLoading(true)
            await axios.get(`/api/v1/notice?page=${page}&limit=10`)
            .then(res => {
                if(res.data.success){
                    setNotices(res.data?.result)
                    setTotalPages(res.data?.totalPages)
                    setPage(res.data?.currentPage)
                    setTotalNotices(res.data?.totalNotices)
                    setAddNotice(false)
                    setLoading(false)
                    setDeleted(false)
                }
                setLoading(false)
            })
        }
        
        getAllNotices()
        
    },[page, addNotice, deleted])

    return (
        <div>
            <div className="mx-5  border p-5 rounded">
                {
                    isLoading && <CustomLoading isLoading={isLoading} />
                }
                <PageIntro pageName={'Notice'} />
                <div className="flex justify-between items-center">
                    <div>
                        <AddNoticeModel setAddNotice={setAddNotice} />
                    </div>
                    <p>Total Notices : {totalNotices}</p>
                    <div>
                        <Input placeholder='search here' />
                    </div>                    
                </div>
                <Notices notices={notices} page={page} setPage={setPage} totalPages={totalPages} setDeleted={setDeleted}/>
            </div>
        </div>
    );
};

export default AddNotice;
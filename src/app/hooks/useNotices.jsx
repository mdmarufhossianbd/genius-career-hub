'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

const useNotices = () => {
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(1);
    const [addNotice, setAddNotice] = useState(false)
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [totalNotices, setTotalNotices] = useState();
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const getAllNotices = async() => {
            setLoading(true)
            await axios.get(`/api/v1/notice?page=${page}&limit=10`)
            .then(res => {
                if(res.data.success){
                    setNotices(res.data?.result)
                    setTotalPages(res.data?.totalPages)
                    setCurrentPage(res.data?.currentPage)
                    setTotalNotices(res.data?.totalNotices)
                    setAddNotice(false)
                    setLoading(false)
                }
                setLoading(false)
            })
        }
        
        getAllNotices()
        
    },[page, addNotice])
    
    return ([notices, isLoading, setPage, setAddNotice, totalPages, currentPage, totalNotices]);
};

export default useNotices;
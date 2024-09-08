'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const useCompany = () => {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setLoading] = useState(false)

    const getAllCompany = async() =>{
        setLoading(true)
        await axios.get('/api/v1/company')
        .then(res => {
            setCompanies(res.data?.result)
            setLoading(false)
        })
    }

    useEffect(() => {
        getAllCompany()
    },[])
    return ([companies, isLoading, getAllCompany]);
};

export default useCompany;
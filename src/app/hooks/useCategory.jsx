"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const getCategories = async () => {
        setLoading(true)
        await axios.get('/api/v1/category')
        .then(res => {
            setCategories(res.data?.result)
            setLoading(false)
        })
    }

    useEffect(() => { 
        getCategories()
    }, [])
    
    return ([categories, isLoading, getCategories]);
};

export default useCategories;
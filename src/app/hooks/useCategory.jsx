"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getCategories = async () => {
            await axios.get('/api/v1/category')
            .then(res => {
                setCategories(res.data?.result)
                setLoading(false)
            })
        }
        getCategories()
    }, [])
    
    return ([categories, isLoading]);
};

export default useCategories;
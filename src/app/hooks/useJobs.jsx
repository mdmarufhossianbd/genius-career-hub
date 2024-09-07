"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getAllJobs = async() => {
            await axios.get('/api/v1/jobs')
            .then(res => {
                console.log(res.data);
                setJobs(res.data.result)
                setLoading(false)
            })
        }

        getAllJobs()

    },[])

    return ([jobs, isLoading]);
};

export default useJobs;
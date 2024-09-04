import axios from 'axios';
import { useEffect, useState } from 'react';

const useCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        const getCompanies = async() =>{
            await axios.get('/api/v1/company')
            .then(res => {                
                setCompanies(res.data?.result)
                setLoading(false)
            })
        }
        getCompanies()
    },[])

    return ([companies, isLoading]);
};

export default useCompanies;
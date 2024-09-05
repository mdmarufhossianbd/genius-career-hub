'use client'
import CustomLoading from "@/components/shared/customLoading";
import axios from "axios";
import { useEffect, useState } from "react";

const EditJobPost = ({params}) => {
    const [editJob, setEditJob] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getEditJobs = async() => {
            await axios.get(`/api/v1/jobs/${params.slug}`)
            .then(res => {
                setEditJob(res.data.result)
                console.log(res.data);
                setLoading(false)
            })
        }
        getEditJobs()
    },[params.slug])

    console.log(editJob);

    return (
        <div>
            
            <CustomLoading isLoading={isLoading} />
        </div>
    );
};

export default EditJobPost;
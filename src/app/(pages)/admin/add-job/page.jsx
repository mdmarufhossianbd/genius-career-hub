"use client"
import AddExperience from "@/components/admin/add-job/addExperience";
import AddJobDetails from "@/components/admin/add-job/addJobDetails";
import AddSlug from "@/components/admin/add-job/addSlug";
import Addthumbnail from "@/components/admin/add-job/addthumbnail";
import SelectCategory from "@/components/admin/add-job/selectCategory";
import SelectCompany from "@/components/admin/add-job/selectCompany";
import SelectJobDeadline from "@/components/admin/add-job/selectJobDeadline";
import SelectJobType from "@/components/admin/add-job/selectJobType";
import SelectLocation from "@/components/admin/add-job/selectLocation";
import SimpleLoading from "@/components/shared/simpleLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddJobs = () => {   
    const [title, setTitle] = useState();
    const [suggestSlug, setSuggestSlug] = useState();
    const [uniqueSlug, setUniqueSlug] = useState();
    const [slugValid, setSlugValid] = useState(null);
    const [thumbnailUrl, setThumbnailUrl] = useState()
    const [description, setDescription] = useState();
    const [vacancy, setVacancy] = useState()
    const [experince, setExperince] = useState("No")
    const [experinceDuration, setExperinceDuration] = useState()
    const [jobType, setJobType] = useState();
    const [jobDeadline, setJobDeadline] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const [location, setLocation] = useState();
    const [salary, setSalary] = useState();
    const [loading, setLoading] = useState(false);
    const [meta, setMeta] = useState();
    const [applyLink, setApplyLink] = useState();
    
    const handleTitle = (e) => {
        setTitle(e.target.value)
        const lowerCaseTitle = title.toLowerCase()
        const generateSlug = lowerCaseTitle?.split(' ').join('-')
        setSuggestSlug(generateSlug)
    }; 

    const handlePublishJob = async () => {
        setLoading(true)
        const jobInfo = {
            title, description, thumbnailUrl, vacancy, experince, experinceDuration, salary, jobType, jobDeadline, category, company, location, meta, author : "admin", slug : uniqueSlug, applyLink
        }
        
        try {
            if(experince === "Yes" && !experinceDuration){
                setLoading(false)
                return toast.error('Experince Duration need to added')
            } else {
                await axios.post('/api/v1/job', jobInfo)
                .then(res => {
                    if(res.data.success){
                        toast.success(res.data.message)
                    } else{
                        toast.error(res.data.message)
                    }
                    setLoading(false)
                })
            }
            
        } catch (error) {            
            toast.error(error.message)
            setLoading(false)
        }
    }


    return (
        <div className="px-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />            
            <h2 className="text-4xl font-bold text-center my-10">Add New Job Post</h2>
            <div className="flex gap-5">
                <div className="w-[80%] space-y-2">
                    <p>Job Title</p>                    
                    <Input onKeyUp={handleTitle} name="title" placeholder="Enter job title" />   
                    <AddSlug suggestSlug={suggestSlug} setUniqueSlug={setUniqueSlug} slugValid={slugValid} setSlugValid={setSlugValid} />
                    <p className="py-1">Job Meta Description</p>
                    <Textarea onChange={(e) => setMeta(e.target.value)} rows={3} placeholder='write meta description' />
                    <AddJobDetails setDescription={setDescription} />                    
                </div>
                <div className="bg-slate-100 w-[19%] p-5 rounded-md flex flex-col gap-3">
                    <Addthumbnail setThumbnailUrl={setThumbnailUrl} />
                    <Input onChange={(e) => setVacancy(e.target.value)} className="border-black" placeholder="Enter Vacancy" type='number' />
                    <Input onChange={(e) => setSalary(e.target.value)} className="border-black" placeholder="Enter Salary" />                    
                    <AddExperience setExperince={setExperince} setExperinceDuration={setExperinceDuration}/>
                    <SelectJobDeadline setJobDeadline={setJobDeadline} jobDeadline={jobDeadline} />
                    <SelectJobType setJobType={setJobType} />
                    <SelectCategory setCategory={setCategory} />
                    <SelectCompany setCompany={setCompany} />
                    <SelectLocation setLocation={setLocation} />
                    <Input className='border border-black' onChange={(e) => setApplyLink(e.target.value)} placeholder='Enter Apply link'/>
                    <Button onClick={handlePublishJob} disabled={!title || !description || !thumbnailUrl || !vacancy || !salary || !jobType || !jobDeadline || !category || !company || !location || !meta || !slugValid} className='w-full'>Publish</Button>
                    <SimpleLoading loading={loading}/>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;
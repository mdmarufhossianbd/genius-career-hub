'use client'
import CustomLoading from "@/components/shared/customLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import EditCategory from "./editCategory";
import EditCompany from "./editCompany";
import EditDateline from "./editDateline";
import EditExperience from "./editExperience";
import EditJobDetails from "./editJobDetails";
import EditJobType from "./editJobType";
import EditLocation from "./editLocation";
import EditSlug from "./editSlug";
import EditThumbnail from "./editThumbnailUrl";

const EditJobComponents = ({ job }) => {
    const {_id, title, slug, category, company, description, experince, experinceDuration, jobDeadline, jobType, location, salary, thumbnailUrl, vacancy, applyLink, companyInfo, meta, author} = job;

    const [newtitle, setTitle] = useState(title);
    const [newSlug, setSlug] = useState(slug);
    const [newMeta, setMeta] = useState(meta)
    const [newDescription, setDescription] = useState(description)
    const [newThumbnailUrl, setThumbnailUrl] = useState();
    const [newVacancy, setVacancy] = useState(vacancy);
    const [newSalary, setSalary] = useState(salary);
    const [newExperince, setExperince] = useState(experince);
    const [newExperinceDuration, setExperinceDuration] = useState(experinceDuration);
    const [newJobDeadline, setJobDeadline] = useState(jobDeadline);
    const [newJobType, setJobType] = useState(jobType);
    const [newCategory, setCategory] = useState(category);
    const [newCompany, setCompany] = useState(company);
    const [newLocation, setLocation] = useState(location);
    const [newApplyLink, setApplyLink] = useState(applyLink);
    const [isLoading, setLoading] = useState(false);
    
    const handlePublish = async() => {
        setLoading(true)
        const jobInfo = {
            _id,
            title : newtitle,
            slug : newSlug,
            meta : newMeta,
            description : newDescription,
            thumbnailUrl: newThumbnailUrl ? newThumbnailUrl : thumbnailUrl,
            vacancy : newVacancy,
            salary : newSalary,
            experince : newExperince,
            experinceDuration : newExperinceDuration,
            jobDeadline : newJobDeadline,
            jobType : newJobType,
            category : newCategory,
            company : newCompany,
            location : newLocation,
            applyLink : newApplyLink,
            author,
            companyInfo
        }
        
        try {
            await axios.put('/api/v1/job', jobInfo)
            .then(res => {                
                if(res.data?.result?.modifiedCount >= 0){
                    toast.success(res.data?.message)
                    setLoading(false)
                }
                setLoading(false)
            })
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="flex gap-5">
            <Toaster position="top-right" richColors />
            <CustomLoading isLoading={isLoading} />
            <div className="w-[80%] space-y-2">
                <p>Title</p>
                <Input onChange={(e) => setTitle(e.target.value)} defaultValue={title} placeholder="Enter job title" /> 
                <EditSlug setSlug={setSlug} newSlug={newSlug} />
                <p className="py-1">Job Meta Description</p>
                <Textarea onChange={(e) => setMeta(e.target.value)} rows={4} defaultValue={meta} placeholder='write meta description' />
                <EditJobDetails setDescription={setDescription} description={description}/>                
            </div>
            <div className="bg-slate-100 w-[20%] p-5 rounded-md flex flex-col gap-3">
                <EditThumbnail setThumbnailUrl={setThumbnailUrl} thumbnailUrl={thumbnailUrl} newThumbnailUrl={newThumbnailUrl}/>
                <Input onChange={(e) => setVacancy(e.target.value)} defaultValue={newVacancy} className="border-black" placeholder="Enter Vacancy" type='number' />
                <Input onChange={(e) => setSalary(e.target.value)} className="border-black" placeholder="Enter Salary" />  
                <EditExperience experince={experince} experinceDuration={experinceDuration} setExperince={setExperince} setExperinceDuration={setExperinceDuration} />
                <EditDateline setJobDeadline={setJobDeadline} newJobDeadline={newJobDeadline}/>
                <EditJobType jobType={jobType} setJobType={setJobType} />
                <EditCategory category={category} setCategory={setCategory} />
                <EditCompany setCompany={setCompany} company={company}/>
                <EditLocation setLocation={setLocation} location={location} />
                <Input defaultValue={applyLink} className='border border-black' onChange={(e) => setApplyLink(e.target.value)} placeholder='Enter Apply link'/>
                <Button onClick={handlePublish} disabled={!newtitle || !newSlug}>Published</Button>
            </div>        
        </div>
    );
};

export default EditJobComponents;
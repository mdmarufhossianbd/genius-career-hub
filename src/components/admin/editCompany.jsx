'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const EditCompany = ({ company, getAllCompany }) => {
    const [name, setName] = useState(company?.name);
    const [description, setDescription] = useState(company?.description);
    const [website, setWebsite] = useState(company?.website)
    const [address, setAddress] = useState(company?.address);
    const [logo, setLogo] = useState(company?.logo);
    // const [logoUpload, setLogoUpload] = useState()
    const cloudinaryCloudName= process.env.NEXT_PUBLIC_CLOUDINARY_COLUD_NAME;

    const handleLogoUpload = async(e) => {
        const [logoData] = e.target.files;
        const formData = new FormData();
        formData.append('file', logoData);
        formData.append('upload_preset', 'company-logo-upload');
        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`, formData)
            setLogo(res.data?.url)    
            toast.success('Company logo uploaded successfully')
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleUpdate = async () => {
        const companyInfo = {
            _id : company._id, name, description, address, website, logo
        }
        try {
            await axios.put('/api/v1/company', companyInfo)
            .then(res => {                
                if(res.data?.result?.modifiedCount > 0){
                    toast.success(res.data?.message)
                    getAllCompany()
                }
            })
        } catch (error) {
            toast.error(error.res.data?.message)
        }
        
    }
    return (
        <AlertDialog>
            <Toaster richColors position="top-right" />
            <AlertDialogTrigger asChild>
                <Button variant="outline">Edit</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit information of {company?.name}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <form className="flex flex-col gap-2">
                            <Input onChange={(e) => setName(e.target.value)} defaultValue={name} placeholder='Company name' className=" text-black" />
                            <Textarea rows={6} onChange={(e) => setDescription(e.target.value)} placeholder='Company description' defaultValue={description} className='text-black' />
                            <Input type="url" onChange={(e) => setWebsite(e.target.value)} defaultValue={website} placeholder='compnay website' className="text-black" />
                            <Input onChange={(e) => setAddress(e.target.value)} defaultValue={address} placeholder='Company address' className="text-black" />
                            <Input accept="image/*" onChange={handleLogoUpload} type="file" />
                        </form>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleUpdate}>Update</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default EditCompany;
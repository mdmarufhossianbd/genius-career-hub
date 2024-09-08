"use client"

import AllCompanies from "@/components/admin/allCompanies";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { storage } from "@/config/firebase.config";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Company = () => {
    const [companyName, setCompanyName] = useState();
    const [companyAddress, setCompanyAddress] = useState();
    const [companyDescription, setCompanyDescription] = useState();
    const [website, setWebsite] = useState()
    const [keyword, setKeyword] = useState();
    const [isLoading, setLoading] = useState(false);
    const [companyLogo, setCompanyLogo] = useState();   

    const handleSaveCompany = async () => {
        setLoading(true)
        if (!companyLogo) {
            setLoading(false)
            return toast.error("Please select compnay logo")
        }
        const formData = new FormData();
        formData.append('companyLogo', companyLogo);
        const fileName = Date.now() + '.jpg'
        const storageRef = ref(storage, 'genius-career-hub/' + fileName)
        await uploadBytes(storageRef, companyLogo).then((snapshort) => { }).then(res => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
                const companyInfo = {
                    name: companyName,
                    description: companyDescription,
                    address: companyAddress,
                    website,
                    logo: downloadURL
                };
                const res = await axios.post('/api/v1/company', { companyInfo })
                if (res.data.success) {
                    toast.success(res.data.message)
                    
                    handleReset();
                }
            })
        })
        setLoading(false)
    }

    const handleReset = () => {
        setCompanyAddress()
        setCompanyDescription()
        setCompanyLogo()
        setCompanyName()
        setWebsite()
    }

    return (
        <div className="px-5">
            <h2 className="text-4xl font-semibold text-center my-10">Add Company</h2>
            {/* add company*/}
            <div className="flex justify-between">
                <AlertDialog>
                    <AlertDialogTrigger className="bg-blue-400 text-white hover:bg-blue-500 px-5 py-2 rounded-md duration-200 hover:text-white">
                        {isLoading ? "Loading" : "Add Company"}
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Add new Company</AlertDialogTitle>
                            <AlertDialogDescription>
                                <form className="flex flex-col gap-2">
                                    <Input onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter company name" className=" text-black" />
                                    <Textarea rows={6} onChange={(e) => setCompanyDescription(e.target.value)} placeholder="Write about this compnay within 150 to 200 words." />
                                    <Input type="url" onChange={(e) => setWebsite(e.target.value)} placeholder="Enter company website" className="text-black" />
                                    <Input onChange={(e) => setCompanyAddress(e.target.value)} placeholder="Enter company address" className=" text-black" />
                                    <Input onChange={(e) => setCompanyLogo(e.target.files[0])} type="file" placeholder="select company logo" />
                                </form>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction disabled={!companyName || !companyAddress || !companyDescription || !companyLogo} onClick={handleSaveCompany}>
                                Save
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>

                </AlertDialog>
                <div className="flex items-center">
                    <input type="text" onChange={(e) => setKeyword(e.target.value)} placeholder="Enter company name" className="focus:outline-none border-t border-l border-b rounded-l-full pl-4 py-1" />
                    <Button disabled={!keyword} className="rounded-r-full border-t border-r bg-blue-300 text-black hover:bg-blue-400 hover:text-white duration-150 border-b px-5">Search</Button>
                </div>
            </div>
            {/* all companies */}
            <hr className="my-5" />
            <div>
                <AllCompanies isLoading={isLoading} />
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Company;
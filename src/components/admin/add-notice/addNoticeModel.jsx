'use client'
import CustomLoading from "@/components/shared/customLoading";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getAllNotices } from "@/utils/fetchNotices";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";


const AddNoticeModel = ({setAddNotice}) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [pdfLink, setPdfLink] = useState();
    const [loading, setLoading] = useState(false)

    const handleAddNotice = async() => {
        setLoading(true)
        const noticeInfo = {
            title, description, category, pdfLink
        }
        await axios.post('/api/v1/notice', noticeInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.success){
                setLoading(false)
                setAddNotice(true)
                toast.success(res.data.message)
            } else {
                setLoading(false)
                toast.error(res.data.message)
            }  
        })
        await getAllNotices()
    }

    return (
        <AlertDialog>
            <CustomLoading isLoading={loading}/>
            <AlertDialogTrigger className="px-5 py-2 rounded bg-[#1e508c] hover:bg-[#235ca1] text-white">
            Add New Notice
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add new notice</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="flex flex-col gap-5">
                            <Input onChange={(e) => setTitle(e.target.value)} placeholder='Enter notice title' />
                            <Textarea onChange={(e) => setDescription(e.target.value)} placeholder='Enter notice description' rows={10} />
                            <Select onValueChange={(value) => setCategory(value)} >
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General Notice</SelectItem>
                                    <SelectItem value="admit">Admit Notice</SelectItem>
                                    <SelectItem value="exam">Exam Notice</SelectItem>
                                    <SelectItem value="result">Result Notice</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input onChange={(e) => setPdfLink(e.target.value)} placeholder='Enter notice PDF link' />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleAddNotice} className='bg-green-500  hover:bg-green-600 hover:cursor-pointer disabled:cursor-not-allowed' disabled={!title || !description || !pdfLink || !category}>Publish Notice</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
};

export default AddNoticeModel;
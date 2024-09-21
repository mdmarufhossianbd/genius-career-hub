import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";

const EditNotice = ({item, setEdit}) => {
    const [title, setTitle] = useState(item?.title);
    const [description, setDescription] = useState(item?.description);
    const [category, setCategory] = useState(item?.category);
    const [pdfLink, setPdfLink] = useState(item?.pdfLink);
    const handleUpdate = async () =>{
        
        const noticeUpdateInfo = {
            title, description, category, pdfLink
        }
        await axios.put('/api/v1/notice', noticeUpdateInfo)
        .then(res => {
            setEdit(true)
            console.log(res.data);
        })
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <button className="bg-[#1e508c] text-white px-4 py-1.5 rounded hover:bg-[#2e76ce] duration-300">Edit</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit Notice</AlertDialogTitle>
                    <AlertDialogDescription className='space-y-3'>
                        <Input defaultValue={item?.title} onChange={(e) => setTitle(e.target.value)}/>
                        <Textarea defaultValue={item?.description} rows={10} onChange={(e) => setDescription(e.target.value)} />
                        <Select onValueChange={(value) => setCategory(value)} defaultValue={item?.category} >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General Notice</SelectItem>
                                    <SelectItem value="admit">Admit Notice</SelectItem>
                                    <SelectItem value="exam">Exam Notice</SelectItem>
                                    <SelectItem value="result">Result Notice</SelectItem>
                                </SelectContent>
                            </Select>
                        <Input defaultValue={item?.pdfLink} placeholder='Enter pdf link' onChange={(e) => setPdfLink(e.target.value)}/>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-green-700 hover:bg-green-600 duration-200' onClick={handleUpdate}>Update Notice</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
};

export default EditNotice;
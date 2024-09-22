'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const EditCategory = ({ category, getCategories }) => {
    const [categoryUpdateName, setCategoryUpdateName] = useState(category.categoryName);
    const [description, setDescription] = useState(category.description);
    const [slug, setSlug] = useState(category.slug);
    
    const handleUpdate = async () => {
        const updateInfo = {
            _id : category._id,
            categoryName : categoryUpdateName,
            description : description,
            slug : slug
        }
        
        try {
            await axios.patch('/api/v1/category', updateInfo)
            .then(res => {
                if(res.data?.result?.modifiedCount >= 0){                    
                    toast.success(res.data?.message)
                    getCategories()                    
                }                
            })
        } catch (error) {
            toast.error(error.res.data?.message)
        }
    }
    return (
        <AlertDialog>
            <Toaster richColors position="top-right"  />
            <AlertDialogTrigger asChild>
                <Button variant="outline">Edit</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader >
                    <AlertDialogTitle>Edit Category {category?.categoryName}</AlertDialogTitle>
                    <AlertDialogDescription className='space-y-3'>
                        <Input defaultValue={category?.categoryName} onChange={(e) => setCategoryUpdateName(e.target.value)} placeholder='Category title' />
                        <Input defaultValue={category?.slug} placeholder='Category slug' onChange={(e) => setSlug(e.target.value)} />
                        <Textarea defaultValue={category?.description} rows={10} placeholder='Category description' onChange={(e) => setDescription(e.target.value)} />
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

export default EditCategory;
"use client"
import useCategories from "@/app/hooks/useCategory";
import AllCategories from "@/components/admin/allCategories";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Category = () => {
    const [keyword, setKeyword] = useState();
    const [categoryName, setCategoryName] = useState();    
    const [isLoading, setLoading] = useState(false);
    const [getCategories] = useCategories()
    const handleSaveCategory = async () => {
        setLoading(true);
        try {
            await axios.post('/api/v1/category', { categoryName })
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    getCategories()
                    setLoading(false)
                }else {
                    toast.error(res.data.message)
                    setLoading(false)
                }
            })            
        } catch (error) {
            console.log('data sending error', error);
        }
    }

    return (
        <div className="px-5">
            <h2 className="text-5xl font-semibold text-center my-10">Category </h2>
            <div className="flex justify-between">
                {/* add category */}
                <div>
                    <AlertDialog>
                        <AlertDialogTrigger className="bg-blue-400 px-5 py-2 rounded-md hover:bg-blue-500 hover:text-white duration-300">
                            {isLoading ? "Adding Category" : "Add Category"}
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Add new job category</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <Input onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter category name" className="text-lg text-black" />
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction disabled={!categoryName} onClick={handleSaveCategory} className="bg-blue-400 hover:bg-blue-500">
                                    Save
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                </div>

                {/* search category */}
                <div className="flex w-1/2 justify-end">
                    <input onChange={(e) => setKeyword(e.target.value)} className="focus:outline-none border-t border-l border-b rounded-l-full pl-4" placeholder="Search Category" />
                    <Button disabled={!keyword} className="rounded-r-full border-t border-r bg-blue-300 text-black hover:bg-blue-400 hover:text-white duration-150 border-b px-5">Search</Button>
                </div>
            </div>
            {/* show all category */}
            <AllCategories isLoading={isLoading} />            
        </div>
    );
};

export default Category;
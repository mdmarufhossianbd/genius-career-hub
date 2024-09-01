import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddCategoryModal = () => {
    const [categoryName, setCategoryName] = useState();
    const [isLoading, setLoading] = useState(false);

    const handleSaveCategory = async () => {
        setLoading(true);
        try {
            const res = await axios.post('/api/v1/category', { categoryName })
            if (res.data.status) {
                toast.success(res.data.message);
            }
            else {
                toast.error(res.data.message)
            }
            setLoading(false)
        } catch (error) {
            console.log('data sending error', error);
        }
    }
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>
                    {isLoading ? <Button className="spin-in-180">Loading</Button> : <Button>Add Category</Button>}                
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
    );
};

export default AddCategoryModal;
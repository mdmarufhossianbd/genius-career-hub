"use client"
import useCategories from '@/app/hooks/useCategory';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import CustomLoading from '../shared/customLoading';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const AllCategories = () => {
    const [categories, isLoading, getCategories] = useCategories()

    const handleDelete = async(_id) => { 
        try {
            await axios.delete('/api/v1/category', {data : {_id}})
            .then(res => {
                if(res.data?.success){                    
                    toast.success(res.data?.message)   
                    getCategories()                 
                }                
            })
        } catch (error) {
            toast.error(res.data?.message)
            
        }
    }
    return (
        <div className='border rounded-md'>
            <CustomLoading isLoading={isLoading}/>
            <Toaster richColors position="top-right"  />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-20">SL No</TableHead>
                        <TableHead>Name</TableHead>                        
                        <TableHead>Edit</TableHead>                        
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        categories.map((category, index) => <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{category.categoryName}</TableCell>
                            <TableCell>
                                <Button>Edit</Button>
                                <Button onClick={() => handleDelete(category._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
            
        </div>
    );
};

export default AllCategories;
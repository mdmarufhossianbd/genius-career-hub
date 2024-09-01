"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import CustomLoading from '../shared/customLoading';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const AllCategories = ({ isLoading: loading }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        setIsLoading(true)
        const getAllCategories = async () => {
            await axios.get('/api/v1/category')
            .then(res => setCategories(res.data?.result))
            setIsLoading(false)
        }
        getAllCategories()

    }, [loading])
    return (
        <div className='border rounded-md'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-20">SL No</TableHead>
                        <TableHead>Name</TableHead>                        
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        categories.map((category, index) => <TableRow key={category._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{category.categoryName}</TableCell>
                            <TableCell>
                                <Button>Action</Button>
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
            <CustomLoading isLoading={isLoading} />
        </div>
    );
};

export default AllCategories;
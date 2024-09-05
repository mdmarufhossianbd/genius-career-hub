"use client"
import useJobs from "@/app/hooks/useJobs";
import CustomLoading from "@/components/shared/customLoading";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const AllJobs = () => {
    const [jobs, isLoading] = useJobs();
    const [edit, setEdit] = useState(true)
    // todo : need to use transtack query 

    const handleDelete = async (_id) => {
        try {
            await axios.delete('/api/v1/jobs', { data: { _id } })
                .then(res => {
                    if (res.data.success) {
                        toast.success(res.data.message)
                    } else {
                        toast.error("Failed to delete")
                    }
                })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleEdit = () => {
        if (edit) {
            setEdit(true)
        }
        // else{
        //     setEdit(false)
        // }
    }

    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold text-center my-10">All Jobs</h2>
            <Tabs defaultValue="published" className="">
                <TabsList className='flex items-center justify-center gap-5'>
                    <TabsTrigger value="published">Publish Jobs</TabsTrigger>
                    <TabsTrigger value="Unpublished">Unpublished Jobs</TabsTrigger>
                </TabsList>
                <TabsContent value="published">
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-14">SL No</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Slug</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>location</TableHead>
                                    <TableHead>Publish Status</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    jobs?.map((job, index) => <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{job.title}</TableCell>
                                        <TableCell>{job.slug}</TableCell>
                                        <TableCell>{job.category}</TableCell>
                                        <TableCell>{job.company}</TableCell>
                                        <TableCell>{job.jobType}</TableCell>
                                        <TableCell>{job.location}</TableCell>
                                        <TableCell>{job.publishStatus}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="bg-black text-white px-4 py-2 rounded-md">Action</DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className='hover:cursor-pointer'>
                                                        <Link className="w-full" href={`/jobs/${job.slug}`} target="_blank">View</Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className='hover:cursor-pointer' >
                                                    <Link className="w-full" href={`/admin/edit/${job.slug}`} target="_blank">Edit</Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className='hover:cursor-pointer'>Draft</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleDelete(job._id)} className='hover:cursor-pointer'>Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </div>
                </TabsContent>
                <TabsContent value="Unpublished">
                    <div>
                        nothing add yet
                    </div>
                </TabsContent>
            </Tabs>
            <CustomLoading isLoading={isLoading} />
            <Toaster
                position="top-center"
                reverseOrder={false} />
        </div>
    );
};

export default AllJobs;
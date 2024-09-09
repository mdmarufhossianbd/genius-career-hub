'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

const PublishJobsTableData =  ({ publishJobs }) => {
      const router = useRouter()

    const handleDelte = async(_id) => {
        try {
            await axios.delete('/api/v1/job', {data : {_id}})
            .then(res => {
                if(res.data?.result?.deletedCount > 0){                    
                    toast.success(res.data.message)
                    router.push('/admin/all-jobs')
                }
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
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
                        publishJobs?.map((job, index) => <TableRow key={index}>
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
                                        <DropdownMenuItem className='hover:cursor-pointer'>Make Draft</DropdownMenuItem>
                                        <DropdownMenuItem >
                                            <div className="hover:cursor-pointer w-full" onClick={() => handleDelte(job._id)}>Delete</div>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>)
                    }

                </TableBody>
            </Table>
            <Toaster position="top-right" richColors />
        </div>
    );
};

export default PublishJobsTableData;
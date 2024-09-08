"use client"
import useCompany from "@/app/hooks/useCompany";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import CustomLoading from "../shared/customLoading";
import { Button } from "../ui/button";
import EditCompany from "./editCompany";

function AllCompanies() {
    const [companies, isLoading, getAllCompany] = useCompany()

    const handleDelete = async(_id) => {
        await axios.delete('/api/v1/company', {data : {_id}})
        .then(res => {
            console.log(res.data);
            getAllCompany()
        })
    }
    
    return (
        <>
        <CustomLoading isLoading={isLoading} />
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-20">SL No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Logo</TableHead>
                        <TableHead>Short Description</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Website</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        companies.map((company, index) => <TableRow key={company._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{company.name}</TableCell>
                            <TableCell>
                                <Image src={company.logo} width={100} height={100} alt={company.name} />
                            </TableCell>
                            <TableCell>{company?.description?.slice(0, 100)}</TableCell>
                            <TableCell>{company.address}</TableCell>
                            <TableCell>
                                <Link href={company.website} target="_blank">{company.website}</Link>
                            </TableCell>
                            <TableCell className='flex items-center justify-center gap-2 h-[90px]'>
                                <EditCompany company={company} getAllCompany={getAllCompany} />
                                <Button variant='destructive' onClick={() => handleDelete(company._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>

        </div>
        </>
    );
}

export default AllCompanies;

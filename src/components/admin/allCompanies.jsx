"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomLoading from "../shared/customLoading";
import { Button } from "../ui/button";

function AllCompanies({isLoading : Loading}) {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        const getAllCompany =async() => {            
            await axios.get('/api/v1/company')
            .then(res => setCompanies(res.data?.result))
            setLoading(false)
        }
        getAllCompany();
        
    },[Loading])
  return (
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
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>
                        <Image src={company.logo} width={100} height={100} alt={company.name}/>
                    </TableCell>
                    <TableCell>{company.description.slice(0, 200)}</TableCell>
                    <TableCell>{company.address}</TableCell>
                    <TableCell>
                        <Link href={company.website} target="_blank">{company.website}</Link>
                    </TableCell>
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
}

export default AllCompanies;

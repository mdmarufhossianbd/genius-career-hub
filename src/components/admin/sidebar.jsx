"use client"
import { IconBellRingingFilled, IconBriefcaseFilled, IconCategoryFilled, IconHomeFilled, IconSquareRoundedPlusFilled } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';


const Sidebar = () => {    
    const pathname = usePathname()
    const handleLogout = () => {
        signOut()
    }
    const sideberLinks = [
        
        {
            name: "Add Job",
            href: "/admin/add-job",
            icon: <IconSquareRoundedPlusFilled />
        },
        {
            name: "All Jobs",
            href: "/admin/all-jobs",
            icon: <IconBriefcaseFilled />
        },
        {
            name: "Notice",
            href: "/admin/notice",
            icon: <IconBellRingingFilled />
        },
        {
            name: "Category",
            href: "/admin/category",
            icon: <IconCategoryFilled />
        },
        {
            name: "Company",
            href: "/admin/company",
            icon: <IconHomeFilled />
        },
    ]

    return (
        <div className="border-r h-[calc(100%-100px)]">
            <div className='h-32 flex items-center justify-center flex-col'>
                <p>Main Logo</p>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
            <p className='border-b mb-2 pl-4'>Main</p>
            {sideberLinks.map((link, index) => (
                <Link key={index} href={link.href} className={`flex items-center gap-2 border-b bg-blue-300 py-2 pl-4 pr-2 ${pathname === link.href && "bg-blue-400"}`}>{link.icon}{link.name}</Link>                
            ))}            
        </div>
    );
};

export default Sidebar;
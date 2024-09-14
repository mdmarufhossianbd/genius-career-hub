'use client'
import { getCategories } from "@/utils/fetchCategories";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from '../../../public/assets/Genius Career Hub.webp';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [categories, setCategories] = useState();
    const getCategoryDetails = async () => {
        const categories = await getCategories()
        setCategories(categories)
    }
    useEffect(() => {
        getCategoryDetails()
    }, [])
    const navLinks = [
        {
            title: 'Govt Jobs',
            link: '/government-job-circular'
        },
        {
            title: 'NGO Jobs',
            link: '/ngo-job-circular'
        },
        {
            title: 'Bank Jobs',
            link: '/bank-job-circular'
        },
        {
            title: 'Admit Card',
            link: '/admit-card'
        },
        {
            title: 'Result',
            link: '/result'
        },
    ]
    const handleCategory = (slug) => {
        router.push(`/category/${slug}`)
    }
    return (
        <div className="border-b py-2 sticky top-0 bg-[#f6f8fc] z-50">
            {/* logo */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
                <div>
                    <Link href={'/'}>
                        <Image className="rounded h-[70px] w-auto" src={logo} width={230} height={80} alt="Genius Career Hub" priority unoptimized />
                    </Link>
                </div>
                {/* large screen navlinks */}
                <div className="lg:flex gap-2 hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-1 rounded bg-[#1e508c] text-white hover:bg-[#2970c7] flex gap-1">Popular Categories <IconCaretDownFilled />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <ScrollArea className='h-[500px]'>
                                {
                                    categories?.map(item => <DropdownMenuItem key={item?._id} onClick={() => handleCategory(item.slug)} className='hover:cursor-pointer'>
                                        {item?.categoryName}
                                    </DropdownMenuItem>)
                                }
                            </ScrollArea>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {
                        navLinks.map((link, idx) => (
                            <Link href={link.link} key={idx} className={`lg:px-3 px-2 py-1 rounded bg-[#1e508c] text-white hover:bg-[#2970c7] ${pathname === link.link && 'bg-[#2970c7]'}`}>{link.title}</Link>
                        ))
                    }
                    <Link className={`px-4 py-1 rounded bg-[#F58F8F] text-black hover:text-white hover:bg-[#ef4444] duration-300 ${pathname === '/notice' && 'bg-[#ef4444] text-white'}`} href={'/notice'}>Notice</Link>
                </div>
                {/* mobile screen navlinks */}
                <div className="lg:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-1 rounded bg-[#1e508c] text-white hover:bg-blue-600 flex gap-1">Menus            <IconCaretDownFilled />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Popular Categroies</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <ScrollArea className='h-[500px]'>
                                            {
                                                categories?.map(item => <DropdownMenuItem key={item?._id} onClick={() => handleCategory(item.slug)} className='hover:cursor-pointer'>
                                                    {item?.categoryName}
                                                </DropdownMenuItem>)
                                            }
                                        </ScrollArea>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            {
                                navLinks.map((link, idx) => (
                                    <DropdownMenuItem key={idx}>
                                        <Link href={link.link}>{link.title}</Link>
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Header;
'use client'
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '../../../public/assets/Genius Career Hub.png';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Header = () => {
    const pathname = usePathname()
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
    return (
        <div className="border-b py-2 sticky top-0 bg-[#f6f8fc] z-50">
            {/* logo */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
                <div>
                    <Link href={'/'}>
                        <Image className="rounded h-[70px] w-auto" src={logo} width={230} height={70} alt="Genius Career Hub" priority unoptimized />
                    </Link>
                </div>
                {/* large screen navlinks */}
                <div className="lg:flex gap-2 hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex gap-1">Popular Categories <IconCaretDownFilled />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>         
                            {/* load all post categories in there with clicable links */}
                            <DropdownMenuItem>Team</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {
                        navLinks.map((link, idx) => (
                            <Link href={link.link} key={idx} className={`lg:px-3 px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 ${pathname === link.link && 'bg-blue-700'}`}>{link.title}</Link>
                        ))
                    }
                    <Link className={`px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 ${pathname === '/notice' && 'bg-red-600'}`} href={'/notice'}>Notice</Link>
                </div>
                {/* mobile screen navlinks */}
                <div className="lg:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex gap-1">Menus            <IconCaretDownFilled />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Popular Categroies</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Email</DropdownMenuItem>
                                        {/* load all category in there with clickable links */}
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
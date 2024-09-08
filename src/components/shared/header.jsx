'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Header = () => {
    const pathname = usePathname();
    const adminPath = pathname === '/admin/:path*'
    return (
        <header className={`h-20 border-b border-[#e4e4e8] sticky top-0 drop-shadow-sm flex items-center bg-[#fcfcfc] z-20 ${adminPath && 'hidden'}`}>
            <div className="flex justify-between max-w-7xl mx-auto flex-1">
            <div>
                <Link href={'/'} className="text-2xl font-semibold">Genius Career Hub</Link>
            </div>
            <div>
            <Link href={'/jobs'}><Button>Jobs</Button></Link>
            </div>
            <div className="flex gap-3">                
                <Link href={'/login'}><Button>Login</Button></Link>
                <Link href={'/admin'}><Button>Admin</Button></Link>
            </div>
            </div>
            
        </header>
    );
};

export default Header;
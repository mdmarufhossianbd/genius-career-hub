import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="h-20 border-b border-[#e4e4e8] sticky top-0 drop-shadow-sm flex items-center bg-[#fcfcfc] z-20">
            <div className="flex justify-between max-w-7xl mx-auto flex-1">
            <div>
                <Link href={'/'} className="text-2xl font-semibold">Genius Career Hub</Link>
            </div>
            <div>
                navlinks 
            </div>
            <div className="flex gap-3">
                <Button>Post A Job</Button>
                <Link href={'/admin'}><Button>Login</Button></Link>
            </div>
            </div>
            
        </header>
    );
};

export default Header;
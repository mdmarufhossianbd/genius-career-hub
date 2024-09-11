import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/assets/Genius Career Hub.png';
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Header = () => {

    return (
        <header className='h-20 border-b border-[#e4e4e8] sticky top-0 drop-shadow-sm flex items-center bg-[#fcfcfc] z-20'>
            <div className="flex justify-between items-center max-w-7xl mx-auto flex-1">
                <div>
                    <Link href={'/'} className="text-2xl font-semibold">
                        <Image className="w-[200px] h-[80px] rounded" src={logo} alt="Genius Career Hub" height={80} width={200} unoptimized priority/>                        
                    </Link>
                </div>
                <div className="flex gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300">
                        Popular Job Categories
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Select Category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link className="w-full" href={'/category/ngo-job-circular'}>NGO Job Circular</Link>
                            </DropdownMenuItem>
                            
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button> <Link href={'/government-job-circular'}>Govt Job Circular</Link></Button>
                    <Button> <Link href={'/ngo-job-circular'}>NGO Job Circular</Link></Button>
                    <Button> <Link href={'/bank-job-circular'}>Bank Job Circular</Link></Button>
                    <Button> <Link href={'/result'}>Result</Link></Button>
                    <Button> <Link href={'/admit-card'}>Admit Card</Link></Button>
                    <Button> <Link href={'/notice'}>Notice</Link></Button>
                </div>
            </div>

        </header>
    );
};

export default Header;
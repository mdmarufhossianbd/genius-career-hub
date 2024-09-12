import { IconDirectionSignFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../../public/assets/Genius Career Hub.png';
import Subscribe from "./subscribe";

const Footer = () => {
    const pages = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About Us',
            url: '/about'
        },
        {
            title: 'Contact Us',
            url: '/contact'
        },
        {
            title: 'Terms & Conditions',
            url: '/terms-and-conditions'
        },
        {
            title: 'Privacy Policy',
            url: '/privacy-policy'
        },
    ]
    const importantLinks = [
        {
            title: 'All Jobs',
            url: '/jobs'
        },
        {
            title: 'Government Job Circulars',
            url: '/government-job-circular'
        },
        {
            title: 'NGO Job Circulars',
            url: '/ngo-job-circular'
        },
        {
            title: 'Bank Job Circulars',
            url: '/bank-job-circular'
        },
        {
            title: 'Admit Card',
            url: '/admit-card'
        },
        {
            title: 'Result',
            url: '/result'
        },
        {
            title: 'Notice',
            url: '/notice'
        },
    ]
    return (
        <div className="bg-[#f6f8fc] pt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 pb-5 px-5">
                <div>
                    <Link href={'/'}>
                        <Image className="rounded lg:h-auto lg:w-auto w-full" src={logo} height={80} width={230} alt="Genius Career Hub" unoptimized priority placeholder="blur" />
                    </Link>
                    <p className="py-3 text-justify">Genius Career Hub is a top job portal in Bangladesh, offering the latest job circular in BD across various industries. Stay updated with recent job opportunities and take the next step in your career effortlessly.</p>
                </div>
                <div>
                    <p className="font-semibold text-lg">Pages</p>
                    <hr />
                    <div className="mt-5 space-y-3">
                        {
                            pages.map((item, inx) => (
                                <Link href={item.url} key={inx} className="flex items-center gap-2 hover:ml-2 duration-300 hover:font-medium"><IconDirectionSignFilled /> {item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">Important Links</p>
                    <hr />
                    <div className="mt-5 space-y-3">
                        {
                            importantLinks.map((item, inx) => (
                                <Link href={item.url} key={inx} className="flex items-center gap-2 hover:ml-2 duration-300 hover:font-medium"><IconDirectionSignFilled /> {item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">Social Links</p>
                    <hr />
                    <div className="mt-5 space-y-3">
                        <Link href={'https://www.facebook.com/JobNewsBD23'} target="_blank" className="flex items-center gap-2 hover:ml-2 duration-300 hover:font-medium"><FaFacebook />
                        Facebook</Link>
                        <Link href={'https://www.youtube.com/@JobNewsBD23'} target="_blank" className="flex items-center gap-2 hover:ml-2 duration-300 hover:font-medium"><FaYoutube />
                        YouTube</Link>
                        <Link href={'https://x.com/mdmarufh974'} target="_blank" className="flex items-center gap-2 hover:ml-2 duration-300 hover:font-medium"><FaTwitter />
                        Twitter</Link>
                        <Subscribe />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#222222d5] py-2">
                <p className="text-white">© {new Date().getFullYear().toString()} All Right reserved by <Link href={'/'} target="_blank" className="text-[#10cbdc] hover:text-[#0da7da] duration-300">Genius Career Hub</Link></p>
            </div>
        </div>
    );
};

export default Footer;
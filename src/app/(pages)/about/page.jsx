import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import aboutUsImage from '../../../../public/assets/about us.webp';

export const metadata = {
    title: "About - Genius Career Hub is the largest BD Job News portal in Bangladesh",
    description: "Genius Career Hub is the largest BD Job News portal in Bangladesh. Offering a vast range of BD Job News opportunities across various industries. Connect with top employers and find your dream job today",
    openGraph: {
        title: "About - Genius Career Hub is the largest BD Job News portal in Bangladesh",
        description: "Genius Career Hub is the largest BD Job News portal in Bangladesh. Offering a vast range of BD Job News opportunities across various industries. Connect with top employers and find your dream job today",
        url: '/about',
        siteName: 'Genius Career Hub',
        images: [
            {
                url: 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1726388509/genius-career-hub/assets/aabr38fiiylqutbdpckb.png',
                width: 1200,
                height: 630,
                alt: 'Genius Career Hub'
            }
        ],
        type: 'website'
    }
};

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-0">
            <div className="bg-blue-200 rounded py-10 my-10">
                <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl">About Us</h2>
            </div>
            <div className="lg:flex items-center lg:gap-10 md:mb-20 mb-10">
                <div className="lg:w-1/2 w-full flex items-center justify-center">
                    <Image src={aboutUsImage} width={500} height={500} alt="genius career hub about us" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <p className="text-justify mb-10">
                        We are the best recruit agency in Bangladesh. You can find your dream jobs. We are a market place to handshake between candidate and employer. We ensure proper jobs for the perfect position. If you have a question please feel free to contact us. info@geniuscareerhub.com
                    </p>
                    <Link href={'/contact'}><Button className='bg-[#1e508c] text-[#fff] text-xl py-5 hover:bg-[#185aaa]'>Contact with us</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;
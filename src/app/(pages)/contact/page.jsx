import ContactForm from "@/components/contactForm/contactForm";
import PageIntro from "@/components/shared/pageIntro";
import Link from "next/link";
import { MdMarkEmailRead } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

export const metadata = {
    title: "Contact - Genius Career Hub is the largest BD Job News portal in Bangladesh",
    description: "Genius Career Hub is the largest BD Job News portal in Bangladesh. Offering a vast range of BD Job News opportunities across various industries. Connect with top employers and find your dream job today",
    openGraph: {
        title: "Contact - Genius Career Hub is the largest BD Job News portal in Bangladesh",
        description: "Genius Career Hub is the largest BD Job News portal in Bangladesh. Offering a vast range of BD Job News opportunities across various industries. Connect with top employers and find your dream job today",
        url: '/contact',
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

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto mb-10">
            <PageIntro pageName={'Contact'} />
            <div className="md:flex md:gap-10 bg-[#1e508c] p-5 rounded">
                <div className="md:w-1/2">
                    <div>
                        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">Get in touch</h2>
                        <p className="text-white">I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                    </div>
                    <div className="lg:mt-20 mt-10 lg:space-y-10 space-y-5">
                        <div className="flex items-center gap-2">
                            <PiPhoneCallFill className="md:text-6xl text-4xl  bg-white p-2 text-black rounded-full" />
                            <Link href={'tel:+8801723010904'}><p className="text-xl text-white">+8801723-010904</p></Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdMarkEmailRead className="md:text-6xl text-4xl bg-white p-2 text-black rounded-full" />
                            <Link href={'mailto:info@geniuscareerhub.com'}><p className="text-xl text-white">info@geniuscareerhub.com</p></Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">Sent us a message</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
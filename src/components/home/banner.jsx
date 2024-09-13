import { PublishJobs } from '@/utils/fetchJobs';
import Image from 'next/image';
import Link from 'next/link';
import bannerBG from '../../../public/assets/banner background.webp';
import bannerImage from '../../../public/assets/banner image.png';
import BannerSearch from './bannerSearch';
const Banner = async () => {
    const publishedJobs = await PublishJobs();
    const anyWhereInBangladesh = publishedJobs.filter(item => item.location === 'Anywhere in Bangladesh');
    const dhaka = publishedJobs.filter(item => item.location === 'Dhaka');
    const barishal = publishedJobs.filter(item => item.location === 'Barishal');
    const khulna = publishedJobs.filter(item => item.location === 'Khulna');
    const rajshahi = publishedJobs.filter(item => item.location === 'Rajshahi');
    const sylhet = publishedJobs.filter(item => item.location === 'Sylhet');
    const chattogram = publishedJobs.filter(item => item.location === 'Chattogram');
    const rangpur = publishedJobs.filter(item => item.location === 'Rangpur');
    const mymensingh = publishedJobs.filter(item => item.location === 'Mymensingh');
    return (
        <div className='my-10'>

            <div className="max-w-7xl mx-auto relative">
                <Image className='w-[960px] md:w-auto md:h-auto h-[530px] rounded' src={bannerBG} width={1280} height={630} unoptimized priority alt='Genius career hub banner' />
                <div className='absolute lg:top-[15%] top-[8%] px-5 flex flex-col-reverse md:flex-row items-center justify-between w-full'>
                    <div className='md:w-[70%] w-full flex flex-col items-center'>
                        <h2 className='md:text-3xl text-2xl font-semibold text-white md:mb-5 mb-3'>Find your drem jobs</h2>
                        <BannerSearch />
                        <div className='md:my-10 mt-3 grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2'>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white col-span-2 xl:col-span-1' href={'/job-location?location=Bangladesh'}>Anywhere in Bangladesh ({anyWhereInBangladesh?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Dhaka'}>Dhaka ({dhaka?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Barishal'}>Barishal ({barishal?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Khulna'}>Khulna ({khulna?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Rajshahi'}>Rajshahi ({rajshahi?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Sylhet'}>Sylhet ({sylhet?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Chattogram'}>Chattogram ({chattogram?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Rangpur'}>Rangpur ({rangpur?.length})</Link>
                            <Link className='px-2 py-1 rounded bg-gradient-to-r from-[#2E3241] to-[#171C2C] hover:from-[#171C2C] hover:to-[#171C2C] text-white' href={'/job-location?location=Mymensingh'}>Mymensingh ({mymensingh?.length})</Link>
                        </div>
                    </div>
                    <div className='md:w-[30%] w-1/2 md:block'>
                        <Image className='w-auto h-auto rounded' src={bannerImage} width={500} height={500} unoptimized priority alt='Genius career hub banner' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
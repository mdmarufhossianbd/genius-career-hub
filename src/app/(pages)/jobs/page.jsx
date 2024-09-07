import { Button } from '@/components/ui/button';
import { PublishJobs } from '@/utils/fetchJobs';

import Image from 'next/image';
import Link from 'next/link';
export const metadata = {
    title: 'Jobs || Genius Career Hub || The Largest Job Portal in Bangladesh.',
    description: 'Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today',
    openGraph: {
        title: 'Jobs || Genius Career Hub || The Largest Job Portal in Bangladesh.',
        description: 'Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today',
        url: '/jobs',
        siteName: 'Jobs || Genius Career Hub || The Largest Job Portal in Bangladesh.',
        images: [
            {
                url: 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1725479398/rftcpzu9sye32geejspq.webp',
                width: 1200,
                height: 630,
                alt: 'Jobs || Genius Career Hub'
            }
        ],
        type: 'website'
    }
}

const Jobs = async () => {    
    const publishJobs = await PublishJobs()
    return (
        <div className='flex'>
            <div className='absolute top-20'>
                ads 1
            </div>
            <div className='max-w-7xl w-full mx-auto my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        publishJobs?.map(job => <div className='bg-[#bfcecf] hover:bg-[#a9bdbe] duration-200 p-4 rounded-md' key={job?._id}>
                            <Image className='w-full h-[300px] rounded' src={job?.thumbnailUrl} alt={job?.title} width={300} height={300} priority unoptimized />
                            <h2 className='mt-2 font-semibold'>{job?.title}</h2>
                            <div className='flex justify-between my-2'>
                                <p><span className='font-medium'>Category : </span>{job?.category}</p>
                                <p><span className='font-medium'>Experience : </span>{job?.experince}</p>
                            </div>
                            <Button className='w-full bg-blue-500 hover:bg-blue-600'><Link className='w-full' href={`/jobs/${job?.slug}`}>View Details</Link></Button>
                        </div>)
                    }
                </div>
            </div>
            <div className='sticky top-0'>
                ads 2
            </div>
        </div>
    );
};

export default Jobs;
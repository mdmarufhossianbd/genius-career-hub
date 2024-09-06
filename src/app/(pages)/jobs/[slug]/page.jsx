import { Button } from '@/components/ui/button';
import { IconBriefcase, IconBuildings, IconCalendarTime, IconCategory, IconCertificate, IconCreditCardFilled, IconMap2, IconUserScan } from '@tabler/icons-react';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import subscribeImage from '../../../../../public/assets/youtube-subscribe.png';

const getJobDetails = async (slug) => {
    const res = await axios.get(`http://localhost:3000/api/v1/jobs/${slug}`)
    const data = await res.data
    return data.result
}

export async function generateMetadata({ params }) {
    const { slug } = params
    const job = await getJobDetails(slug)

    return {
        title: job?.title,
        description: job?.meta,
        openGraph: {
            title: job?.title,
            description: job?.meta,
            url: `/jobs/${slug}`,
            images: [
                {
                    url: job?.thumbnailUrl,
                    width: 1200,
                    height: 630,
                    alt: job?.title
                }
            ],
            type: 'article'
        }
    }
}

const JobDetails = async ({ params }) => {
    const { category, company, description, experince, experinceDuration, jobDeadline, jobType, location, salary, thumbnailUrl, title, vacancy, applyLink, companyInfo, } = await getJobDetails(params.slug)


    return (
        <div className="px-5 md:px-7 lg:px-10 mt-10 max-w-7xl mx-auto ">
            <div className='md:flex gap-5'>
                <div className="md:w-[70%] w-full">
                    <h2 className="text-2xl font-bold mb-5">{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="md:w-[30%] w-full my-10 md:my-0">
                    <div className="bg-[#dff9fb] p-4 space-y-5 rounded-md">
                        <Image className="w-auto h-auto rounded" src={thumbnailUrl} alt={title} width={350} height={200} priority
                            unoptimized />
                        <p className="flex md:items-start lg:items-center items-center gap-2">
                            <IconCreditCardFilled /><span className="font-semibold">Salary : {salary}</span>
                        </p>
                        <p className="flex items-center gap-2"> <IconUserScan stroke={2} /><span className="font-semibold">Vacancy :</span> {vacancy}</p>
                        <p className="flex items-center gap-2"> <IconCertificate stroke={2} /><span className="font-semibold">Experince :</span> {experince} </p>
                        <p>{experinceDuration ? `Experince Duration : ${experinceDuration} ` : null}</p>
                        <p className="flex md:items-start lg:items-center items-center gap-2">
                            <IconCategory stroke={2} /><span className="font-semibold">Category : {category}</span>
                        </p>
                        <p className="flex md:items-start lg:items-center items-center gap-2">
                            <IconBriefcase stroke={2} /><span className="font-semibold">Job Type : {jobType}</span>
                        </p>
                        <p className="flex md:items-start lg:items-center items-center gap-2">
                            <IconBuildings stroke={2} /><span className="font-semibold">Company : {company}</span>
                        </p>
                        <p className="flex md:items-start lg:items-center items-center gap-2">
                            <IconMap2 stroke={2} /><span className="font-semibold">Location : {location}</span>
                        </p>
                        <p className="flex md:items-start lg:items-center items-center gap-2">
                            <IconCalendarTime stroke={2} /><span className="font-semibold">Deadline : {new Date(jobDeadline).toLocaleDateString()}</span>
                        </p>
                        <Button className='w-full bg-blue-500 hover:bg-blue-600'><Link className='w-full' href={applyLink ? applyLink : ''} target='_blank'>Apply Now</Link></Button>
                    </div>

                    <div className="bg-[#95afc0] rounded-md mt-10 p-4">
                        <p className="text-2xl font-semibold text-center text-white">Our YouTube Channel</p>
                        <Link href={'https://www.youtube.com/'} target="_blank">
                            <Image className="w-auto h-auto rounded" src={subscribeImage} alt='Genius Career Hub Yootube' width={350} height={200} priority
                                unoptimized /></Link>
                        <p className="text-center">Be the first to subscribe to our YouTube channel to get all types of job news.</p>
                    </div>

                </div>
            </div>

            {/* company details */}
            <div className='p-5 rounded-md bg-[#dff9fb] mt-10'>
                <h3 className='font-bold text-2xl'>Company Details</h3>
                <div className='flex flex-col md:flex-row-reverse'>
                    <div className={`${companyInfo ? 'flex items-center justify-center md:w-1/4 w-full my-5 md:my-0' : 'hidden'}`}>
                        <Image className='w-auto h-auto' src={companyInfo && companyInfo?.logo} width={300} height={300} alt={companyInfo ? companyInfo?.name : null} priority unoptimized />
                    </div>
                    <div className='md:w-3/4 w-full space-y-3'>
                        <h2>{`Company name : ${companyInfo ? companyInfo?.name : ''}`}</h2>
                        <p className='pb-5 text-justify'>{`Company Details : ${companyInfo ? companyInfo?.description : ''}`}</p>
                        <Link href={companyInfo ? companyInfo?.website : ''} target='_blank'>{companyInfo ? `Visit :  ${companyInfo?.website}` : ''}</Link>
                    </div>

                </div>
            </div>


            {/* relative jobs by category  */}
            <div className='p-5 rounded-md bg-[#dff9fb] mt-10'>
                <h3 className='font-bold text-2xl'>You can see also it :</h3>
            </div>
        </div>
    );
};

export default JobDetails;
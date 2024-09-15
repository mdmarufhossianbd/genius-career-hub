import { IconArmchair2, IconCertificate, IconCurrentLocation, IconFileCertificate } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const JobsTemplate = ({ jobs }) => {
    
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    jobs?.map(job =>
                        <Link key={job._id} href={`/jobs/${job?.slug}`}>
                            <div className='p-4 bg-gradient-to-r from-[#e3ecf9] to-[#fff] border border-[#e3ecf9] hover:from-[#e3ecf9] hover:to-[#e3ecf9] duration-200 rounded flex items-center gap-5' >
                                <div className='w-[80%] space-y-2'>
                                    <h2 className='font-medium'>{job?.title}</h2>
                                    <p className='flex gap-2 items-center'>
                                        <span className='font-medium flex items-center gap-2'><IconCurrentLocation stroke={2} /> Job Location : </span>{job?.location}
                                    </p>
                                    <p className='flex gap-2 items-center'>
                                        <span className='font-medium flex items-center gap-2'> <IconCertificate stroke={2} /> Experience : </span>{job?.experince}
                                    </p>
                                    <p className='flex gap-2 items-center'>
                                        <span className='font-medium flex items-center gap-2'> <IconArmchair2 stroke={2} /> Vacancy : </span>{job?.vacancy}
                                    </p>
                                    <p className='flex gap-2 items-center'>
                                        <span className='font-medium flex items-center gap-2'> <IconFileCertificate stroke={2} /> Education : </span>{job?.education}
                                    </p>
                                </div>
                                <div className='w-[20%]'>
                                    <Image className='w-auto h-auto rounded' src={job?.companyInfo?.logo} alt={job?.title} width={300} height={300} priority unoptimized />
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            
        </>
    );
};

export default JobsTemplate;
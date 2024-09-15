'use client'
import { IconCertificate, IconClockHour2Filled, IconCurrentLocation, IconFileCertificate } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const timeDifference = (publishDate) => {
    const now = new Date();
    const publish = new Date(publishDate);
    const diffMs = now - publish;

    // calculate time difference
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    // Construct the time ago string
    let timeAgo = '';
    if (diffDays > 0) {
        timeAgo += `${diffDays} days `;
    }
    if (diffHours > 0) {
        timeAgo += `${diffHours} hours `;
    }
    if (diffMinutes > 0) {
        timeAgo += `${diffMinutes} minutes `;
    }
    return timeAgo ? `${timeAgo} ago` : 'Just now';
}

const CategoryJobTemplate = ({ job }) => {
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        if (job?.publishDate) {
            const publishDate = new Date(job?.publishDate);
            setTimeAgo(timeDifference(publishDate))
        }
    }, [job?.publishDate])

    return (
        <Link href={`/jobs/${job?.slug}`}>
            <div className="p-3 bg-gradient-to-r from-[#e3ecf9] to-[#fff] border border-[#e3ecf9] hover:from-[#e3ecf9] hover:to-[#e3ecf9] duration-200 rounded">
                <h2 className='font-medium'>{job?.title}</h2>
                <div className="mt-3 space-y-2">
                    <p className='flex gap-2 items-center'>
                        <span className='font-medium flex items-center gap-2'><IconCurrentLocation stroke={2} />Location: </span>{job?.location}
                    </p>
                    <p className='flex gap-2 items-center'>
                        <span className='font-medium flex items-center gap-2'> <IconCertificate stroke={2} /> Experience : </span>{job?.experince}
                    </p>
                    <p className='flex gap-2 items-center'>
                        <span className='font-medium flex items-center gap-2'> <IconFileCertificate stroke={2} /> Education : </span>{job?.education}
                    </p>
                    <p className="flex gap-2 items-center"> <IconClockHour2Filled />Published: {timeAgo}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryJobTemplate;
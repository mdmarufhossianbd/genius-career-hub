import JobsTemplate from "@/components/shared/jobsTemplate";
import { PublishJobs } from "@/utils/fetchJobs";

export const metadata = {
    title: "Government - Genius Career Hub is the largest BD Job News portal in Bangladesh",
    description: "Looking for the latest Government job circular updates? You've come to the right place! We provide timely and accurate information on all government job openings across various sectors in Bangladesh. Stay ahead with the most recent government job circulars from ministries, government institutions, and public service commissions. Whether you're seeking jobs in education, health, administration, or finance, we ensure you never miss an opportunity. Bookmark this page and keep up with the most up-to-date government job circulars to boost your career!",
    openGraph: {
        title: "Government job circular - Genius Career Hub is the largest BD Job News portal in Bangladesh",
        description: "Looking for the latest Government job circular updates? You've come to the right place! We provide timely and accurate information on all government job openings across various sectors in Bangladesh. Stay ahead with the most recent government job circulars from ministries, government institutions, and public service commissions. Whether you're seeking jobs in education, health, administration, or finance, we ensure you never miss an opportunity. Bookmark this page and keep up with the most up-to-date government job circulars to boost your career!",
        url: '/government-job-circular',
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

const GovernmentJobCirculars = async() => {
    const jobs = await PublishJobs()
    const govtJobs = jobs.filter(job => job.category === 'Government')
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="my-10 font-bold text-4xl">Government job circulars</h2>
            <p className="mb-10">
            Looking for the latest <b>Government job circular</b> updates? You&apos;ve come to the right place! We provide timely and accurate information on all government job openings across various sectors in Bangladesh. Stay ahead with the most recent <b>government job circulars</b> from ministries, government institutions, and public service commissions. Whether you&apos;re seeking jobs in education, health, administration, or finance, we ensure you never miss an opportunity. Bookmark this page and keep up with the most up-to-date <b>government job circulars</b> to boost your career!
            </p>
            <JobsTemplate jobs={govtJobs}/>
        </div>
    );
};

export default GovernmentJobCirculars;
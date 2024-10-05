import PublishedJobs from "@/components/jobs/publishedJobs";
import PageIntro from "@/components/shared/pageIntro";

export const metadata = {
    title: 'BD Job News - Daily Updates on Job Circulars in Bangladesh',
    description: 'Find the latest BD job news and updates on government, private, and bank jobs in Bangladesh. Stay informed with daily job circulars, deadlines, and application guidelines.',
    openGraph: {
        title: 'BD Job News - Daily Updates on Job Circulars in Bangladesh',
        description: 'Find the latest BD job news and updates on government, private, and bank jobs in Bangladesh. Stay informed with daily job circulars, deadlines, and application guidelines. Start your career journey now with accurate and timely job news!',
        url: '/jobs',
        siteName: 'BD Job News - Daily Updates on Job Circulars in Bangladesh',
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

const Jobs = () => {
    
    return (
        <div className='flex mx-2 lg:mx-0'>
            {/* <div className=''>
                ads 1
            </div> */}
            <div className='max-w-7xl w-full mx-auto my-20'>
                <PageIntro pageName={'BD Job News'} description={'Find the latest BD job news and updates on government, private, and bank jobs in Bangladesh. Stay informed with daily job circulars, deadlines, and application guidelines. Start your career journey now with accurate and timely job news!'} />
                <PublishedJobs />
            </div>
            {/* <div className='sticky top-0'>
                ads 2
            </div> */}
        </div>
    );
};

export default Jobs;
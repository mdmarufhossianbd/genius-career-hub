
import Notices from "@/components/notice/notices";
import PageIntro from "@/components/shared/pageIntro";

export const metadata = {
    title: 'Job Circular Notice || Genius Career Hub',
    description: 'Explore the latest job circulars at Genius Career Hub! Discover a wide range of job opportunities tailored to your skills and aspirations. Stay updated with our comprehensive job circular notice and take the next step in your career today!',
}

const Notice = () => {

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <PageIntro pageName={'Notice'} />
                <Notices />
            </div>
        </div>
    );
};

export default Notice;
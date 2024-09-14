import JobsTemplate from "@/components/shared/jobsTemplate";
import { PublishJobs } from "@/utils/fetchJobs";

const NGO = async () => {
    const publishJobs = await PublishJobs()
    const ngoJobs = publishJobs.filter(item => item.category === 'NGO')
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="my-10 font-bold text-4xl">NGO job circular</h2>
            <p className="mb-10">Looking for the latest <b>NGO job circular</b> updates? Our platform provides the most up-to-date and comprehensive listings for <b>non-government organization jobs</b> in Bangladesh. Whether you`&apos;`re passionate about humanitarian work, development, or social welfare, explore exciting career opportunities in top NGOs. Stay ahead with daily updates on <b>NGO job circulars</b> and find the perfect role that matches your skills and aspirations. Don`&apos;`t miss out on the chance to contribute to meaningful causes while advancing your career in the NGO sector.</p>
            <JobsTemplate jobs={ngoJobs} />
        </div>
    );
};

export default NGO;
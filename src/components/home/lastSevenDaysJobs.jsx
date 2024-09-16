import { getLastSavenDaysJobs } from "@/utils/fetchLastSavenDaysJobs";
import JobsTemplate from "../shared/jobsTemplate";

const LastSevenDaysJobs = async () => {
    const jobs = await getLastSavenDaysJobs()
    return (
        <div className="max-w-7xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold md:text-4xl text-center mb-5">Recently Publish Jobs</h2>
            <JobsTemplate jobs={jobs}/>
        </div>
    );
};

export default LastSevenDaysJobs;
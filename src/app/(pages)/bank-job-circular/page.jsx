import JobsTemplate from "@/components/shared/jobsTemplate";
import { PublishJobs } from "@/utils/fetchJobs";

const BankJobCirculars = async() => {
    const jobs = await PublishJobs();
    const bankJobs = jobs.filter(item => item.category === 'Accounting - Bank - Finance')
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="my-10 font-bold text-4xl">Bank job circulars</h2>
            <p className="mb-10">Looking for the latest <b>Bank job circular</b> updates in Bangladesh? You`&apos;`ve come to the right place! Our website provides the most recent job vacancies from top banks, including positions in both public and private sectors. Whether you`&apos;`re aiming for a government bank job or an opportunity in a leading private bank, we regularly update all relevant <b>Bank job circulars</b> to help you stay informed. Start your journey towards a successful banking career today by browsing through the latest circulars and applying for the best-suited positions. Stay connected for timely updates!</p>
            <JobsTemplate jobs={bankJobs} />
        </div>
    );
};

export default BankJobCirculars;
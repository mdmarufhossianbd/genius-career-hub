import { getSingaleCategoryJobs } from "@/utils/fetchCategoryJobs";
import CategoryJobTemplate from "./categoryJobTemplate";

const CategoryJobs = async () => {
    const bankJobs = await getSingaleCategoryJobs('Accounting - Bank - Finance')
    const govtJobs = await getSingaleCategoryJobs('Government')
    const ngoJobs = await getSingaleCategoryJobs('NGO')

    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:gap-5 mb-10 px-5 xl:px-0">
            <div className="p-4 bg-gradient-to-t from-[#adadadb6] to-[#2c69b3] rounded-md">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-10 mt-5 text-center text-white">Bank Jobs</h2>
                <div className="grid grid-cols-1 gap-4">
                    {
                        bankJobs?.map(job => <CategoryJobTemplate key={job?._id} job={job} />)
                    }
                </div>
            </div>
            <div className="p-4 bg-gradient-to-t from-[#adadadb6] to-[#2c69b3] rounded-md">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-10 mt-5 text-center text-white">Government Jobs</h2>
                <div className="grid grid-cols-1 gap-4">
                    {
                        govtJobs?.map(job => <CategoryJobTemplate key={job?._id} job={job} />)
                    }
                </div>
            </div>
            <div className="p-4 bg-gradient-to-t from-[#adadadb6] to-[#2c69b3] rounded-md">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-10 mt-5 text-center text-white">NGO Jobs</h2>
                <div className="grid grid-cols-1 gap-4">
                    {
                        ngoJobs?.map(job => <CategoryJobTemplate key={job?._id} job={job} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryJobs;
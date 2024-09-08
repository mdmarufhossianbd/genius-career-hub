import EditJobComponents from "@/components/admin/edit-job/editJob";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
const getJobDetails = async (slug) => {
    const res = await axios.get(`${baseUrl}/api/v1/jobs/${slug}`)
    const data = await res.data;
    return data.result;
}

const EditJob = async({params}) => {
    const job = await getJobDetails(params.slug)    
    return (
        <div className="px-5">
            <h2 className="text-4xl font-bold text-center my-10">Edit Job</h2>
            <EditJobComponents job={job}/>
        </div>
    );
};

export default EditJob;
import DraftJobsTableData from "@/components/admin/all-jobs/draftJobsTableData";
import PublishJobsTableData from "@/components/admin/all-jobs/publishJobsTableData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DarftJobs, PublishJobs } from "@/utils/fetchJobs";

const AllJobs = async () => {
   const publishJobs = await PublishJobs();
   const darftJobs = await DarftJobs();
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">All Jobs</h2>
            <div className="mx-5">
                <Tabs defaultValue="published" className="">
                    <TabsList className='flex items-center justify-center gap-5'>
                        <TabsTrigger value="published">Publish Jobs</TabsTrigger>
                        <TabsTrigger value="Unpublished">Unpublished Jobs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="published">
                        <PublishJobsTableData publishJobs={publishJobs}/>
                    </TabsContent>
                    <TabsContent value="Unpublished">
                        <DraftJobsTableData darftJobs={darftJobs} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default AllJobs;
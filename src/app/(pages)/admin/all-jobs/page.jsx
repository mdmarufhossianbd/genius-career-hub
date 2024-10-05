import DraftJobsTableData from "@/components/admin/all-jobs/draftJobsTableData";
import PublishedJobs from "@/components/admin/all-jobs/publishedJobs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DarftJobs } from "@/utils/fetchJobs";

const AllJobs = async () => {
    // const publishedJobs = await PublishJobs();
   const darftJobs = await DarftJobs();
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">All Jobs</h2>
            <div className="mx-5">
                <Tabs defaultValue="published" className="">
                    <TabsList>
                        <TabsTrigger value="published">Publish Jobs</TabsTrigger>
                        <TabsTrigger value="Unpublished">Unpublished Jobs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="published">
                        <PublishedJobs />
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
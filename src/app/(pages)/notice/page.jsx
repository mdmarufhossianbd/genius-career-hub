
import Tab from "@/components/notice/tab";
import PageIntro from "@/components/shared/pageIntro";


const Notice = () => {

    

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <PageIntro pageName={'Notice'} />
                <div>
                   <Tab />
                </div>
            </div>
        </div>
    );
};

export default Notice;
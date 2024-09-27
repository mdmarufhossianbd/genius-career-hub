import { noticeDetails } from "@/utils/fetchNoticeDetails";
import Link from "next/link";

export async function generateMetadata({params}) {
    const notice = await noticeDetails(params._id)
    return {
        title : `${notice.title} || Genius Career Hub`,
        description : notice.description,
        openGraph : {
            title : `${notice.title} || Genius Career Hub`,
            description : notice.description,
            url : `/notice/${notice._id}`,
            images : [
                {
                    url : 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1726388509/genius-career-hub/assets/aabr38fiiylqutbdpckb.png',
                    width : 1200,
                    height : 630,
                    alt : notice?.title
                }
            ],
            type : 'article'
        }
    }
}

const NoticeDetails = async({params}) => {
    const notice = await noticeDetails(params._id)
    return (
        <div className="max-w-7xl mx-auto my-10 md:my-16 lg:my-20">
            <h2 className="font-semibold my-10">{notice.title}</h2>
            <p className="mb-10">{notice.description}</p>
            <Link className="px-5 py-2 rounded-md bg-[#1e508c] text-white" href={notice.pdfLink} target="_blank">Check PDF</Link>
        </div>
    );
};

export default NoticeDetails;
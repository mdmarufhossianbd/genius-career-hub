
import AllNotices from "@/components/notice/allNotices";
import NoticeIntro from "@/components/notice/noticeIntro";
// import Notices from "@/components/notice/notices";

export const metadata = {
    title: 'Job Circular Notice || Genius Career Hub',
    description: 'Explore the latest job circulars at Genius Career Hub! Discover a wide range of job opportunities tailored to your skills and aspirations. Stay updated with our comprehensive job circular notice and take the next step in your career today!',
}

const Notice = () => {

    return (
        <div className="max-w-7xl mx-auto px-3 lg:px-0">
            <NoticeIntro noticeBoardName={'Notice Board'} noticeDescription={'Explore the latest job circulars at Genius Career Hub! Discover a wide range of job opportunities tailored to your skills and aspirations. Stay updated with our comprehensive job circular notice and take the next step in your career today!'} />
            <AllNotices />
        </div>
    );
};

export default Notice;
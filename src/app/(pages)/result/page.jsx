import NoticeIntro from "@/components/notice/noticeIntro";
import Notices from "@/components/notice/notices";
export const metadata = {
    title: 'Govt Job Result Notice || Genius Career Hub',
    description: 'Stay updated with the latest Govt Job Result notices. Find accurate and timely updates on all Govt Job Results, helping you stay informed and ahead in your career search.',
}
const Result = () => {
    const category = 'result'
    return (
        <div className="max-w-7xl mx-auto">
            <NoticeIntro noticeBoardName={'Result'} noticeDescription={'Stay updated with the latest Govt Job Result notices. Find accurate and timely updates on all Govt Job Results, helping you stay informed and ahead in your career search.'} />
            <Notices category={category} />
        </div>
    );
};

export default Result;
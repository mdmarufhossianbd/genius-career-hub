import NoticeIntro from "@/components/notice/noticeIntro";
import Notices from "@/components/notice/notices";

const Result = () => {
    const category = 'result'
    return (
        <div className="max-w-7xl mx-auto">
            <NoticeIntro noticeBoardName={'Result'} noticeDescription={'notice description'} />
            <Notices category={category} />
        </div>
    );
};

export default Result;
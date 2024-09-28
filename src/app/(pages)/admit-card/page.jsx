import NoticeIntro from "@/components/notice/noticeIntro";
import Notices from "@/components/notice/notices";
 
export const metadata = {
    title: 'Govt Job Admit Card Download || Genius Career Hub',
    description: 'Download your Govt Job Admit Card for the latest government exams. Stay updated with official notices and exam details for various government jobs. Get your Govt Job Admit Card now and be prepared for your exam day.',
  }

const AdmitCard = () => {
    const category = 'admit'

    return (
        <div className="max-w-7xl mx-auto">
           <NoticeIntro noticeBoardName={'Govt Job Admit Card'} noticeDescription={'Download your Govt Job Admit Card for the latest government exams. Stay updated with official notices and exam details for various government jobs. Get your Govt Job Admit Card now and be prepared for your exam day.'} />
            <Notices category={category} />
        </div>
    );
};

export default AdmitCard;

const NoticeIntro = ({noticeBoardName, noticeDescription}) => {
    return (
        <div className="md:flex justify-between items-center gap-5 py-10 md:py-14 lg:py-20 px-5 my-5 border rounded-xl">
            <h2 className="text-3xl lg:text-4xl md:w-1/3 font-semibold  underline text-[#ef4444] text-center md:text-left mb-5 md:mb-0">{noticeBoardName}</h2>
            <p className="text-justify md:w-2/3">{noticeDescription}</p>
        </div>
    );
};

export default NoticeIntro;
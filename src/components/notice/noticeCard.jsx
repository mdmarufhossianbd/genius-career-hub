import Link from "next/link";

const NoticeCard = ({ item }) => {
    
    return (
        <div className="p-4 rounded border flex items-center justify-between">
            <div className="w-[70%] md:w-3/4">
                <h2>{item?.title}</h2>
            </div>
            <div className="w-[30%] md:w-1/4 flex justify-end">
                <Link className="lg:px-5 md:px-3 px-2 py-1 rounded-md bg-[#1e508c] text-white" href={`/notice/${item?._id}`}>Notice Details</Link>
            </div>
        </div>
    );
};

export default NoticeCard;
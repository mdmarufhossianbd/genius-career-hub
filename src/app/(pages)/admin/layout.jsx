import Sidebar from "@/components/admin/sidebar";

const layout = ({ children }) => {
    return (
        <div className="flex justify-between min-h-screen`">
            <div className="w-[15%] h-[calc(100%-100px)]">
                <Sidebar />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default layout;
import Sidebar from "@/components/admin/sidebar";

const layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-[15%]">
                <Sidebar />
            </div>
            <div className="w-full border">
            {children}
            </div>
        </div>
    );
};

export default layout;
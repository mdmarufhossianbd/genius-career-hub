"use client"
import { useSession } from "next-auth/react";

const Admin = () => {
    const sessionData = useSession();
    console.log(sessionData);
    return (
        <div>
            admin dashboard {sessionData?.data?.user?.name}
        </div>
    );
};

export default Admin;
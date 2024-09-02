"use client"
import { AuthContext } from "@/service/authProvider";
import { useContext } from "react";

const Admin = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            admin dashboard {user?.name}
        </div>
    );
};

export default Admin;
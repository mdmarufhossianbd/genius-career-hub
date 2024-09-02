"use client"
import CustomLoading from "@/components/shared/customLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/service/authProvider";
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] =useState();
    const {setUser} = useContext(AuthContext);
    const router = useRouter();
    const [isLoading, setLoading] = useState(false)


    const handleSeePassword = () => {
        if(seePassword){
            setSeePassword(false)
        } else{
            setSeePassword(true)
        }
    }

    const handleLogin = async() => {
        setLoading(true)
        const loginInfo = {
            email, password
        }        
        try {
            await axios.post('/api/v1/login', {loginInfo})
            .then(res => {                
                if(!res.data.success)
                    {
                        toast.error(res.data.message)
                        setLoading(false)
                    }
                else{
                const userData = res.data?.user                
                localStorage.setItem('userData', JSON.stringify(userData))
                setUser(userData)
                toast.success(res.data.message);
                setLoading(false)
                router.push('/admin')
            }
            })
        } catch (error) {
            setPassword()
            setEmail()
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen border">
            <div className="flex flex-col gap-3 w-1/4">
                <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email address" />
                <div className="relative">
                    <Input onChange={(e) => setPassword(e.target.value)} type={seePassword ? "text" : "password"} placeholder="Enter password" />
                    <button className="absolute top-2 right-5" onClick={handleSeePassword}>
                        {!seePassword ? <IconEye stroke={2} /> : <IconEyeOff stroke={2} />}
                    </button>
                </div>
                <Button disabled={!email || !password} onClick={handleLogin}>Login</Button>
            </div>
            <Toaster
             position="top-right"
             reverseOrder={false} />
            <CustomLoading isLoading={isLoading}/>
        </div>
    );  
};

export default Login;
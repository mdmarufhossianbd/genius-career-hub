"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconEye, IconEyeOff, IconReload } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] =useState();
    const router = useRouter()

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
        const response = await signIn('credentials', {
            email, password, redirect : false
        })
        if(response.ok){
            toast.success('Logged in successfully')
            setLoading(false)            
            router.push('/admin')
        } else{
            toast.error('Please check your email or password')
            setLoading(false)
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
                <Button disabled={!email || !password} onClick={handleLogin}>{isLoading ? <span className="flex items-center gap-2"><IconReload className="animate-spin" stroke={2} /> loging</span> : 'Login'}</Button>
            </div>
            <Toaster
             position="top-right"
             reverseOrder={false} />
        </div>
    );  
};

export default Login;
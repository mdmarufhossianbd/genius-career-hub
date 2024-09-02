"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] =useState();

    const handleSeePassword = () => {
        if(seePassword){
            setSeePassword(false)
        } else{
            setSeePassword(true)
        }
    }

    const handleLogin = async() => {
        const loginInfo = {
            email, password
        }
        console.log('loginInfo =>',loginInfo);
        try {
            await axios.post('/api/v1/login', {loginInfo})
            .then(res => {
                console.log(res.data);
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
        </div>
    );  
};

export default Login;
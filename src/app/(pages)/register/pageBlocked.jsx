"use client"

import axios from "axios";

const Register = () => {

    const handleRegister =async(e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const registerInfo = {
            email, password
        }
        try {
            await axios.post('/api/v1/register', {registerInfo})
            .then(res => {
                console.log(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="flex flex-col gap-3" onSubmit={handleRegister}>
                <input type="email" name="email" className='border rounded px-5 py-2' placeholder="Enter email address" />
                <input type="password" name="password" className='border rounded px-5 py-2' placeholder="Enter password" />
                <input type="submit" value="Register" className="bg-blue-400 px-5 py-2 rounded-md text-white hover:cursor-pointer" />
            </form>
        </div>
    );
};

export default Register;
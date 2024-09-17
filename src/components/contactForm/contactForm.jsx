'use client'
import axios from 'axios';
import { useState } from 'react';
import { FaKeyboard, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLoginBoxFill } from 'react-icons/ri';

const ContactForm = () => {
    const [responseMessage, setResponseMessage] = useState(null)
    const [loading, setLoading] = useState(false)
   
    const handleSubmit = async(e) => {
        e.preventDefault()
        const contactInfo = {
            name : e.target.name.value,
            email : e.target.email.value,
            subject : e.target.subject.value,
            message : e.target.message.value
        }
        await axios.post('/api/v1/contact-email', contactInfo)
        .then(res => {
            console.log(res.data);
        })
        
    }
    return (
        <form className="py-4" onSubmit={handleSubmit}>
            <div className="relative mb-4">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <input className="focus:outline-none rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="text" name="name" placeholder="Enter your name" required />
            </div>
            <div className="relative mb-4">
                <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <input className="focus:outline-none rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="email" name="email" placeholder="Enter email address" required />
            </div>
            <div className="relative mb-4">
                <RiLoginBoxFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <input className="focus:outline-none rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="text" name="subject" placeholder="Enter subject" required />
            </div>
            <div className="relative mb-4">
                <FaKeyboard className="absolute top-8 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <textarea className="focus:outline-none w-full rounded-lg pl-10 pt-5 placeholder:text-[#2f2f57] text-[#2f2f57]" placeholder="Enter your message" name="message" rows={10} required></textarea>
            </div>
            {
                responseMessage ? <p className='text-green-500'>{responseMessage}</p> : <input className="bg-[#528cf8] md:px-5 px-3 py-2 text-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#2954A3] duration-200 hover:cursor-pointer" type="submit" value={loading ? 'Sending your message' : 'Sent Message'} />
            }
        </form>
    );
};

export default ContactForm;
"use client"
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import uploading from '../../../../public/assets/picture_uploadig.gif';
const EditThumbnail = ({newThumbnailUrl, thumbnailUrl, setThumbnailUrl}) => {    
    const [loading, setLoading] = useState(false)
    const cloudinaryCloudName= process.env.NEXT_PUBLIC_CLOUDINARY_COLUD_NAME;
    
    const handleReset = () => {
        // setThumbnail()
        setThumbnailUrl()
    }

    const handleThumbnailUpload = async (e) => {
        setLoading(true)
        const [thumbnailData] = e.target.files;
        const formData = new FormData();
        formData.append('file', thumbnailData);
        formData.append('upload_preset', 'genius-career-hub');
        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`, formData)
            setThumbnailUrl(res.data?.url)
            // setThumbnail(res.data?.url)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }

    return (
        <div className='w-full'>
            <Toaster
                position="top-center"
                reverseOrder={false} />
            <label htmlFor="thumbnail" className='relative'>
                {   loading ? <div className='h-[150px] w-full rounded flex justify-center items-center'><Image src={uploading} width={100} height={100} alt='uploading' /></div> :
                    thumbnailUrl ?
                        <div className='relative'>
                            <Image className='h-[200px] w-full rounded border border-gray-400 object-cover hover:cursor-pointer' src={newThumbnailUrl ? newThumbnailUrl : thumbnailUrl} height={200} width={250} alt='thumbnail' />
                            <p className='absolute top-1/2 left-20 rounded-full px-3 py-1 bg-[#5e5e5eb9] text-white hover:cursor-pointer z-10'>Change Thumbnail</p>
                        </div> :
                        <div className='h-[150px] w-full rounded bg-slate-300 flex items-center justify-center '> Add Thumbnail
                        </div>
                }


                <Input accept="image/*" type="file" onChange={handleThumbnailUpload} id="thumbnail" className="absolute top-1/2 opacity-0" />
            </label>

            {/* <input onChange={handleThumbnailUpload} type="file" name="" id="" /> */}

        </div>
    );
};

export default EditThumbnail;
"use client"
import { Input } from '@/components/ui/input';
import { IconSquareRoundedXFilled } from '@tabler/icons-react';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import uploading from '../../../../public/assets/picture_uploadig.gif';
const Addthumbnail = ({setThumbnailUrl}) => {    
    const [thumbnail, setThumbnail] = useState();
    const [loading, setLoading] = useState(false)
    const cloudinaryCloudName= process.env.NEXT_PUBLIC_CLOUDINARY_COLUD_NAME;
    
    const handleReset = () => {
        setThumbnail()
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
            setThumbnail(res.data?.url)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false} />
            <label htmlFor="thumbnail" className='relative'>
                {   loading ? <div className='h-[150px] w-full rounded flex justify-center items-center'><Image src={uploading} width={100} height={100} alt='uploading' /></div> :
                    thumbnail ?
                        <div className='relative'>
                            <Image className='h-[150px] w-full rounded border border-gray-400 object-cover' src={thumbnail} height={150} width={250} alt='thumbnail' />
                            
                            <button onClick={handleReset} className='absolute top-2 right-2 rounded-full'>
                                <IconSquareRoundedXFilled className='text-red-400 hover:text-red-500 duration-200 text-xl' />
                            </button>
                        </div> :
                        <div className='h-[150px] w-full rounded bg-slate-300 flex items-center justify-center'> Add Thumbnail
                        </div>
                }


                <Input accept="image/*" type="file" onChange={handleThumbnailUpload} id="thumbnail" className="absolute top-1/2 opacity-0" />
            </label>

            {/* <input onChange={handleThumbnailUpload} type="file" name="" id="" /> */}

        </div>
    );
};

export default Addthumbnail;
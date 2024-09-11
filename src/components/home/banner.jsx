'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import bannerBG from '../../../public/assets/banner background.png';
const Banner = () => {
    const router = useRouter();   
    
    const handleSearch = async(e) => {
        e.preventDefault()
        const keyword = e.target.keyword.value
        if (!keyword) {
            return toast.error('Please fillup job title in the box')
        }
        e.target.reset()
        router.push(`/search?keyword=${keyword}`)
    }
    return (
        <div className='my-10'>
            <Toaster position='top-right' richColors />
            <div className="max-w-7xl mx-auto relative">
                <Image className='w-auto h-auto rounded' src={bannerBG} width={1280} height={630} unoptimized priority alt='Genius career hub banner' />
                <div className='absolute top-1/2 left-10 flex'>
                    <form onSubmit={handleSearch}>
                        <input className='rounded-l-md px-4 py-2  focus:outline-none' type="text" name="keyword" id="" placeholder='Enter job title' />
                        <button type='submit' className='rounded-r-md px-4 py-2 bg-white border-l border-black hover:bg-black duration-300 hover:text-white '>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;
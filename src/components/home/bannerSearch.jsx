'use client'
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';

const BannerSearch = () => {
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
        <div>
            <Toaster position='top-right' richColors />
            <div className=' flex'>
                <form onSubmit={handleSearch}>
                    <input className='rounded-l-md px-4 py-2  focus:outline-none' type="text" name="keyword" id="" placeholder='Enter job title' />
                    <button type='submit' className='rounded-r-md px-4 py-2 bg-white border-l border-black hover:bg-black duration-300 hover:text-white '>Search</button>
                </form>
            </div>
        </div>
    );
};

export default BannerSearch;
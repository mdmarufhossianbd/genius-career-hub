import { Button } from '@/components/ui/button';
export const metadata = {
    title : 'Jobs || Genius Career Hub || The Largest Job Portal in Bangladesh.',
    description : 'Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today',
    openGraph : {
        title : 'Jobs || Genius Career Hub || The Largest Job Portal in Bangladesh.',
        description : 'Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today',
        url : '/jobs',
        siteName : 'Jobs || Genius Career Hub || The Largest Job Portal in Bangladesh.',
        images : [
            {
                url : 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1725479398/rftcpzu9sye32geejspq.webp',
                width : 1200,
                height : 630,
                alt : 'Jobs || Genius Career Hub'
            }
        ],
        type : 'website'
    }
}
const Jobs = () => {
    return (
        <div>
            This is jobs page <Button>Click Me</Button>
        </div>
    );
};

export default Jobs;
import CategoryJobsWithPagination from "@/components/category/category";

export const metadata = {
    title: "NGO Job Circular - Genius Career Hub is the largest BD Job News portal in Bangladesh",
    description: "Looking for the latest NGO job circular updates? Our platform provides the most up-to-date and comprehensive listings for non-government organization jobs in Bangladesh. Whether you`'`re passionate about humanitarian work, development, or social welfare, explore exciting career opportunities in top NGOs. Stay ahead with daily updates on NGO job circulars and find the perfect role that matches your skills and aspirations. Don`'`t miss out on the chance to contribute to meaningful causes while advancing your career in the NGO sector.",
    openGraph: {
        title: "NGO job circular - Genius Career Hub is the largest BD Job News portal in Bangladesh",
        description: "Looking for the latest NGO job circular updates? Our platform provides the most up-to-date and comprehensive listings for non-government organization jobs in Bangladesh. Whether you`'`re passionate about humanitarian work, development, or social welfare, explore exciting career opportunities in top NGOs. Stay ahead with daily updates on NGO job circulars and find the perfect role that matches your skills and aspirations. Don`'`t miss out on the chance to contribute to meaningful causes while advancing your career in the NGO sector.",
        url: '/ngo-job-circular',
        siteName: 'Genius Career Hub',
        images: [
            {
                url: 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1726388509/genius-career-hub/assets/aabr38fiiylqutbdpckb.png',
                width: 1200,
                height: 630,
                alt: 'Genius Career Hub'
            }
        ],
        type: 'website'
    }
};

const NGO = async () => {
    const slug = 'ngo-non-government-organization'
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="my-10 font-bold text-4xl">NGO job circular</h2>
            <p className="mb-10">Looking for the latest <b>NGO job circular</b> updates? Our platform provides the most up-to-date and comprehensive listings for <b>non-government organization jobs</b> in Bangladesh. Whether you`&apos;`re passionate about humanitarian work, development, or social welfare, explore exciting career opportunities in top NGOs. Stay ahead with daily updates on <b>NGO job circulars</b> and find the perfect role that matches your skills and aspirations. Don`&apos;`t miss out on the chance to contribute to meaningful causes while advancing your career in the NGO sector.</p>
            <CategoryJobsWithPagination slug={slug} />
        </div>
    );
};

export default NGO;
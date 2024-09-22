import CategoryJobsWithPagination from "@/components/category/category";

export const metadata = {
    title: "Bank job circular - Genius Career Hub is the largest BD Job News portal in Bangladesh",
    description: "Looking for the latest Bank job circular updates in Bangladesh? You`'`ve come to the right place! Our website provides the most recent job vacancies from top banks, including positions in both public and private sectors. Whether you`'`re aiming for a government bank job or an opportunity in a leading private bank, we regularly update all relevant Bank job circulars to help you stay informed. Start your journey towards a successful banking career today by browsing through the latest circulars and applying for the best-suited positions. Stay connected for timely updates!",
    openGraph: {
        title: "Bank job circular - Genius Career Hub is the largest BD Job News portal in Bangladesh",
        description: "Looking for the latest Bank job circular updates in Bangladesh? You`'`ve come to the right place! Our website provides the most recent job vacancies from top banks, including positions in both public and private sectors. Whether you`'`re aiming for a government bank job or an opportunity in a leading private bank, we regularly update all relevant Bank job circulars to help you stay informed. Start your journey towards a successful banking career today by browsing through the latest circulars and applying for the best-suited positions. Stay connected for timely updates!",
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

const BankJobCirculars = async() => {
    const slug = 'accounting-bank-finance'
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="my-10 font-bold text-4xl">Bank job circulars</h2>
            <p className="mb-10">Looking for the latest <b>Bank job circular</b> updates in Bangladesh? You`&apos;`ve come to the right place! Our website provides the most recent job vacancies from top banks, including positions in both public and private sectors. Whether you`&apos;`re aiming for a government bank job or an opportunity in a leading private bank, we regularly update all relevant <b>Bank job circulars</b> to help you stay informed. Start your journey towards a successful banking career today by browsing through the latest circulars and applying for the best-suited positions. Stay connected for timely updates!</p>
            {/* <JobsTemplate jobs={bankJobs} /> */}
            <CategoryJobsWithPagination slug={slug} />
        </div>
    );
};

export default BankJobCirculars;
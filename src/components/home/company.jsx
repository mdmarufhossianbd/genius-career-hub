import Marquee from "../magicui/marquee";

const Company = () => {
    const companies = [
        {
            name: 'company 1',
        },
        {
            name: 'company 2',
        },
        {
            name: 'company 3',
        },
    ]
    return (
        <div className="mt-10 mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">Popular Companies</h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg my-5">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {
                        companies.map((item, idx) => <div key={idx} className="bg-gray-300 p-4">
                            <h2>{item.name}</h2>
                        </div>)
                    }
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>
        </div>
    );
};

export default Company;
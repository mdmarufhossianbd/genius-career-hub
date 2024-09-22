import { getAllCompanies } from "@/utils/fetchCompanies";
import Image from "next/image";
import Marquee from "../magicui/marquee";

const Company = async() => {

    const companies = await getAllCompanies()

    return (
        <div className="mt-10 lg:mt-20 mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center lg:mb-10">Popular Companies</h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg my-5">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {
                        companies.map((item, idx) => <div key={idx} className="bg-gray-300 p-4 rounded flex justify-center flex-col items-center gap-5">
                           <Image src={item?.logo} alt={item.name} width={150} height={70} unoptimized priority />
                            <h2>{item.name}</h2>
                        </div>)
                    }
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
            </div>
        </div>
    );
};

export default Company;
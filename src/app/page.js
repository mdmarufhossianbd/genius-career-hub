import Banner from "@/components/home/banner";
import CategoryJobs from "@/components/home/categoryJobs";
import Company from "@/components/home/company";
import LastSevenDaysJobs from "@/components/home/lastSevenDaysJobs";
import PopularCategory from "@/components/home/popularCategory";

export default function Home() {
  return (
    <main>
      <Banner />
      <LastSevenDaysJobs />
      <PopularCategory />
      <CategoryJobs />
      <Company />
    </main>
  );
}

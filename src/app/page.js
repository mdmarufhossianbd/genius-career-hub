import Banner from "@/components/home/banner";
import CategoryJobs from "@/components/home/categoryJobs";
import LastSevenDaysJobs from "@/components/home/lastSevenDaysJobs";
import PopularCategory from "@/components/home/popularCategory";

export default function Home() {
  return (
    <main>
      <Banner />
      <LastSevenDaysJobs />
      <PopularCategory />
      <CategoryJobs />
    </main>
  );
}

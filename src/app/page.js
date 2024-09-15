import Banner from "@/components/home/banner";
import LastSevenDaysJobs from "@/components/home/lastSevenDaysJobs";
import PopularCategory from "@/components/home/popularCategory";

export default function Home() {
  return (
    <main>
      <Banner />
      <LastSevenDaysJobs />
      <PopularCategory />
    </main>
  );
}

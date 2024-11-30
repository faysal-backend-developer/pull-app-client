import Filter from "@/components/custom/Filter/Filter";
import LeaderBoard from "@/components/custom/LeaderBoard/LeaderBoard";




export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 lg:container mx-auto">
      <div className="lg:col-span-1 md:col-span-1">
        <Filter/>
      </div>
      <div className="lg:col-span-3 md:col-span-2">
      <h1>content</h1>
      </div>
      <div className="lg:col-span-1 hidden lg:block">
        <LeaderBoard/>


        
      </div>
    </div>
  );
}

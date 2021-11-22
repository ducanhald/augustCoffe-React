import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBaner from "./HomeBaner/HomeBaner";
function Home() {
  return (
    <div className="home">
      <div class="grid wide">
        <div class="row">
          <HomeAbout />
          <HomeBaner />
        </div>
      </div>
    </div>
  );
}
export default Home;

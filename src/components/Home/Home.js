import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBaner from "./HomeBaner/HomeBaner";
function Home() {
  return (
    <div className="home">
      <div className="grid wide">
        <div className="row">
          <HomeAbout />
          <HomeBaner />
        </div>
      </div>
    </div>
  );
}
export default Home;

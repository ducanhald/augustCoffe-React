import banerCf from "../../../asset/imgs/lycf.png";
import "./HomeBaner.css";
function HomeBanner() {
  return (
    <div className="col l-5">
      <div className="home__banner">
        <img src={banerCf} alt="" className="img-lycf" />
      </div>
    </div>
  );
}
export default HomeBanner;

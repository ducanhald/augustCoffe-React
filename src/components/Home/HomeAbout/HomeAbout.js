import { useState } from "react";
import SignUp from "../../../modal/SignUp/SignUp";
import "./HomeAbout.css";
function HomeAbout() {
  const [toggle, setToggle] = useState(false);
  const handleSignUp = () => {
    setToggle(!toggle);
  };
  const handleSignIn = () => {
    console.log("đăng nhập");
  };
  return (
    <div>
      <div className="home__about col l-7">
        <p className="brand-name">August Coffe</p>
        <p className="brand-title">
          Tháng 8, tháng của sự đặc biệt bởi khoảng khắc giao mùa được hoà lẫn
          giữa sự bồn chồn đón lấy mùa thu và sự nuối tiếc khi mùa hạ đã chẳng
          còn ở đó. Còn gì tuyệt vời hơn khi ghé lại với chúng tôi thưởng thức
          một ly cafe giữa đen và trắng, rồi cảm nhận bước chân của thời gian
          đang đi qua kí ức. Để rồi không còn những muộn phiền, chỉ còn trong
          tim sự bình yên đến lạ thường.Để rồi không còn những muộn phiền, chỉ
          còn trong tim sự bình yên đến lạ thường.Để rồi không còn những muộn
          phiền, chỉ còn trong tim sự bình yên đến lạ thường.
        </p>
        <div className="div-btn-sign">
          <button onClick={handleSignUp} id="btn-signup">
            Đăng Ký
          </button>
          <button onClick={handleSignIn} id="btn-signin">
            Đăng Nhập
          </button>
          {toggle && <SignUp />}
        </div>
      </div>
    </div>
  );
}
export default HomeAbout;

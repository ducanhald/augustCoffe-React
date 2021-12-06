import { Link } from "react-router-dom";

import "./HomeAbout.css";
function HomeAbout() {
  // const [toggle, setToggle] = useState(false);
  const handleSignUp = () => {
    console.log("Đăng Ký");
  };
  const handleSignIn = () => {
    console.log("đăng nhập");
  };
  return (
    <div className="home__about col l-7">
      <p className="brand-name">August Coffe</p>
      <p className="brand-title">
        Tháng 8, tháng của sự đặc biệt bởi khoảng khắc giao mùa được hoà lẫn
        giữa sự bồn chồn đón lấy mùa thu và sự nuối tiếc khi mùa hạ đã chẳng còn
        ở đó. Còn gì tuyệt vời hơn khi ghé lại với chúng tôi thưởng thức một ly
        cafe giữa đen và trắng, rồi cảm nhận bước chân của thời gian đang đi qua
        kí ức. Để rồi không còn những muộn phiền, chỉ còn trong tim sự bình yên
        đến lạ thường.Để rồi không còn những muộn phiền, chỉ còn trong tim sự
        bình yên đến lạ thường.Và nếu vì một lý do nào đó mà bạn không thể đến
        được với August Coffe, vậy thì ngần ngại gì mà không order cho mình
        những sản phẩm được chính August Coffe cung cấp.
      </p>
      <div className="div-btn-sign">
        <button onClick={handleSignUp} id="btn-signup">
          <Link className="link-df-signup" to="/signup">
            Đăng Ký
          </Link>
        </button>
        <button onClick={handleSignIn} id="btn-signin">
          <Link className="link-df-signin" to="/login">
            Đăng Nhập
          </Link>
        </button>
      </div>
    </div>
  );
}
export default HomeAbout;

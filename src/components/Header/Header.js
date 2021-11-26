import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../asset/imgs/logo.png";
// import { useState } from "react";
function Header(props) {
  //   const [state, setState] = useState("active");

  return (
    <div className="header">
      <div className="grid wide header-content ">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} className="header__img-logo" alt="" />
          </Link>
        </div>
        <nav className="header__menu">
          <ul className="nav">
            <li>
              <Link className="link-df" to="/">
                Trang chủ
              </Link>
            </li>
            <li>
              <a href="#product">Sản Phẩm</a>
            </li>
            <li>
              <a href="#footer">Giới Thiệu</a>
            </li>
            <li>
              <a href="#product">Dịch Vụ</a>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <div className="header__user-avatar">
            <i className="fas fa-user"></i>
            <div className="header__user-avatar__authen">
              <div className="header__user-avatar__authen-history">
                <i className="fas fa-history"></i>
                <a href="./assets/pages/productStatus.html">Tra cứu đơn hàng</a>
              </div>
              <div className="header__user-avatar-login">
                <i className="fas fa-sign-in-alt"></i>
                <Link className="link-df" to="/login">
                  Đăng Nhập
                </Link>
              </div>
            </div>
          </div>

          <div className="header__user-cart">
            <i className="fas fa-shopping-cart"></i>
            <div className="header__user-cart__list">
              <p>Chưa có Sản phẩm</p>
              <div className="header__user-cart__items"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

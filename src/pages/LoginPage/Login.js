import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="signin-container l-o-1 l-10 m-o-1 m-10 c-o-1 c-10">
      <form action="" method="POST" className="form" id="form-signin">
        <div className="form-group">
          <label htmlFor="" className="label-email-signin">
            Email Hoặc Số Điện Thoại
          </label>
          <input
            type="email"
            className="input-email-signin"
            name="email"
            id="email"
            placeholder="ex: name@domain.com"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <label htmlFor="" className="label-password-signin">
            Mật Khẩu
          </label>
          <input
            type="password"
            className="input-password-signin"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="form-message"></span>
        </div>
      </form>
      <p className="reset-pass">
        <a href="#">Quên mật khẩu?</a>
      </p>
      <button className="btn-login-signin">Đăng Nhập</button>
      <div className="login-ref">
        <p className="p-res-signup">hoặc đăng nhập với</p>
        <div className="sign-withgg">
          <i class="fab fa-google"></i> Đăng nhập bằng Google
        </div>
        <div className="sign-withfb">
          <i className="fab fa-facebook-f"></i> Đăng nhập bằng Facebook
        </div>
        <p className="p-register">
          Chưa có tài khoản? <Link to="/signup">Đăng kí ngay</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;

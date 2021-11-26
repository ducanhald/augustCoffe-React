import { Link } from "react-router-dom";
import "./SingUpPage.css";
function SignUp() {
  return (
    <div className="signup-container l-o-1 l-10 m-o-1 m-10 c-o-1 c-10">
      <Link className="back-to-home" to="/">
        <i class="fas fa-chevron-left"></i>
        Back
      </Link>
      <div className="form-signup">
        <label htmlFor="" className="label-email-signup">
          Email hoặc Số điện thoại
        </label>
        <input
          type="email"
          className="input-email-signup"
          placeholder="ex: name@domain.com"
        />
        <div className="info-signup">
          <div className="username-signup">
            <label htmlFor="" className="label-username-signup">
              Tên Đăng Nhập
            </label>
            <input
              type="text"
              className="input-username"
              placeholder="ex: ducanhald"
            />
          </div>
          <div className="birth-signup">
            <label htmlFor="" className="label-birth-signup">
              Ngày Sinh
            </label>
            <input type="date" className="input-birth-signup" />
          </div>
        </div>
        <label htmlFor="" className="label-password-signup">
          Mật Khẩu
        </label>
        <input
          type="password"
          className="input-password-signup"
          placeholder="Mật khẩu"
        />
        <label htmlFor="" className="label-password-signup">
          Nhập lại Mật Khẩu
        </label>
        <input
          type="password"
          className="input-password-signup"
          placeholder="Xác Nhận Mật khẩu"
        />
        <p className="rules-signup">
          By clicking Sign Up, you are indicating that you have read and
          acknowledge the Terms of Service and Privacy Notice.
        </p>
        <button className="btn-login-signup">SIGN UP</button>
        <div className="sign-up-ref">
          <p className="p-res-signup">or login with</p>
          <div className="signup-withgg">
            <i className="fab fa-google"></i> Login with Google
          </div>
          <div className="signup-withfb">
            <i className="fab fa-facebook-f"></i> Đăng ký với Facebook
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

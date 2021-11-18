import SignUpCss from "./SignUp.css";
import SignInCss from "../SignIn/SignIn.css";
import { useState } from "react";
function SignUp() {
  const [show, setShow] = useState(true);
  console.log(show);

  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      className="modal-signup"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-signup-container"
      >
        <div className="heading-signup">
          <p className="title-signup">Tạo Tài Khoản</p>
          <p className="title-mini-signup">Đăng ký miễn phí!</p>
          <p className="title-logo-signup">August Coffe</p>
        </div>
        <div className="form-signup">
          <label for="" className="label-email-signup">
            Email hoặc Số điện thoại
          </label>
          <input
            type="email"
            className="input-email-signup"
            placeholder="ex: name@domain.com"
          />
          <div className="info-signup">
            <div className="username-signup">
              <label for="" className="label-username-signup">
                Tên Đăng Nhập
              </label>
              <input
                type="text"
                className="input-username"
                placeholder="Username"
              />
            </div>
            <div className="birth-signup">
              <label for="" className="label-birth-signup">
                Ngày Sinh
              </label>
              <input type="date" className="input-birth-signup" />
            </div>
          </div>
          <label for="" className="label-password-signup">
            Mật Khẩu
          </label>
          <input
            type="password"
            className="input-password-signup"
            placeholder="Mật khẩu"
          />
          <label for="" className="label-password-signup">
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
          <p className="p-res-signup">or login with</p>
          <div className="signup-withgg">
            <i className="ti-google"></i> Login with Google
          </div>
          <div className="signup-withfb">
            <i className="ti-facebook"></i> Đăng ký với Facebook
          </div>
        </div>
        <div className="close-signup">
          <i className="ti-close i-close-signin"></i>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

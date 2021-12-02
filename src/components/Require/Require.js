import "./Require.css";

function Require() {
  return (
    <div className="require">
      <div className="require-content">
        <div className="grid wide require-form">
          <h1 className="require-title">
            HÀNG NHẬP NHẨU CHÍNH HÃNG TỪ NƯỚC NGOÀI
          </h1>
          <h2 className="require-depcriptions">
            Nhiều ưu đãi cực kỳ hấp dẫn, đăng ký e-mail ngay
          </h2>
          <div className="grid require-form__container">
            <div className="require-form__info">
              <input
                className="require-form__info-input"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="require-form__info-input"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="require-mess">
              <input
                className="require-mess__input"
                type="text"
                placeholder="Tin nhắn"
              />
            </div>
          </div>
          <button className="require-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Require;

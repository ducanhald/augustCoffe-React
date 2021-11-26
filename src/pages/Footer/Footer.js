import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="grid">
        <div className="row footer-depcriptions">
          <div className="col l-3 m-3 c-12 footer-depcriptions__content">
            <div>
              <p>Giới thiệu</p>
              <ul>
                <li>Our Story</li>
                <li>Our Website</li>
                <li>Our Team</li>
                <li>Our Blog4</li>
              </ul>
            </div>
          </div>
          <div className="col l-3 m-3 c-12 footer-depcriptions__content">
            <p>Doanh Nghiệp</p>
            <ul>
              <li>Our Story</li>
              <li>Our Website</li>
              <li>Our Team</li>
              <li>Our Blog4</li>
            </ul>
          </div>
          <div className="col l-3 m-3 c-12 footer-depcriptions__content">
            Liên Hệ
            <ul>
              <li>Our Story</li>
              <li>Our Website</li>
              <li>Our Team</li>
              <li>Our Blog4</li>
            </ul>
          </div>
          <div className="col l-3 m-3 c-12 footer-depcriptions__content">
            Đăng Ký
            <ul>
              <li>Our Story</li>
              <li>Our Website</li>
              <li>Our Team</li>
              <li>Our Blog4</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-social">
        <div className="footer-social--content">
          <a
            href="https://www.facebook.com/anhs0708/"
            className="footer-social__link"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.invisionapp.com/"
            className="footer-social__link"
          >
            <i className="fab fa-invision"></i>
          </a>
          <a
            href="https://www.instagram.com/anhs0708/"
            className="footer-social__link"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.whatsapp.com/" className="footer-social__link">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

import "./Filter.css";
import { useState } from "react";
// const filter = ["popular", "selling", "new", "higher", "lower", ]
const filter = ["Phổ biến", "Bán chạy", "Hàng mới", "Giá cao", "Giá thấp"];
function Filter() {
  const [active, setActive] = useState(0);

  return (
    <div className="col l-10 c-12 m-12">
      <div className="product-filter">
        <div className="product-menu-mb">
          <i className="fas fa-bars icon-menu-mb"></i>
        </div>
        {filter.map((item, index) => {
          return (
            <div
              style={
                active === index
                  ? {
                      fontWeight: "bold",
                      borderBottom: "5px solid",
                    }
                  : {}
              }
              onClick={() => setActive(index)}
              key={index}
              className="product-filter__item "
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;

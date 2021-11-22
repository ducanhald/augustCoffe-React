import "./Category.css";
// import { useState } from "react";
// import data from "../../data/cfNguyenHat.json";
const categoryItem = [
  "Cà phê nguyên hạt",
  "Cà phê rang xay",
  "Máy pha cà phê",
  "Dụng cụ khác",
];
function Category() {
  // const cfNguyenHatdb = data.cfNguyenHat;
  // const [state, setState] = useState("true");
  // console.log(state);
  return (
    <div className="col l-2 c-4 product-category">
      <nav>
        <h3>Danh mục sản phẩm</h3>
        <ul className="product-category__list">
          {categoryItem.map((item, index) => (
            <li
              onClick={() => {
                console.log(index);
              }}
              class="product-category__item"
            >
              <a href="#home">{item}</a>
              <i class="fas fa-chevron-right"></i>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Category;

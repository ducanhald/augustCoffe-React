import { useState, useEffect } from "react";
// import Category from "./Category/Category";
import Filter from "./Filter/Filter";
// import data from "../../data/cfNguyenHat.json";
import Item from "./Item/Item";
import "./Product.css";

// menu category
const categoryItem = [
  "Cà phê nguyên hạt",
  "Cà phê rang xay",
  "Máy pha cà phê",
  "Dụng cụ khác",
];
const tabs = ["cfNguyenHat", "cfRangXay", "MayPhaCaPhe", "DungCuKhac"];
function Product() {
  const [active, setActive] = useState(0);
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("cfNguyenHat");
  const handleActive = (id) => {
    setActive(id);
    setType(tabs[id]);
  };
  console.log(type);
  // Call api
  useEffect(() => {
    fetch(`http://localhost:3000/${type}`)
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      });
  }, [active]);

  return (
    <div className="product">
      <div class="grid wide" id="product">
        <div className="row">
          {/* Category */}
          <div className="col l-2 c-4 product-category">
            <nav>
              <h3>Danh mục sản phẩm</h3>
              <ul className="product-category__list">
                {categoryItem.map((item, index) => (
                  <li
                    key={index}
                    style={
                      active === index
                        ? {
                            fontWeight: "bold",
                          }
                        : {}
                    }
                    onClick={() => {
                      handleActive(index);
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
          <div class="col l-10 c-12">
            <Filter />
            <div class="row product-list">
              {products.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  priceOld={item.priceOld}
                  priceCurrent={item.priceCurrent}
                  src={item.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;

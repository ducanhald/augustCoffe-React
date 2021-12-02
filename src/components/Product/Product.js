import { useState, useEffect } from "react";
import Filter from "./Filter/Filter";
import Item from "./Item/Item";
import "./Product.css";
import { useStore } from "../../store";
// menu category

const categoryItem = [
  "Cà phê nguyên hạt",
  "Cà phê rang xay",
  "Máy pha cà phê",
  "Dụng cụ khác",
];
const tabs = [
  "61a380400ddbee6f8b134390",
  "61a3814d01558c731cca32f3",
  "61a3819862ed886f91560c50",
  "61a5cb6901558c731ccb4a9a",
];
function Product() {
  const [active, setActive] = useState(0);
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("61a380400ddbee6f8b134390");
  const handleActive = (id) => {
    setActive(id);
    setType(tabs[id]);
  };
  const [state, dispatch] = useStore();

  // Call api
  useEffect(() => {
    fetch(`https://api.jsonbin.io/b/${type}`)
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => console.log("get APi fail : " + error.message));
  }, [active]);

  return (
    <div className="product">
      <div className="grid wide" id="product">
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
                    className="product-category__item"
                  >
                    {item}
                    <i className="fas fa-chevron-right"></i>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col l-10 c-12">
            <Filter />
            <div className="row product-list">
              {products.map((item, index) => (
                <Item
                  id={index}
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

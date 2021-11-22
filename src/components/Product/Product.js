import Category from "./Category/Category";
import Filter from "./Filter/Filter";
import data from "../../data/cfNguyenHat.json";
import Item from "./Item/Item";
import "./Product.css";

function Product() {
  const cfNguyenHatdb = data.cfNguyenHat;
  return (
    <div className="product">
      <div class="grid wide" id="product">
        <div className="row">
          <Category />
          <div class="col l-10 c-12">
            <Filter />
            <div class="row product-list">
              {cfNguyenHatdb.map((item) => (
                <Item
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

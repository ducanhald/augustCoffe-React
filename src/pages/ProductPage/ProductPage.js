import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProductPage.css";
import { useStore } from "../../store";
function ProductPage() {
  const [state, dispatch] = useStore();
  const [counter, setCounter] = useState(1);
  const handleIncreaseItem = () => {
    setCounter(counter - 1);
  };
  const handleMinusItem = () => {
    setCounter(counter + 1);
  };
  const handleAddToCart = () => {
    alert(`Đã thêm ${counter} sản phẩm vào giỏ hàng`);
    setCounter(1);
  };
  if (counter < 1) {
    setCounter(1);
  }
  return (
    <div className="detail-product ">
      <div className="detail-product-container grid wide row ">
        <div className="detail-banner col l-4 ">
          <Link className="back-to-home" to="/">
            Back
          </Link>
          <img
            className="detail-img"
            src={state.item.src}
            alt={state.item.name}
          />
        </div>
        <div className="detail-info col l-8 ">
          <h1 className="detail-info__name">{state.item.name}</h1>
          <div className="detail-price">
            <p className="detail-price-old">{state.item.priceOld}đ</p>
            <p className="detail-price-curr">{state.item.priceCurrent}đ</p>
          </div>
          <div className="detail-add-on">
            <button
              onClick={() => {
                handleIncreaseItem();
              }}
              className="increase-product"
            >
              <i class="fas fa-minus"></i>
            </button>
            <h1>{counter}</h1>
            <button
              onClick={() => {
                handleMinusItem();
              }}
              className="reduce-product"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div className="detail-add-product ">
            <button
              onClick={() => {
                handleAddToCart();
              }}
              className="btn-add-product"
            >
              Thêm Vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;

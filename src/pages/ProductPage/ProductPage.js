import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProductPage.css";
import { useStore } from "../../store";
function ProductPage() {
  const [state, dispatch] = useStore();

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
            <button className="increase-product">+</button>
            <h1>1</h1>
            <button className="reduce-product">-</button>
          </div>
          <div className="detail-add-product ">
            <button
              onClick={() => {
                console.log(state.item.id);
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

import "./Item.css";
import { Link } from "react-router-dom";
import { setInfoProduct } from "../../../store/actions";
import { useStore, actions } from "../../../store";

function Item(item) {
  const [state, dispatch] = useStore();
  const { id, name } = state;
  const handleGetItem = (item) => {
    dispatch(actions.setInfoProduct(item));
  };
  return (
    <div className="col l-3 m-4 c-6">
      <div className="product-item" onClick={() => handleGetItem(item)}>
        <div className="product-item">
          <Link to="/productpages" className="product-item__link">
            <img className="product-item__img" src={item.src} alt={item.name} />
            <div className="product-item__content">
              <p className="product-item__name">{item.name}</p>
              <div className="product-item__price">
                <span className="product-item__price-old">
                  {item.priceOld}đ
                </span>
                <span className="product-item__price-current">
                  {item.priceCurrent} đ
                </span>
              </div>
              <div className="product-item__action">
                <span className="product-item__like">
                  <i className="product-item__like-icon-empty far fa-heart"></i>
                  <i className="product-item__like-icon-fill fas fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="product-item__star--gold fas fa-star"></i>
                  <i className="product-item__star--gold fas fa-star"></i>
                  <i className="product-item__star--gold fas fa-star"></i>
                  <i className="product-item__star--gold fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__sale-off">
                <span className="product-item__sale-off-percent">10%</span>
                <span className="product-item__sale-off-label">GIẢM</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;

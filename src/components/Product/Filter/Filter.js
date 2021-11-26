import "./Filter.css";
function Filter() {
  return (
    <div className="col l-10 c-8 m-12">
      <div className="product-filter">
        <div className="product-filter__item active">Phổ biến</div>
        <div className="product-filter__item ">Bán chạy</div>
        <div className="product-filter__item ">Hàng mới</div>
        <div className="product-filter__item ">Giá cao</div>
        <div className="product-filter__item ">Giá thấp</div>
      </div>
    </div>
  );
}
export default Filter;

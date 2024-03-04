import "./SkeletonProductPage.css";

const SkeletonProductPage = () => {
  return (
    <div className="skeleton-product-container">
      <div className="skeleton-product-left">
          <div className="skeleton-preview-img">
            <div className="skeleton-img-product"></div>
            <div className="skeleton-img-product"></div>
          </div>
          <div className="skeleton-selected-img">
            <div className="skeleton-img-product"></div>
          </div>
        </div>
        <div className="skeleton-product-right">
          <div className="skeleton-product-title"></div>
          <div className="skeleton-product-price"></div>
          <div className="skeleton-product-desc"></div>
          <div className="skeleton-product-quantity"></div>
          <div className="skeleton-quantity-btns"></div>
          <div className="skeleton-add-cart"></div>
        </div>
      </div>
  );
};

export default SkeletonProductPage;

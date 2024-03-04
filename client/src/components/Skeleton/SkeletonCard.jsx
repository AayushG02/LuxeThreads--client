import "./SkeletonCard.css";

const SkeletonCard = () => {
  const skeletons = [];
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div className="skeleton" key={i}>
        <div className="skeleton-img"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-price"></div>
      </div>
    );
  }

  return <div className="skeleton-container">{skeletons}</div>;
};

export default SkeletonCard;

import React from "react";
import { Button } from "reactstrap";

const ProductCard = ({
  id,
  title,
  description,
  image,
  price,
  handleAddCart
}) => {
  return (
    <div className="ProductCard">
      <div className="card">
        <img src={image} className="product-image" alt="missing" />
        <div className="title-description-card">
          <h5 className="">{title}</h5>
          <p className="">{description}</p>
          <Button className="button" onClick={handleAddCart}>
            Button
          </Button>
        </div>
        <h2 className="price-card">{price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;

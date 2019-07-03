import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

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
{/* 
      <div className="card flex-row mb-3 card-frame">
        <img src={image} className="card-img-top card-image" alt="missing" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p> <h6>{price}</h6>
          <Button onClick={handleAddCart}>Button</Button>
        </div>
      </div> */}
      
      <Card className="card">
        <CardImg top width="100%" src={image} alt="Failed" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{price}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button onClick={handleAddCart}>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;

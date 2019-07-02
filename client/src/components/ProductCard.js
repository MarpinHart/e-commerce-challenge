import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProductCard = ({ id, title, description, image, price, handleAddCart }) => {
  return (
    <div className = "ProductCard">
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
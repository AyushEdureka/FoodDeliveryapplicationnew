import React, { useContext } from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const FoodItem = ({ image, name, price, _id, category }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card  style={{ borderRadius: "1rem" , boxShadow:'0 3px 6px black' }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          {name}
          {category && (
            <Badge bg="info" style={{ fontSize: "0.8rem" }}>
              {category}
            </Badge>
          )}
        </Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button
          variant="success"
          onClick={() => addToCart({ image, name, price, _id })}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FoodItem;

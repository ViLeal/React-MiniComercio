import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../assets/styles.css";



export const Product = ({ item }) => {
  const { title, image, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div class="titulo">{title}</div>
        </Col>
        <Col xs={4}>
          <Button variant="primary" class= "but">
            Precio <Badge bg="secondary" id="butsec">{price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product" alt="" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};
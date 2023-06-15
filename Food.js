import React from 'react';

import { Col, Card } from 'react-bootstrap';

const Food = ({ food }) => {
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          {food.name}
        </Card.Header>

        <Card.Img variant="bottom" src={food.image} className="w-100" />

        <Card.Body className="p-0"></Card.Body>
      </Card>
    </Col>
  );
};

export default Food;

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              src="https://e7.pngegg.com/pngimages/319/87/png-clipart-coffee-bean-cafe-coffee-food-monochrome.png"
              width="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            Cafeteria do Grão
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cardápio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

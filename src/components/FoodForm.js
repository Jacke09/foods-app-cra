import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const FoodForm = ({ show, handleCloseFoodModal, foods, setFoods }) => {
  // var {} = props;

  let [food, setFood] = useState({ name: '', image: '' });

  const handleChange = (event) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // Enviar os dados para o servidor backend.
    fetch('http://localhost:3000/foods', {
      method: 'POST', // Método de envio.
      body: JSON.stringify(food), // Converte o Json em string
      headers: {
        'Content-Type': 'application/json', // Especifica o tipo do conteúdo da requisição.
      },
    })
      .then((response) => {
        if (response.ok === true) {
          // Fechar modal.
          handleCloseFoodModal();
          return response.json();
        }
      })
      .then((data) => {
        setFoods([...foods, data]);
      })
      .catch((error) => {});
    // Atualizar a lista dos itens do cardápio.
  };

  return (
    <Modal show={show} onHide={handleCloseFoodModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de Comida</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleOnSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleChange}
              value={food.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="Imagem"
              name="image"
              onChange={handleChange}
              value={food.image}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Descrição"
              name="description"
              onChange={handleChange}
              value={food.description}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFoodModal}>
            Fechar
          </Button>
          <Button type="submit" variant="primary">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default FoodForm;

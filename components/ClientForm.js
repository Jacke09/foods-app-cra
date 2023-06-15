import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ClientForm = ({ show, handleCloseClientModal, clientes, setClientes}) => {

  let [client, setClient] = useState({ name: '', email: '', dateofbirth: '', cep: '' });

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // Enviar os dados para o servidor backend.
    fetch('http://localhost:3000/clientes', {
      method: 'POST', // Método de envio.
      body: JSON.stringify(client), // Converte o Json em string
      headers: {
        'Content-Type': 'application/json', // Especifica o tipo do conteúdo da requisição.
      },
    })
      .then((response) => {
        if (response.ok === true) {
          handleCloseClientModal();
          return response.json();
        }
      })
      .then((data) => {
        setClientes([...clientes, data]);
      })
      .catch((error) => {});
    // Atualizar a lista dos itens do cardápio.
  };

  return (
    <Modal show={show} onHide={handleCloseClientModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro do Cliente</Modal.Title>
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
              value={client.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              value={client.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Data de Nascimento"
              name="dateofbirth"
              onChange={handleChange}
              value={client.dateofbirth}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="CEP"
              name="cep"
              onChange={handleChange}
              value={client.cep}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseClientModal}>
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

export default ClientForm;

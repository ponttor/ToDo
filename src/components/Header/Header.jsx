import React from 'react';
// import styles from './Header.css'
import { Row, Col, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Container className="d-flex justify-content-center bg-info text-white mt-3 p-2 w-75">
        <Row>
          <Col>
            <div >Todo List</div>
          </Col>
        </Row>
      </Container>
      </>
  )
}

export default Header;
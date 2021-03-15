import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./ContactItem.module.css";
function ContactItem(props) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Card className={classes.card__body} style={{ width: "18rem" }}>
            <Card.Img
              className={classes.card__image}
              variant="top"
              src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            />
            <Card.Body>
              <b>
                <Card.Text>Name: {props.name}</Card.Text>
              </b>
              <Card.Text>Username: {props.username}</Card.Text>
              <Card.Text>Company: {props.company.name}</Card.Text>
              <Card.Text>Address: {props.address.city}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactItem;

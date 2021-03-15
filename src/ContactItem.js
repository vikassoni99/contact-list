import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import classes from "./ContactItem.module.css";
const ContactItem = (props) => {
  // let email="mailto:"+{props.email}

  return (
    <Card className={classes.card__body}>
      <CardImg
        top
        className={classes.card__image}
        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        alt="Contact Image"
      />
      <CardBody>
        <CardTitle tag="h5">Name: {props.name}</CardTitle>
        <CardText>Username: {props.username}</CardText>
        <CardText>Company: {props.company.name}</CardText>
        <CardText>Address: {props.address.city}</CardText>
        <CardText>Phone: {props.phone}</CardText>
        <CardText>E-Mail: {props.email}</CardText>
        <Link to={props.website} target="_blank">
          <Button>WEBSITE</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ContactItem;

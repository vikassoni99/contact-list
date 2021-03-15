import React, { Component } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";
import { Row, Col } from "reactstrap";
export default class Contacts extends Component {
  state = {
    contactData: null,
  };

  getContacts() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ contactData: res.data });
      })
      .catch((err) => {
        this.setState({ contactData: "NoData" });
        console.log("Not found" + err);
      });
  }

  componentDidMount() {
    this.getContacts();
  }

  render() {
    let allContacts = null;
    if (
      this.state.contactData !== null &&
      this.state.contactData !== "NoData"
    ) {
      allContacts = this.state.contactData.map((item) => {
        console.log(item.website);
        if (true) {
          return (
            <Col key={item.id} xs="12" sm="6" md="4">
              <ContactItem
                name={item.name}
                username={item.username}
                address={item.address}
                company={item.company}
                phone={item.phone}
                email={item.email}
                website={item.website}
              />
            </Col>
          );
        } else {
          return <></>;
        }
      });
    }
    return <Row>{allContacts}</Row>;
  }
}

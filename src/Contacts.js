import React, { Component } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";
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
    let i = 0;
    if (
      this.state.contactData !== null &&
      this.state.contactData !== "NoData"
    ) {
      allContacts = this.state.contactData.map((item) => {
        console.log(item);
        if (true) {
          return (
            <div key={item.id}>
              <ContactItem 
              name={item.name}
              username={item.username}
              address={item.address}
              company={item.company}              
              />
            </div>
          );
        } else {
          return <></>;
        }
      });
    }
    return <div>{allContacts}</div>;
  }
}

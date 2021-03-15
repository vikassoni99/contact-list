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
    let i=0;
    if (
      this.state.contactData !== null &&
      this.state.contactData !== "NoData"
    ) {
        console.log("Mera data ", this.state.contactData[i].id);
      allContacts = this.state.contactData.map((offer) => {
        if (true) {
          return (<div><h1>{this.state.contactData[i++].id}</h1>
            <ContactItem key={this.state.contactData.id}/>
        </div>)
        } else {
          return null;
        }
      });
    }
    return <div>{allContacts}</div>;
  }
}

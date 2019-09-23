import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import useApplicationData from "./hooks/useApplicationData";

export default function App() {
  const { state } = useApplicationData();

  const contactList = state.contacts.map(contact => (
    <li key={contact.id}>
      {contact.first_name} {contact.last_name}
    </li>
  ));

  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
      <h1>List of Contacts</h1>
      <ul>{contactList}</ul>
    </div>
  );
}

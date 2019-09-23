import React from "react";
import useApplicationData from "../hooks/useApplicationData";

export default function List(props) {
  const { state } = useApplicationData();

  let handleSubmission = contact => {
    props.onView(contact);
  };

  const contactList = state.contacts.map(contact => (
    <li className="selectable-contact" onClick={() => handleSubmission(contact)}>
      {contact.first_name}
    </li>
  ));

  return (
    <div className="List">
      <h1>Contacts</h1>
      <h2 onClick={props.onCreate}>+</h2>
      <ul>{contactList}</ul>
    </div>
  );
}

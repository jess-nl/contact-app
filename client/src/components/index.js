import React, { useState } from "react";
import axios from "axios";

import List from "./List";
import View from "./View";
import Create from "./Create";
import Edit from "./Edit";

import { useVisualMode } from "../hooks/useVisualMode";

const LIST = "LIST";
const VIEW = "VIEW";
const CREATE = "CREATE";
const EDIT = "EDIT";

export default function Contact(props) {
  const { mode, transition, back } = useVisualMode(LIST);
  const [currentContact, setCurrentContact] = useState(null);

  const viewCurrentContact = contact => {
    setCurrentContact(contact);
    transition(VIEW);
  };

  const editCurrentContact = contact => {
    setCurrentContact(contact);
    transition(EDIT);
  };

  const deleteCurrentContact = contact => {
    return axios
      .delete(`http://localhost:3001/api/contacts/${contact.id}`)
      .then(res => {
        transition(LIST);
      });
  };

  return (
    <div className="Contact">
      <header>{/* <img src={logo} className="App-logo" alt="logo" /> */}</header>
      {mode === LIST && (
        <List
          onCreate={() => transition(CREATE)}
          onView={viewCurrentContact}
        />
      )}
      {mode === VIEW && (
        <View
          currentContact={currentContact}
          onBack={() => back()}
          onEdit={editCurrentContact}
          onDelete={deleteCurrentContact}
        />
      )}
      {mode === EDIT && (
        <Edit currentContact={currentContact} onCancel={() => back()} />
      )}
      {mode === CREATE && (
        <Create onConfirm={() => transition(VIEW)} onCancel={() => back()} />
      )}
    </div>
  );
}

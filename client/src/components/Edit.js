import React, { useState } from "react";
import axios from "axios";

/*
- Based on provided props (the selected contact), the user can view further details about the current contact via placeholders. 
- The user can edit the current user via an Axios request.
- Stretch: Ideally I would have ensured the placeholders were fixed in place even once the user backspaces the input field on a keyboard.
*/

export default function Edit(props) {
  const { currentContact } = props;

  let currentData = {
    first_name: currentContact.first_name,
    last_name: currentContact.last_name,
    job_title: currentContact.job_title,
    address: currentContact.address,
    phone_number: currentContact.phone_number,
    email: currentContact.email
  };
  const [contacts, updateContacts] = useState(currentData);

  const handleSubmission = function() {
    updateContacts(contacts);

    return axios
      .put(`http://localhost:3001/api/contacts/${currentContact.id}`, { contacts })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="Edit">
      <h1>Edit <span>{contacts.first_name}</span></h1>
      <form onSubmit={handleSubmission}>
        <input
          placeholder={contacts.first_name}
          onChange={event =>
            updateContacts({ ...contacts, first_name: event.target.value })
          }
        />
        <input
          placeholder={contacts.last_name}
          onChange={event =>
            updateContacts({ ...contacts, last_name: event.target.value })
          }
        />
        <input
          placeholder={contacts.job_title}
          onChange={event =>
            updateContacts({ ...contacts, job_title: event.target.value })
          }
        />
        <input
          placeholder={contacts.address}
          onChange={event =>
            updateContacts({ ...contacts, address: event.target.value })
          }
        />
        <input
          placeholder={contacts.phone_number}
          onChange={event =>
            updateContacts({ ...contacts, phone_number: event.target.value })
          }
        />
        <input
          placeholder={contacts.email}
          onChange={event =>
            updateContacts({ ...contacts, email: event.target.value })
          }
        />
        <footer>
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit">Confirm</button>
        </footer>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";

/*
- User can create a new contact, which will update the database via an Axios request.
- Stretch: Ideally I would have implemented a best practice for redirection to homepage "/".
*/

export default function Create(props) {
  let currentData = {
    first_name: "",
    last_name: "",
    job_title: "",
    address: "",
    phone_number: "",
    email: ""
  };

  const [contacts, updateContacts] = useState(currentData);

  const handleSubmission = () => {
    updateContacts(contacts);

    return axios
      .post(`http://localhost:3001/api/contacts/`, { contacts })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="Create">
      <h1>Create</h1>
      <form onSubmit={handleSubmission}>
        <input
          placeholder="First Name"
          onChange={event =>
            updateContacts({ ...contacts, first_name: event.target.value })
          }
          required
        />
        <input
          placeholder="Last Name"
          onChange={event =>
            updateContacts({ ...contacts, last_name: event.target.value })
          }
        />
        <input
          placeholder="Job Title"
          onChange={event =>
            updateContacts({ ...contacts, job_title: event.target.value })
          }
        />
        <input
          placeholder="Address"
          onChange={event =>
            updateContacts({ ...contacts, address: event.target.value })
          }
        />
        <input
          placeholder="Phone Number"
          onChange={event =>
            updateContacts({ ...contacts, phone_number: event.target.value })
          }
          required
        />
        <input
          placeholder="Email"
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

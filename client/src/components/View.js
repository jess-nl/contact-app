import React from "react";

/*
- Based on provided props (the selected contact), the user can view further details about the current contact. 
- The user has the option to edit or delete the current contact.
*/

export default function View(props) {
  const { currentContact } = props;

  let handleSubmission = () => {
    props.onEdit(currentContact);
  };

  return (
    <div className="View">
      <h1>{currentContact.first_name}</h1>
      <ul>
        <li>
          <strong>First Name</strong>
          {currentContact.first_name}
        </li>
        <li>
          <strong>Last Name</strong>
          {currentContact.last_name}
        </li>
        <li>
          <strong>Job Title</strong>
          {currentContact.job_title}
        </li>
        <li>
          <strong>Address</strong>
          {currentContact.address}
        </li>
        <li>
          <strong>Phone Number</strong>
          {currentContact.phone_number}
        </li>
        <li>
          <strong>Email</strong>
          {currentContact.email}
        </li>
      </ul>
      <footer>
        <button onClick={props.onBack}>Back</button>
        <button onClick={handleSubmission}>Edit</button>
        <button onClick={() => props.onDelete(currentContact)}>Delete</button>
      </footer>
    </div>
  );
}

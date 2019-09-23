import { useEffect, useReducer } from "react";
import axios from "axios";
const SET_CONTACTS = "SET_CONTACTS";

/*
- A GET request to view all available contacts.
- This uses hooks which were recently introduced to React. useReducer is an example.
*/

const contactsReducer = (state, action) => {
  const actions = {
    SET_CONTACTS: {
      ...state,
      contacts: action.contacts
    }
  };

  if (!actions[action.type]) {
    throw new Error("Type of action not found");
  }
  return actions[action.type];
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(contactsReducer, { contacts: [] });

  useEffect(() => {
    axios
      .get("/api/contacts")
      .then(result => dispatch({ type: SET_CONTACTS, contacts: result.data }))
      .catch(error => console.log(error));
  }, []);

  return {
    state,
    dispatch
  };
};

export default useApplicationData;

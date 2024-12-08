import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from the JSONPlaceholder API
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
        <h1 className="Contact-title"> Contact List </h1>
        <div className="row">
        {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
        ))}
        </div>
    </div>
  );
};

export default ContactList;
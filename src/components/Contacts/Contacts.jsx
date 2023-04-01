import React from 'react';

const ContactsList = ({ contacts }) => {
  console.log(contacts);
  <ul>
    {contacts.map(contact => {
      return <li key={contact.id}>{contact.name}</li>;
    })}
  </ul>;
};

export default ContactsList;

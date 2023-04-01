import React from 'react';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
    {contacts.map(contact => {
      return <li key={contact.id}>{contact.name}: {contact.number}
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </li>
    })}
  </ul>
  )
};

export default ContactsList;

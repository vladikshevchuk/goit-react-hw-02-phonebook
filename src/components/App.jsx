import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name: this.state.name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
        {/* <ul>
          {this.state.contacts.map((contact) => {
            return (
              <li key={contact.id}>{contact.name}</li>
            )
          })}
        </ul> */}
      </div>
    );
  }
}

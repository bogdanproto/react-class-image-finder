import React, { Component } from 'react';
import { Form, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = evt => {
    evt.preventDefault();
    const { addContact } = this.props;
    const newContact = this.state;

    const keys = Object.keys(newContact);
    keys.forEach(item => {
      newContact[item] = newContact[item].trim();
    });

    const isExistingContact = addContact(newContact);
    if (isExistingContact) {
      return;
    }

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <Form onSubmit={this.submitForm}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
            required
          />
        </Label>
        <Label>
          Phone
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleInput}
            required
          />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

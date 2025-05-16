import { useAddContactMutation, useGetContactsQuery } from '../../redux/contacts/contacts';
import { useState } from 'react';
import * as SC from './PhonebookForm.styled.js';
import ContactList from '../ContactList/ContactList.jsx';
import Button from '../shared/ui/Button/Button.jsx';

export default function PhonebookForm() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      data.data.result.find(
        (contact) => contact.name === name || contact.email === email || contact.phone === phone,
      )
    ) {
      alert('Error');
      return;
    }
    await addContact({ name, email, phone });
    reset();
  };

  return (
    <>
      <SC.Form onSubmit={(e) => handelSubmit(e)}>
        <SC.Input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        <SC.Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <SC.Input
          type="number"
          placeholder="Phone number"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
        <Button variant="add" type="submit">
          Add
        </Button>
      </SC.Form>

      <ContactList />
    </>
  );
}

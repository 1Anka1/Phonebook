import { useAddContactMutation } from '../../redux/contacts/contacts';
import { useState } from 'react';

export default function PhonebookForm() {
  const [addContact] = useAddContactMutation();

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
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onInputChange} />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          type="number"
          placeholder="Phone number"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

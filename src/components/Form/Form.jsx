import { useState } from 'react';
import Button from '../shared/ui/Button/Button';
import { useChangeContactMutation } from '../../redux/contacts/contacts';
import * as SC from './Form.styled';

export default function Form({ props, toggleModal }) {
  const [changeContact] = useChangeContactMutation();

  const { _id, name, email, phone } = props;
  const [contactName, setcontactName] = useState(name);
  const [contactEmail, setcontactEmail] = useState(email);
  const [contactPhone, setcontactPhone] = useState(phone);

  const handelInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setcontactName(value);
        return;
      case 'email':
        setcontactEmail(value);
        return;
      case 'phone':
        setcontactPhone(value);
        return;
      default:
        return;
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await changeContact({ id: _id, name: contactName, email: contactEmail, phone: contactPhone });

    toggleModal();
  };

  return (
    <SC.FormWrapper>
      <SC.Form action="submit" onSubmit={handleContactSubmit}>
        <SC.Input type="text" value={contactName} name="name" onChange={handelInputChange} />
        <SC.Input type="email" value={contactEmail} name="email" onChange={handelInputChange} />
        <SC.Input type="number" value={contactPhone} name="phone" onChange={handelInputChange} />
        <Button type="submit" variant="add">
          Confirm
        </Button>
      </SC.Form>
    </SC.FormWrapper>
  );
}

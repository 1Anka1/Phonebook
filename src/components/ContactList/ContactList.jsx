import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contacts/contacts';
import Button from '../shared/ui/Button/Button';
import * as SC from './ContactList.styled';

export default function ContactList() {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  return (
    <SC.ContactList>
      {data?.data.result.map(({ _id, name, email, phone }) => (
        <SC.ContactItem key={_id}>
          <svg width="30" height="30">
            <use href="../../../public/sprite.svg#address-card" />
          </svg>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>

          <SC.WrapperContactBtn>
            <Button variant="delete" type="button" onClick={() => deleteContact(_id)}>
              Delete
            </Button>
            <Button variant="edit" type="button" onClick={(e) => console.log(e)}>
              Edit
            </Button>
          </SC.WrapperContactBtn>
        </SC.ContactItem>
      ))}
    </SC.ContactList>
  );
}

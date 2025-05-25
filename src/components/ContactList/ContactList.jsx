import { useGetContactsQuery } from '../../redux/contacts/contacts';
import * as SC from './ContactList.styled';
import ContactListItems from './ContactListItems/ContactListItems';

export default function ContactList() {
  const { data } = useGetContactsQuery();

  return (
    <SC.ContactList>
      {data?.data.result.map(({ _id, name, email, phone }) => (
        <ContactListItems key={_id} props={{ _id, name, email, phone }} />
      ))}
    </SC.ContactList>
  );
}

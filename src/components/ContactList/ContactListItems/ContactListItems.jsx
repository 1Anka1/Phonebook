import { useState } from 'react';
import { useDeleteContactMutation } from '../../../redux/contacts/contacts';
import Modal from '../../shared/ui/Modal/Modal';
import Button from '../../shared/ui/Button/Button';
import * as SC from '../ContactList.styled';
import Form from '../../Form/Form';

export default function ContactListItems({ props }) {
  const { _id, name, email, phone } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteContact] = useDeleteContactMutation();

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleDelete = () => {
    deleteContact(_id);
  };

  return (
    <SC.ContactItem>
      <svg width="30" height="30">
        <use href="../../../public/sprite.svg#address-card" />
      </svg>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>

      <SC.WrapperContactBtn>
        <Button variant="delete" type="button" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="edit" type="button" onClick={toggleModal}>
          Edit
        </Button>
      </SC.WrapperContactBtn>
      {isOpenModal && (
        <Modal closeModal={toggleModal}>
          <Form props={props} toggleModal={toggleModal} />
        </Modal>
      )}
    </SC.ContactItem>
  );
}

import * as SC from './Modal.styled';

export default function Modal({ children, closeModal }) {
  const closeOnClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        <SC.CloseBtn onClick={closeModal}>X</SC.CloseBtn>
        {children}
      </SC.Inner>
    </SC.Overlay>
  );
}

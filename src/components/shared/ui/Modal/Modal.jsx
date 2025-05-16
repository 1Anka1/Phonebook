export default function Modal({ children, closeModal }) {
  return (
    <div>
      <div>
        <button onClick={closeModal}>X</button>
        {children}
      </div>
    </div>
  );
}

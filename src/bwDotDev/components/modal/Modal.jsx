import { useEffect } from 'react';
import './modalStyles.css';

function Modal({ children, title, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);
  if (!isOpen) return null;

  const handleModal = () => {
    handleClose();
  };

  return (
    <div className={`modal`}>
      <div className={`modal-content`}>
      <div className='modal-header'>
        {title ? <h6>{title}</h6> : <div />}
        <button onClick={handleModal} className='close-btn'>
          Close
        </button>
      </div>
        <div className='modal-children'>{children}</div>
      </div>
    </div>
  );
}
export default Modal;

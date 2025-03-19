import React from 'react';

export interface ModalProps {
  success: boolean;
  closeModal: Function;
  newUser: {
    firstName: string;
    lastName: string;
    [key: string]: any;
  };
}

// CSS properties defined outside the component
export const modalContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  inset: '0 0 0 0',
  width: '100dvw',
  height: '100dvh',
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, .65) 0%, rgba(0, 0, 0, .65) 100%)',
  opacity: 0,
  transition: 'all .22s ease-in-out',
  transform: 'translateY(-100%)',
  animation: 'none'
};

export const modalContentStyle: React.CSSProperties = {
  width: '30%',
  height: '20dvh',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'var(--radius)',
  background: 'var(--white-color)',
  position: 'relative'
};

export const modalCloserStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-10px',
  right: '-10px',
  fontSize: '1.25rem',
  background: 'var(--white-color)',
  borderRadius: '50%',
  cursor: 'pointer',
  border: '1px solid rgb(0,0,0)'
};

export const titleStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  textAlign: 'center',
  color: 'rgb(0,0,0)'
};

export const highlightStyle: React.CSSProperties = {
  color: '#16a34a',
  margin: '0 0.5rem'
};


export const Modal = ({success, closeModal, newUser}: ModalProps) => {
  // Dynamic styles based on props
  const dynamicContainerStyle: React.CSSProperties = {
    ...modalContainerStyle,
    opacity: success ? 1 : 0,
    transform: success ? 'translateY(0)' : 'translateY(-100%)',
    animation: success ? 'fadeIn 0.45s ease-in-out forwards' : 'none'
  };


  function ModalClick() {  
    closeModal();
  }


  return (
    <div 
      className={`modal-success-container ${success ? 'show' : ''}`} 
      style={dynamicContainerStyle}
    >
      <div 
        className="modal-content" 
        aria-labelledby="modal-title" 
        role="dialog" 
        aria-modal="true" 
        style={modalContentStyle}
      >
        <p id="modal-title" style={titleStyle}>
          Added User : <span style={highlightStyle}>{newUser.lastName} {newUser.firstName}</span>
          <span className="closer" style={modalCloserStyle} onClick={(e) => ModalClick()}>❌</span> 
        </p>
      </div>
    </div>
  );
};
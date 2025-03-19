import React from 'react';

interface ModalProps {
    success: boolean;
    closeModal: Function;
    newUser: {
        firstName: string;
        lastName: string;
        [key: string]: any;
    };
}
declare const modalContainerStyle: React.CSSProperties;
declare const modalContentStyle: React.CSSProperties;
declare const modalCloserStyle: React.CSSProperties;
declare const titleStyle: React.CSSProperties;
declare const highlightStyle: React.CSSProperties;
declare const Modal: ({ success, closeModal, newUser }: ModalProps) => React.JSX.Element;

export { Modal, ModalProps, highlightStyle, modalCloserStyle, modalContainerStyle, modalContentStyle, titleStyle };

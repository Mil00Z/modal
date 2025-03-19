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
export declare const modalContainerStyle: React.CSSProperties;
export declare const modalContentStyle: React.CSSProperties;
export declare const modalCloserStyle: React.CSSProperties;
export declare const titleStyle: React.CSSProperties;
export declare const highlightStyle: React.CSSProperties;
export declare const Modal: ({ success, closeModal, newUser }: ModalProps) => React.JSX.Element;

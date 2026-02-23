import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

import './ModalContext.css';
import { LanguageContext } from '../Language/LanguageContext';

const modalRoot = document.getElementById('modal-root');

function ModalContent({ children, onClose, title, footer }) {
    const { cap, changeLang } = useContext(LanguageContext);

    return (
        <div className="modal-backdrop">
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className='modal-title'>
                    <button onClick={onClose} className="modal-close-btn">
                        &times;
                    </button>
                    <p className='modal-title-text'>{title}</p>
                </div>
                <div className='modal-content'>
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="modal-btn modal-cancel-btn" onClick={onClose}>&times; {cap.modalButtonCancel}</button>
                    {footer}
                </div>
            </div>
        </div>
    );
};


function Modal({ isOpen, onClose, children, title, footer }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <ModalContent onClose={onClose} title={title} footer={footer}>{children}</ModalContent>,
        modalRoot
    );
};


export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalFooter, setModalFooter] = useState(null);

    const openModal = (content = null, title = null, footer = null) => {
        setModalContent(content);
        setModalTitle(title);
        setModalFooter(footer);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        setModalTitle(null);
        setModalFooter(null);
    };

    const contextValue = { isModalOpen, openModal, closeModal };

    return (
        <ModalContext.Provider value={contextValue}>

            <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} footer={modalFooter}>
                {modalContent}
            </Modal>

            {children}
        </ModalContext.Provider>
    );
};

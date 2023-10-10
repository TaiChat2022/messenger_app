import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const CustomModal = ({ modalIsOpen, handleCloseModal, children }) => {
    return (
        <>
            <Modal
                appElement={document.getElementById('root')}
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                className="modal-content"
                contentLabel="Custom Modal"
            >
                {children}
            </Modal>
        </>
    );
};

export default CustomModal;
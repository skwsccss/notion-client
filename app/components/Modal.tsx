import React, { FC } from 'react';
// import styles from './Modal.module.css';
import SearchInput from './SearchInput/SearchInput';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: any;
    handleSearchQueryChange: (e: string) => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, handleSearchQueryChange }) => {
    if (!isOpen) return null;
    const handleSearch = (value: string) => {
        handleSearchQueryChange(value)
    };
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded w-2/5 min-h-200" onClick={handleModalClick}>
                <SearchInput onSearch={handleSearch} />
                <div className='p-8 text-black'>
                    {children}
                </div>
                <button onClick={onClose} className="cursor-pointer text-black mb-4 float-right mr-4">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
// components/SearchInput.tsx
import React, { FC, InputHTMLAttributes } from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSearch: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, ...rest }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.currentTarget.value);
    };

    return (
        <div className="border-b border-gray-200 p-2 flex items-center">
            <span className={styles.searchIcon}>🔍</span>
            <input
                className={`text-black outline-none w-100 ${styles.searchInput}`}
                type="text"
                placeholder="Search Birocular Inc..."
                onChange={handleChange}
                {...rest}
            />
        </div>
    );
};

export default SearchInput;

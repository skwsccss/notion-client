// components/CommandKMenu.tsx
import { useState, useEffect } from 'react';
import Modal from './Modal';
import ListItem from './ListItem/ListItem';
import matchSorter from 'match-sorter';
// import sendRequest from '../Services/ApiService'
import sendRequest from '../Services/ApiService';

import { useHotkeys } from "react-hotkeys-hook";

const CommandKMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredData, setFilteredData] = useState<any[]>([]);


    useEffect(() => {
        setIsLoading(true);
        async function fetchPageData() {
            const pageId = '36ac16834fda492eaa0004693609b0d9';
            const data = await sendRequest(`/blocks/${pageId}/children`)
            setIsLoading(false);
            setSearchResults(data);
            setFilteredData(data);
        }
        fetchPageData();
    }, []);

    useEffect(() => {
        if (searchQuery == '') return setFilteredData(searchResults);
        const filtered = searchResults.filter((x) => {
            return x.properties.title.title[0].plain_text.toLowerCase().includes(searchQuery.toLowerCase())
        })
        setFilteredData(filtered)
    }, [searchQuery])
    useHotkeys('ctrl +  i', () => {
        setIsOpen(true)
    })
    useHotkeys('esc', () => {
        setIsOpen(false)
    })

    const handleSearchQueryChange = (value: string) => {
        setSearchQuery(value);
    };

    const list = filteredData.map((item: object, index: number) => (
        <ListItem key={index} data={item} />
    ))

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">

            <div className='text-black text-center'>
                <p className='font-bold text-lg'>Command I Menu</p>
                {isLoading ? <span>Loading Page data... Wait a moment!</span> : <span>Please press ⌘ + I (Ctrl + I for Windows users) to open search modal. </span>}
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} handleSearchQueryChange={handleSearchQueryChange}>
                {list}
            </Modal>
        </div>

    );
};

export default CommandKMenu;

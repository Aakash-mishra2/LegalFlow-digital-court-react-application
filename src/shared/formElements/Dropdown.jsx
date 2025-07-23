import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({
    label,
    data,
    setSelectedItem,
    placeholder = "Select an item",
    debounceTime = 300,
    disabled = false,
    dropdownWithDescription = false,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(() => data || []);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);
    useEffect(() => {
        if (data) {
            return setFilteredData(data);
        }
        return () => {
            setFilteredData();
        }

    }, [data]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
        return () => {
            setFilteredData(data);
        };
    }, [searchTerm, data]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        setSearchTerm(item.name);
    };

    return (
        <div
            ref={dropdownRef}
            className='relative w-full '
        >
            <label className="text-sm font-circular mb-2">{label}</label>
            <input
                type="text"
                value={searchTerm}
                placeholder={placeholder}
                onClick={() => setIsOpen(!isOpen)}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full p-2 border-[1px] border-gray-300 text-md font-circular placeholder:text-gray-200 placehoder:text-sm rounded-md relative focus:outline-none focus:ring-opacity-50 focus:ring-gray-500'
                disabled={disabled}
            />
            {isOpen && (
                <ul
                    className=' absolute top-full left-0 w-full border-1 border-[#ccc] max-h-[150px] overflow-y-auto bg-white z-10'
                >
                    {filteredData.map((item, index) => (
                        <div key={index} className="group relative">
                            <li
                                key={index}
                                onClick={() => handleSelect(item)}
                                className='p-2 cursor-pointer rounded-lg border-2 border-white group-hover:m-0 group-hover:border-gray-200 '
                            >
                                {item.name}
                            </li>
                            {
                                dropdownWithDescription && (
                                    <p
                                        className='z-30 absolute right-0 top-0 h-fit max-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg text-xs font-thin font-circular
                            p-2 backdrop-blur-md shadow-lg border-2 bg-gray-200 italic'
                                    > {item.description} <br /> Eg: {item.examples.join(", ")} </p>

                                )
                            }
                        </div>

                    ))}

                    {filteredData.length === 0 && <li style={{ padding: "8px", color: "grey" }}>No results found</li>}
                </ul>
            )
            }
        </div >
    );
};

export default Dropdown;

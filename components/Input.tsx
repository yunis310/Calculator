import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/[^0-9+\-*/.]/g, '');
        inputValue = inputValue.replace(/([+\-*/.]){2,}/g, '$1');
        inputValue = inputValue.replace(/^[+*/.]/, '');

        onChange(inputValue);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter calculation"
            className="border-2 border-gray-300 rounded-lg p-3 w-full text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
        />
    );
};

export default Input;

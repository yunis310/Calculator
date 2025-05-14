import React from 'react';

interface Props {
    label: string;
    onClick: (value: string) => void;
}

const ButtonItem: React.FC<Props> = ({ label, onClick }) => {
    return (
        <button
            onClick={() => onClick(label)}
            className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
            {label}
        </button>
    );
};

export default ButtonItem;

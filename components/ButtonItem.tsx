import React from 'react';

interface ButtonItemProps {
    label: string;
    onClick: (value: string) => void;
}

const ButtonItem: React.FC<ButtonItemProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={() => onClick(label)}
            className="w-full h-16 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-md transition"
        >
            {label}
        </button>
    );
};

export default ButtonItem;

import React from 'react';
import ButtonItem from './ButtonItem';

interface Props {
    handleClick: (value: string) => void;
    handleClear: (value: string) => void;
}

const Buttons: React.FC<Props> = ({ handleClick, handleClear }) => {
    const buttons = [
        '7',
        '8',
        '9',
        '/',
        '4',
        '5',
        '6',
        '*',
        '1',
        '2',
        '3',
        '-',
        '0',
        '.',
        '%',
        '+',
    ];

    return (
        <div className="grid grid-cols-4 gap-3">
            {buttons.map((char) => (
                <ButtonItem key={char} label={char} onClick={handleClick} />
            ))}
            <div className="col-span-4">
                <ButtonItem label="Clear" onClick={handleClear} />
            </div>
        </div>
    );
};

export default Buttons;

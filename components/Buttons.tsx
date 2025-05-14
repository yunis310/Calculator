import React from 'react';
import ButtonItem from './ButtonItem';

interface Props {
    handleClick: (value: string) => void;
    handleClear: (value: string) => void;
}

const Buttons: React.FC<Props> = ({ handleClick, handleClear }) => {
    const buttons = [
        '.',
        '+',
        '/',
        '*',
        '-',
        '%',
        '0',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2',
        '1',
    ];

    return (
        <div>
            <div className="flex flex-wrap gap-2 justify-center my-4">
                {buttons.map((char) => (
                    <ButtonItem key={char} label={char} onClick={handleClick} />
                ))}
                <ButtonItem label="Clear" onClick={handleClear} />
            </div>
        </div>
    );
};

export default Buttons;

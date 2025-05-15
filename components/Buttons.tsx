import React from 'react';
import ButtonItem from './ButtonItem';

interface Props {
    handleClick: (value: string) => void;
    handleClear: () => void;
    handleBackspace: () => void;
}

const Buttons: React.FC<Props> = ({
    handleClick,
    handleClear,
    handleBackspace,
}) => {
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
            <ButtonItem label="⌫" onClick={handleBackspace} />
            <div className="col-span-3">
                <ButtonItem label="Clear" onClick={handleClear} />
            </div>
        </div>
    );
};

export default Buttons;

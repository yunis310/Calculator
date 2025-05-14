'use client';
import Buttons from '@/components/Buttons';
import Input from '@/components/Input';
import Result from '@/components/Result';
import calculate from '@/utilities/calculate';
import { useEffect, useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(0);

    const handelInput = (str: string) => {
        setInputValue(str);
    };
    const handleClear = () => {
        setInputValue('');
        setResult(0);
    };
    useEffect(() => {
        setResult(calculate(inputValue));
    }, [inputValue]);

    const handleClick = (value: string) => {
        const operators = ['+', '-', '*', '/', '%', '.'];

        // Get last character from current input
        const lastChar = inputValue.slice(-1);

        if (operators.includes(value)) {
            // If last character is also an operator, replace it with the new one
            if (operators.includes(lastChar)) {
                setInputValue((prev) => prev.slice(0, -1) + value);
                return;
            }
        }

        setInputValue((prev) => prev + value);
    };

    return (
        <div className="flex flex-col items-center p-4 ">
            <Input value={inputValue} onChange={setInputValue} />
            <Result result={result} />
            <Buttons handleClick={handleClick} handleClear={handleClear} />
        </div>
    );
}

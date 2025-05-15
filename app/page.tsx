'use client';
import Buttons from '@/components/Buttons';
import Input from '@/components/Input';
import Result from '@/components/Result';
import calculate from '@/utilities/calculate';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(0);
    const [prev, setPrev] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setInputValue('');
        setResult(0);
        setPrev(0);
        inputRef.current?.focus();
    };

    const handleBackspace = () => {
        setInputValue((prev) => prev.slice(0, -1));
        inputRef.current?.focus();
    };

    const handleClick = (value: string) => {
        const operators = ['+', '-', '*', '/', '%', '.'];
        const lastChar = inputValue.slice(-1);

        if (operators.includes(value)) {
            if (operators.includes(lastChar)) {
                setInputValue((prev) => prev.slice(0, -1) + value);
                inputRef.current?.focus();
                return;
            }
        }

        setInputValue((prev) => prev + value);
        inputRef.current?.focus();
    };

    useEffect(() => {
        const operators = ['+', '-', '*', '/', '%', '.'];
        const lastChar = inputValue.slice(-1);

        if (inputValue === '') {
            setResult(0);
            return;
        }

        if (operators.includes(lastChar)) {
            setResult(prev);
        } else {
            const newResult = calculate(inputValue);
            setResult(newResult);
            setPrev(newResult);
        }
    }, [inputValue]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-6">
                <Input
                    value={inputValue}
                    onChange={setInputValue}
                    inputRef={inputRef}
                />
                <Result result={result} />
                <Buttons
                    handleClick={handleClick}
                    handleClear={handleClear}
                    handleBackspace={handleBackspace}
                />
            </div>
        </div>
    );
}

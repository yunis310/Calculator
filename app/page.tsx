'use client';
import Buttons from '@/components/Buttons';
import Input from '@/components/Input';
import Result from '@/components/Result';
import calculate from '@/utilities/calculate';
import { useEffect, useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(0);

    const handleClear = () => {
        setInputValue('');
        setResult(0);
    };

    useEffect(() => {
        setResult(calculate(inputValue));
    }, [inputValue]);

    const handleClick = (value: string) => {
        const operators = ['+', '-', '*', '/', '%', '.'];
        const lastChar = inputValue.slice(-1);

        if (operators.includes(value)) {
            if (operators.includes(lastChar)) {
                setInputValue((prev) => prev.slice(0, -1) + value);
                return;
            }
        }

        setInputValue((prev) => prev + value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Input value={inputValue} onChange={setInputValue} />
                    <Result result={result} />
                </div>

                <Buttons handleClick={handleClick} handleClear={handleClear} />
            </div>
        </div>
    );
}

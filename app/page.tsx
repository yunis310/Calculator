'use client';
import Body from '@/components/Body';
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

    return (
        <div className="flex flex-col items-center p-4 ">
            <Input value={inputValue} onChange={setInputValue} />
            <Result result={result} />
            <Body />
        </div>
    );
}

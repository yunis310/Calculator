'use client';
import Body from '@/components/Body';
import Input from '@/components/Input';
import Result from '@/components/Result';
import { useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handelInput = (str: string) => {
        setInputValue(str);
    };
    const handleClear = () => {
        setInputValue('');
        setResult('');
    };

    return (
        <div className="flex flex-col items-center p-4 ">
            <Input value={inputValue} onChange={setInputValue} />
            <Result />
            <Body />
        </div>
    );
}

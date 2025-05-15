import React from 'react';

interface Props {
    result: number;
}

const Result: React.FC<Props> = ({ result }) => {
    return (
        <div className="w-full bg-gray-100 border-2 border-gray-300 rounded-lg p-3 text-right text-2xl font-semibold text-gray-800">
            {result}
        </div>
    );
};

export default Result;

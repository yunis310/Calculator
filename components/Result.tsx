import React from 'react';

interface Props {
    result: number;
}

const Result: React.FC<Props> = ({ result }) => {
    return (
        <div>
            <p>{result}</p>
        </div>
    );
};

export default Result;

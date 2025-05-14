import React from 'react';

interface Props {
    id?: string;
}

const Body: React.FC<Props> = () => {
    return (
        <div>
            <p>Body</p>
        </div>
    );
};

export default Body;

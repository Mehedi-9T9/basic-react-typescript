import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-red-400 border rounded p-4'>
            {
                children
            }

        </div>
    );
};

export default Card;
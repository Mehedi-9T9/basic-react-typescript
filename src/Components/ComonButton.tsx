import React from 'react';

const ComonButton = ({ children, stl }: { children: React.ReactNode, stl: React.CSSProperties }) => {
    return (
        <button style={stl}>{children}</button>
    );
};

export default ComonButton;
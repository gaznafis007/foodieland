import React from 'react';

const Button = ({className, handler, children}) => {
    return (
        <button className={`px-7 py-5 bg-primary font-semibold rounded-2xl ${className}`} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;
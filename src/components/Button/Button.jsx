import React from 'react';

const Button = ({className, handler, children, bg}) => {
    return (
        <button className={`px-7 py-5 ${bg ? bg : 'bg-primary hover:bg-sky-100'} font-semibold rounded-2xl ${className}`} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;
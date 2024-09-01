import React from 'react';
import '/src/index.css';

const MainLayout = ({ children }) => {
    return (
        <>
           <main className='h-full'>{children}</main>
        </>
    );
};

export { MainLayout };
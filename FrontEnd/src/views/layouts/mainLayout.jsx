import React from 'react';
import '/src/index.css';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
    return (
        <>
           <main className=''>{children}</main>
           
        </>
    );
};

export { MainLayout };
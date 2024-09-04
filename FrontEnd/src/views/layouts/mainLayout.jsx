import React from 'react';
import '../index.css';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
    return (
        <>
           <main className=''>{children}</main>
           
        </>
    );
};

export { MainLayout };
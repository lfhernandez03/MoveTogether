import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/button';
import { Login } from '../auth/components/login';
import { Navbar } from '../components/navbar';

import '/src/index.css';

const MainLayout = ({ children }) => {
    return (
        <>
           <Navbar />
           <main className='h-full overflow-hidden'>{children}</main>
        </>
    );
};

export { MainLayout };
import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/button';
import { Login } from '../components/login';
import '/src/index.css';

const MainLayout = ({ children }) => {
    return (
        <div className='flex justify-center'>
            <Login></Login>
        </div>
    );
};

export { MainLayout };
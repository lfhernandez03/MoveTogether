import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/button';
import '/src/index.css';

const MainLayout = ({ children }) => {
    return (
        <div className='flex justify-center'>
            <Button text='Click me' className='bg-red-500 border-2 border-red-600 rounded-full px-4 py-1 hover:bg-red-600 '/>
        </div>
    );
};

export { MainLayout };
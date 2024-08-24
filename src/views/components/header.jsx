import React from 'react';
import logo from '../../assets/images/movetogether.png';

const Header = () => {
    return (
        <div className=''>
            <header>
                <div className='flex justify-between p-4 m-2'>
                    <div className=''>
                        <h1 className='underline'>MoveTogether</h1>
                    </div> 
                    <div className=''>
                        <img src={logo} alt="MoveTogether logo" className='w-12 h-12 ' />
                    </div>
                </div>
            </header>
        </div>
    );
}

export { Header };
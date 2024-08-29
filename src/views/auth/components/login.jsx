import React from 'react';
import { Button } from '/src/views/components/button';

const Login = () => {
    return (
        <div className='grid justify-center gap-2 border rounded p-4 m-4 ' >
            <div className='pb-4'>
                <h1 className='underline flex justify-center'>Login</h1>
            </div>
            <div className='flex justify-center'>
                <Button text='Ingresar con gugulu' className='  bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full' />
            </div>
            <div className='flex items-center'>
                <div className='flex-grow border-t border-gray-300'/>
                <span className='text-xs flex justify-center p-2'>O ingresar con Email</span>
                <div className='flex-grow border-t border-gray-300'/>
            </div>
            <div className=''>
                <form>
                     <div className=''>
                        <div className='py-2'>
                            <label htmlFor='email' className=''>Email</label>
                        </div>
                        <div>  
                            <input type='email' id='email' name='email' placeholder='  golis' className='border rounded  ' /> 
                        </div>
                     </div>
                     <div className=' py-2'>
                        <div className=''>
                            <label htmlFor='password' className=''>Contraseña</label>
                        </div>
                        <div>  
                            <input type='password' id='password' name='password' placeholder='  golis' className='border rounded ' /> 
                        </div>
                     </div>

                </form>
            </div> 
        </div>
    );
}

export { Login };
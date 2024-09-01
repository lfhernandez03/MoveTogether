import React from 'react';
import { Button } from '../../global/elements/button';
import { Input } from '../../global/elements/inputs';

const Login = () => {
    return (
        <div className="flex justify-center  w-96 mx-auto border rounded-3xl p-10">
            <div className=''>
                <div className='grid justify-center mb-7'>
                    <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
                    <p className='text-center font-semibold '>Hola, bienvenido a MoveTogether</p>
                </div>
                <div className='grid'>
                    <form action="">
                        <div className='px-7'>
                            <div className='flex justify-center relative'>
                                <Input type="text" placeholder="Usuario/Correo" className="rounded font-semibold py-0.5 pl-6 pr-10 my-1 bg-slate-100 border-gray-500 border w-full" />
                                <i className="fa-solid fa-user absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                            </div>
                            <div className='flex justify-center relative'>
                                <Input type="password" placeholder="Contraseña" className="rounded font-semibold py-0.5 px-6 my-1 bg-slate-100 border-gray-500 border" />
                                <i className="fa-solid fa-lock absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                            </div>
                            <div className='flex justify-center w-full'>
                                <Button text="Inicia Sesion" style={{ backgroundColor: "#0081DA", color: "#ecf0f1", borderRadius: "5px", width: "250px"}} />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                <div className="flex items-center my-3">
                    <span className="flex-grow border-t border-black"></span>
                    <p className="text-center font-semibold mx-3">O inicia sesión con</p>
                    <span className="flex-grow border-t border-black"></span>
                </div>                    
                <div className='flex justify-center relative pb-4'>
                        <Button text="Google" 
                                className=" rounded-md border-gray-400 border "
                                icon="fa-brands fa-google" 
                        />
                    </div>
                </div>
                <div>
                    <p className='text-center font-semibold '>¿Olvidaste tu contraseña? <a href="/forgot" className="text-blue-500">Recuperar</a></p>
                </div>
                <div>
                    <p className='text-center font-semibold '>¿No tienes cuenta? <a href="/signup" className="text-blue-500">Registrate</a></p>
                </div>
            </div>
        </div>
    );
}

export { Login };
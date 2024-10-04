import React from "react";
import Button from "../global/elements/button";

const WellcomePage = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex justify-center items-center px-20">
        <img src="/images/wellcome.png" alt="wellcome" className=" px-10 py-32 shadow-custom"/>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col gap-20 pr-20">
        <h1 className="text-8xl">BIENVENIDO<span className="text-blue-700">!</span></h1>
        <h1 className="text-2xl text-center px-24">Aquí no solo te conectarás con otros amantes del deporte, sino que también podrás compartir 
            tus aventuras, descubrir rutas increíbles y encontrar todo lo que necesitas para mejorar tu 
            rendimiento. Ya seas corredor, ciclista o simplemente alguien que disfruta mantenerse activo, 
            ¡esta es tu comunidad! Nos encanta verte alcanzar tus metas, así que siéntete libre de explorar y 
            disfrutar todo lo que tenemos para ti. </h1>
        <Button navigateTo="/" text="Empecemos juntos!" className="bg-green-600 rounded-full text-xl "/>
      </div>
    </div>
  );
}

export default WellcomePage;
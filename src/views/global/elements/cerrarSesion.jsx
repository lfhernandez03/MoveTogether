import React from "react";

const CerrarSesion = () => {
    const handleLogout = () => {
        // localStorage.removeItem("authToken");
        // navigate("/login");
        console.log("Cerrar Sesióooon");
    };
    
    return (
        <button
        onClick={handleLogout}
        className="text-red-500 font-semibold hover:text-red-700"
        >
        Cerrar Sesión
        </button>
    );
}

export default CerrarSesion;
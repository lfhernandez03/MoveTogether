import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";

const Rutasss = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDhL0YO_vXyADRJJ-eOj-u2QXnrWMlV76A", // Reemplaza con tu clave API
  });

  const handleMapClick = (event) => {
    const { latLng } = event;
    const position = { lat: latLng.lat(), lng: latLng.lng() };

    if (!origin) {
      setOrigin(position);
    } else if (!destination) {
      setDestination(position);
    } else {
      alert("Ya seleccionaste el origen y el destino. Usa 'Limpiar Selección' para empezar de nuevo.");
    }
  };

  const clearSelection = () => {
    setOrigin(null);
    setDestination(null);
    setDirections(null);
  };

  const calculateRoute = async () => {
    if (!origin || !destination) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          alert("Error al calcular la ruta: " + status);
        }
      }
    );
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Selecciona tu Ruta en el Mapa</h1>
      <p className="mb-4">
        Haz clic en el mapa para seleccionar el <b>origen</b> y el <b>destino</b>.
        Luego, haz clic en "Calcular Ruta".
      </p>
      <div className="flex gap-2 mb-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clearSelection}
        >
          Limpiar Selección
        </button>
        <button
          className={`px-4 py-2 ${
            origin && destination
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          } rounded`}
          onClick={calculateRoute}
          disabled={!origin || !destination}
        >
          Calcular Ruta
        </button>
      </div>
      <GoogleMap
        onClick={handleMapClick}
        center={{ lat: 40.7128, lng: -74.006 }}
        zoom={13}
        mapContainerClassName="h-96 w-full border rounded"
      >
        {origin && <Marker position={origin} label="Origen" />}
        {destination && <Marker position={destination} label="Destino" />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default Rutasss;

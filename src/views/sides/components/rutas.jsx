import React, { useState, useRef, useCallback } from "react";
import { GoogleMap, Marker, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";

const RutasView = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [mode, setMode] = useState("WALKING"); // Default mode is walking
  const [roundTrip, setRoundTrip] = useState(false);

  const mapRef = useRef(); // Ref for storing the map object

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_API_KEY, // Reemplaza con tu clave API
  });

  // Función para obtener la ubicación actual con mayor precisión
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;

          // Verificar si la precisión es suficiente (por ejemplo, dentro de 100 metros)
          if (accuracy <= 100) {
            setOrigin({ lat: latitude, lng: longitude });
          } else {
            alert("La precisión de la ubicación no es suficientemente alta. Intenta nuevamente.");
          }
        },
        (error) => {
          alert("No se pudo obtener la ubicación actual. Asegúrate de habilitar la geolocalización.");
        },
        {
          enableHighAccuracy: true, // Solicitar alta precisión
          timeout: 5000, // Tiempo máximo de espera para obtener la ubicación
          maximumAge: 0, // No usar una ubicación en caché
        }
      );
    } else {
      alert("La geolocalización no está disponible en tu navegador.");
    }
  };

  const handleMapClick = useCallback((event) => {
    const { latLng } = event;
    const position = { lat: latLng.lat(), lng: latLng.lng() };

    if (!origin) {
      setOrigin(position);
    } else if (!destination) {
      setDestination(position);
    } else {
      alert("Ya seleccionaste el origen y el destino. Usa 'Limpiar Selección' para empezar de nuevo.");
    }
  }, [origin, destination]);

  const clearSelection = () => {
    setOrigin(null);
    setDestination(null);
    setDirections(null);
    setDistance("");
    setDuration("");
  };

  const calculateRoute = async () => {
    if (!origin || !destination) return;

    const directionsService = new google.maps.DirectionsService();

    const request = {
      origin,
      destination: roundTrip ? origin : destination, // Si es ida y vuelta, el destino final será el origen
      waypoints: roundTrip ? [{ location: destination }] : [], // Si es ida y vuelta, agrega el destino como waypoint
      travelMode: google.maps.TravelMode[mode], // Asegurarse de que se pase el valor correcto
      optimizeWaypoints: false,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);

        // Calcular distancia y duración acumuladas
        const legs = result.routes[0].legs;
        const totalDistance = legs.reduce((sum, leg) => sum + leg.distance.value, 0); // En metros
        const totalDuration = legs.reduce((sum, leg) => sum + leg.duration.value, 0); // En segundos

        setDistance(`${(totalDistance / 1000).toFixed(2)} km`);
        setDuration(`${Math.floor(totalDuration / 60)} min`);
      } else {
        alert("Error al calcular la ruta: " + status);
      }
    });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Selecciona tu Ruta en el Mapa</h1>
      <p className="mb-4">
        Haz clic en el mapa para seleccionar el <b>origen</b> y el <b>destino</b>.
        Luego, selecciona un modo de transporte y haz clic en "Calcular Ruta".
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

      <div className="mb-4">
        <button
          onClick={getCurrentLocation}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Usar mi ubicación actual
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="mode" className="block font-medium mb-1">Selecciona el modo de transporte:</label>
        <select
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        >
          <option value="WALKING">Caminata</option>
          <option value="BICYCLING">Ciclismo</option>
          <option value="DRIVING">Patinaje (simulado)</option>
        </select>
      </div>

      <div className="mb-4 flex items-center">
        <input
          id="roundTrip"
          type="checkbox"
          checked={roundTrip}
          onChange={() => setRoundTrip(!roundTrip)}
          className="mr-2"
        />
        <label htmlFor="roundTrip" className="font-medium">¿Ruta de ida y vuelta?</label>
      </div>

      {distance && duration && (
        <div className="mb-4 p-4 border rounded bg-gray-100">
          <p><b>Distancia total:</b> {distance}</p>
          <p><b>Duración total:</b> {duration}</p>
        </div>
      )}

      <GoogleMap
        onClick={handleMapClick}
        center={origin || { lat: 4.0847, lng: -76.199 }} // Si no hay origen, usa las coordenadas predeterminadas
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

export default RutasView;
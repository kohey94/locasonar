import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

require('dotenv').config();

const containerStyle = {
  width: '100%',
  height: '1000px'
};

const center = {
  lat: 35.6895, // Tokyo
  lng: 139.6917
};

function App() {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  
  useEffect(() => {
    setGoogleMapsApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  }, []);
  
  if (!googleMapsApiKey) {
    // Render a loading indicator or fallback UI until the API key is available
    return <div>Loading...</div>;
  }
  
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default App;

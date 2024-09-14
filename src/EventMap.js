import React, {useEffect} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '1000px'
};

const center = {
  lat: 35.6895,
  lng: 139.6917
};

const libraries = ["places"];

const EventMap = () => {
    
      
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries
  });

  // ダミーイベントデータを作成
  const events = [
    { position: { lat: 35.6895, lng: 139.6917 }, title: 'イベント 1' }, // 東京
    { position: { lat: 35.6995, lng: 139.7017 }, title: 'イベント 2' }, // 東京の別の場所
    { position: { lat: 35.6795, lng: 139.6817 }, title: 'イベント 3' }  // 東京の別の場所
  ];
  
  useEffect(() => {
    events.forEach((event) => {
      console.log(event.position); // これで各イベントのpositionが正しく出力されるか確認
    });
  }, [isLoaded, events]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
    {/* マップ上にダミーマーカーを表示
    {events.map((event, index) => (
    <Marker 
        key={index} 
        position={event.position} 
        title={event.title} 
    />
        
      ))} */}
    </GoogleMap>
  );
}

export default EventMap;

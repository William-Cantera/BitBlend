import React from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

const EmbeddedMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker position={{ lat: props.latitude, lng: props.longitude }} />
    </GoogleMap>
  )),
);

const LocationMap = ({ latitude, longitude }) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB8abm-H_wLyD4QyYLfAlDerUrwrN7tkcc`;

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <div
        style={{
          width: '100%',
          height: '400px',
          maxWidth: '600px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <EmbeddedMap
          googleMapURL={mapUrl}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          latitude={latitude}
          longitude={longitude}
        />
      </div>
    </div>
  );
};

export default LocationMap;

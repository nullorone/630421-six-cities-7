import React from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {arrayOf, shape, number} from 'prop-types';

function Map(props) {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const city = [52.38333, 4.9];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
    const map = leaflet.map(mapRef.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    props.locations.forEach((location) => {
      leaflet
        .marker([location.latitude, location.longitude], {icon})
        .addTo(map);
    });

    return () => map.remove();
  }, [props.locations]);


  return (
    <div ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  locations: arrayOf(shape({
    latitude: number.isRequired,
    longitude: number.isRequired,
    zoom: number.isRequired,
  })),
};

export default Map;

import React from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {arrayOf, shape, number} from 'prop-types';
import useMap from '../../hooks/use-map';
import {useSelector} from 'react-redux';

function Map(props) {
  const cardIdxSelector = useSelector((state) => state.cardIdxHovered);
  const mapRef = React.useRef(null);
  const map = useMap(mapRef, props.locations[0]);

  const defaultIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const activeIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  React.useEffect(() => {
    if (map) {
      props.locations.forEach((location) => {
        leaflet
          .marker([location.latitude, location.longitude],
            {
              icon: cardIdxSelector === location.id ? activeIcon : defaultIcon,
            })
          .addTo(map);
      });
    }
  }, [map, defaultIcon, activeIcon, props.locations, cardIdxSelector]);


  return (
    <div ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  locations: arrayOf(shape({
    id: number,
    latitude: number.isRequired,
    longitude: number.isRequired,
    zoom: number.isRequired,
  })),
};

export default Map;

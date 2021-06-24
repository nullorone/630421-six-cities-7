import React from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {arrayOf, shape, number} from 'prop-types';
import {connect} from 'react-redux';
import useMap from '../../hooks/use-map';

// {
//   center: [52.38333, 4.9],
//     zoom: 12,
//   zoomControl: false,
//   marker: true,
// }

function Map(props) {
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
              icon: props.cardIdxHovered === location.id ? activeIcon : defaultIcon,
            })
          .addTo(map);
      });
    }
  }, [map, defaultIcon, activeIcon, props.locations, props.cardIdxHovered]);


  return (
    <div ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  cardIdxHovered: number,
  locations: arrayOf(shape({
    id: number,
    latitude: number.isRequired,
    longitude: number.isRequired,
    zoom: number.isRequired,
  })),
};

const mapStateToProps = (state) => ({
  cardIdxHovered: state.cardIdxHovered,
});

export {Map};
export default connect(mapStateToProps)(Map);

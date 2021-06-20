import {arrayOf, bool, number, shape, string} from 'prop-types';

const locationProp = shape({
  latitude: number.isRequired,
  longitude: number.isRequired,
  zoom: number.isRequired,
});

export default {
  id: number.isRequired,
  bedrooms: number.isRequired,
  city: shape({
    location: locationProp,
    name: string.isRequired,
  }),
  description: string.isRequired,
  goods: arrayOf(string.isRequired),
  host: shape({
    avatarUrl: string.isRequired,
    id: number.isRequired,
    isPro: bool.isRequired,
    name: string.isRequired,
  }),
  images: arrayOf(string.isRequired),
  isFavorite: bool.isRequired,
  isPremium: bool.isRequired,
  location: locationProp,
  maxAdults: number.isRequired,
  previewImage: string.isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  title: string.isRequired,
  type: string.isRequired,
};

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: OfferHost;
  images: string[];
  maxAdults: number;
};

export type OfferCity = {
  name: string;
  location: CityLocation;
};

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferType = 'Apartment' | 'Private room';

export type Offers = Offer[];

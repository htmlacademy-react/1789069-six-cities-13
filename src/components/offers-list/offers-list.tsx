import { Offers } from '../../types/offer';
import { PlaceCard } from '../place-card';

type OffersListProps = {
  offers: Offers;
  isFavoritesLayout: boolean;
  isOfferLayout: boolean;
}

function OffersList({offers, isFavoritesLayout, isOfferLayout}: OffersListProps): JSX.Element {
  let className = '';

  switch(true) {
    case isFavoritesLayout:
      className = 'favorites__places';
      break;
    case isOfferLayout:
      className = 'near-places__list places__list';
      break;
    default:
      className = 'cities__places-list places__list tabs__content';
      break;
  }

  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} isFavoritesLayout={isFavoritesLayout} isOfferLayout={isOfferLayout}/>
      ))}
    </div>
  );
}

export default OffersList;

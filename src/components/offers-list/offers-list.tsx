import { Offers } from '../../types/offer';
import { PlaceCard } from '../place-card';

type OffersListProps = {
  offers: Offers;
  isFavorites: boolean;
  isOther: boolean;
}

function OffersList({offers, isFavorites, isOther}: OffersListProps): JSX.Element {
  if (isFavorites) {
    return (
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} isFavorite={isFavorites} isOther={isOther}/>
        ))}
      </div>
    );
  } else if (isOther) {
    return (
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} isFavorite={isFavorites} isOther={isOther}/>
        ))}
      </div>
    );
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} isFavorite={isFavorites} isOther={isOther}/>
      ))}
    </div>
  );
}

export default OffersList;

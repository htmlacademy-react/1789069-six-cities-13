import { Offers, Layout } from '../../types';
import { PlaceCard } from '../place-card';

type OffersListProps = {
  offers: Offers;
  layout: Layout;
}

function OffersList({offers, layout}: OffersListProps): JSX.Element {
  let className = '';

  switch(layout) {
    case 'favorites':
      className = 'favorites__places';
      break;
    case 'other':
      className = 'near-places__list places__list';
      break;
    case 'main':
      className = 'cities__places-list places__list tabs__content';
      break;
  }

  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} layout={layout}/>
      ))}
    </div>
  );
}

export default OffersList;

import { Offer, Layout } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../settings';

type PlaceCardProps = {
  offer: Offer;
  layout: Layout;
}

function PlaceCard({offer, layout}: PlaceCardProps): JSX.Element {
  const bookmarkClass = 'place-card__bookmark-button';
  const isFavoriteLayout = layout === 'favorites';
  const cardClass = isFavoriteLayout ? 'favorites__card' : 'cities__card';
  const imageWrapperClass = isFavoriteLayout ? 'favorites__image-wrapper' : 'cities__image-wrapper';
  const cardInfoClass = isFavoriteLayout ? 'favorites__card-info' : '';
  const cardImageWidth = isFavoriteLayout ? 150 : 260;
  const cardImageHeight = isFavoriteLayout ? 110 : 200;

  return (
    <article className={`${cardClass} place-card`}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`} >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardImageWidth}
            height={cardImageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">{' '}/&nbsp;night</span>
          </div>
          <button
            className={`button ${bookmarkClass} ${offer.isFavorite ? bookmarkClass.concat('--active') : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`${AppRoute.Offer}/${offer.id}`} >
          <h2 className="place-card__name">
            {offer.title}
          </h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

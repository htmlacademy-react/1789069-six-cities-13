import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../settings';
import { Layout } from '../../types/layout';

type PlaceCardProps = {
  offer: Offer;
  layout: Layout;
}

function PlaceCard({offer, layout}: PlaceCardProps): JSX.Element {
  const bookmarkClass = 'place-card__bookmark-button';

  switch (layout) {
    case 'favorites':
      return (
        <article className="favorites__card place-card">
          {offer.isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`${AppRoute.Offer}/${offer.id}`} >
              <img
                className="place-card__image"
                src={offer.previewImage}
                width={150}
                height={110}
                alt="Place image"
              />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{offer.price}</b>
                <span className="place-card__price-text">/&nbsp;night</span>
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
    case 'other':
      return (
        <article className="near-places__card place-card">
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to={`${AppRoute.Offer}/${offer.id}`} >
              <img
                className="place-card__image"
                src={offer.previewImage}
                width={260}
                height={200}
                alt="Place image"
              />
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{offer.price}</b>
                <span className="place-card__price-text">/&nbsp;night</span>
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
    case 'main':
      return (
        <article className="cities__card place-card">
          {offer.isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={`${AppRoute.Offer}/${offer.id}`} >
              <img className="place-card__image" src={`${offer.previewImage}`} width={260} height={200} alt="Place image" />
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className={`button ${bookmarkClass} ${offer.isFavorite ? bookmarkClass.concat('--active') : ''}`} type="button" >
                <svg className="place-card__bookmark-icon" width={18} height={19}>
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: `${offer.rating * 20}%` }}></span>
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
}

export default PlaceCard;

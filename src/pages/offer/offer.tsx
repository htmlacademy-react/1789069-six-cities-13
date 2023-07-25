import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { Helmet } from 'react-helmet-async';
import { CommentForm } from '../../components/comment-form';
import { Offers } from '../../types';
import { OffersList } from '../../components/offers-list';
import { AppRoute } from '../../settings';

type OfferPageProps = {
  offers: Offers;
};

function OfferPage({offers}: OfferPageProps): JSX.Element {
  const params = useParams();
  const offerId = params.id;

  const currentOffer = offers.find((offer) => offer.id === offerId);
  const favoritesCount = offers.filter((offer) => offer.isFavorite).length;

  const bookmarkClass = 'offer__bookmark-button';

  if (typeof currentOffer !== 'undefined') {
    return (
      <div className="page">
        <Helmet>
          <title>6 cities. {currentOffer.title}</title>
        </Helmet>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <li className="header__nav-item user">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </li>
                  </Link>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              {(currentOffer.images.length > 0) && (
                <div className="offer__gallery">
                  {currentOffer.images.map((image) => (
                    <div key={image} className="offer__image-wrapper">
                      <img className="offer__image" src={image} alt="Photo studio" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {currentOffer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {currentOffer.title}
                  </h1>
                  <button className={`button ${bookmarkClass} ${currentOffer.isFavorite ? bookmarkClass.concat('--active') : ''}`} type="button">
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${currentOffer.rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{currentOffer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {currentOffer.goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">
                      Angelina
                    </span>
                    <span className="offer__user-status">
                      Pro
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="offer__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    <li className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">
                          Max
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{ width: '80%' }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                      </div>
                    </li>
                  </ul>
                  <CommentForm />
                </section>
              </div>
            </div>
            <section className="offer__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList offers={offers.filter((offer) => offer.id !== currentOffer.id && offer.city.name === currentOffer.city.name)} layout={'other'} />
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <Navigate to='*' />
  );
}

export default OfferPage;

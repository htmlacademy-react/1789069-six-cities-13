import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { Helmet } from 'react-helmet-async';
import { Offers, Offer } from '../../types/offer';
import { OffersList } from '../../components/offers-list';

type FavoritesProps = {
  offers: Offers;
}

function FavoritesPage({offers}: FavoritesProps): JSX.Element {
  const favoritesCount = offers.filter((offer) => offer.isFavorite).length;
  const offerCity: {
    [propertyName: string]: Offer[];
  } = {};

  offers.forEach((offer) => {
    if (offer.city.name in offerCity) {
      offerCity[offer.city.name].push(offer);
    } else {
      offerCity[offer.city.name] = [offer];
    }
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to='/favorites'>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>
                </li>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <Helmet>
              <title>6 cities. Favorites</title>
            </Helmet>
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(offerCity).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  {offers.length ? (
                    <div className="favorites__places">
                      <OffersList offers={offers.filter((offer) => offer.isFavorite && offer.city.name === city) } isFavorites isOther={false}/>
                    </div>
                  ) : ''}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;

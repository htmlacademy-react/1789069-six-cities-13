import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types';
import { OffersList } from '../../components/offers-list';
import { AppRoute } from '../../settings';

type FavoritesProps = {
  favoriteOffers: Offers;
}

function FavoritesPage({favoriteOffers: offers}: FavoritesProps): JSX.Element {
  const cities = [...new Set(offers.map((offer) => (offer.city.name)))];
  const hasOffers = offers && offers.length > 0;

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
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <li className="header__nav-item user">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.length}</span>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <Helmet>
              <title>6 cities. Favorites</title>
            </Helmet>
            {!hasOffers && (
              <h1>Нет ни одного избранного предложения</h1>
            )}
            {hasOffers && (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cities.map((city) => (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OffersList offers={offers.filter((offer) => offer.city.name === city) } layout={'favorites'}/>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
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

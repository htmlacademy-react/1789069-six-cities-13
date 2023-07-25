import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../settings';
import { MainPage } from '../../pages/main';
import { LoginPage } from '../../pages/login';
import { FavoritesPage } from '../../pages/favorites';
import { OfferPage } from '../../pages/offer';
import { Page404 } from '../../pages/404';
import { PrivateRoute } from '../private-route';
import { Offers } from '../../types/offer';
import { ScrollTop } from '../scroll-top';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage favoriteOffers={offers.filter((offer) => offer.isFavorite)}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage offers={offers}/>}
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

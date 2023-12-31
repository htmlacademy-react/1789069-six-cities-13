import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo';

function Page404(): React.JSX.Element {
  return (
    <div className="page page--gray page--404">
      <Helmet>
        <title>6 cities: 404</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--404">
        <div className="page__not-found not-found container">
          <b className="not-found__heading">404 Not Found</b>
          <Link className="not-found__button button button--primary" to="/">Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default Page404;

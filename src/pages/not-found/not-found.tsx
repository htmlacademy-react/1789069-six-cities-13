import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default NotFoundPage;

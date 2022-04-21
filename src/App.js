import ReactDOM from 'react-dom';
import { useState, StrictMode, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import ThemeContext from './ThemeContext';

// lazy loading
const SearchParams = lazy(() => import('./SearchParams'));
const Details = lazy(() => import('./Details'));

const App = () => {
  const theme = useState('gray');
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="
        p-0 
        m-0  
        bg-gradient-to-b
        from-purple-400
        via-pink-500
        to-red-500"
        style={{
          background: 'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg',
        }}
      >
        <Router>
          <header
            className="
          w-full
          mb-10
          text-center
          p-7
          bg-gradient-to-b
          from-purple-400
          via-pink-500
          to-red-500"
          >
            <Link to="/" className="text-6xl text-white hover:text-gray-200">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<h2>Loading, be patient you weirdo :)</h2>}>
      <App />{' '}
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);

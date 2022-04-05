import ReactDOM from 'react-dom';
import Details from './Details';
import SearchParams from './SearchParams';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import { useState } from 'react/cjs/react.production.min';
import { StrictMode } from 'react/cjs/react.development';

const App = () => {
  const theme = useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
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
    <App />{' '}
  </StrictMode>,
  document.getElementById('root')
);

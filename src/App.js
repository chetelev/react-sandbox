import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { StrictMode } from 'react/cjs/react.development';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />{' '}
  </StrictMode>,
  document.getElementById('root')
);

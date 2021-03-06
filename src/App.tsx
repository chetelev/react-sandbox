import Details from './Details';
import SearchParams from './SearchParams';
import { Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// lazy loading
// const SearchParams = lazy(() => import('./SearchParams'));
// const Details = lazy(() => import('./Details'));

const App = () => {
  return (
    <Provider store={store}>
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
        {/* <Suspense
          fallback={<h2>Loading, be patient you weirdo :)</h2>}
        ></Suspense> */}
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
};

export default App;

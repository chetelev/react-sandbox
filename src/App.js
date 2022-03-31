import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Pipo" animal="dog" breed="Mixed Puddle"></Pet>
      <Pet name="Max" animal="dog" breed="American Staffordshire"></Pet>
      <Pet name="Marli" animal="dog" breed="Golden Retriever"></Pet>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

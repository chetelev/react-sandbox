import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { className: 'my-class' }, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Pipo',
      animal: 'Dog',
      breed: 'Mixed Puddle',
    }),
    React.createElement(Pet, {
      name: 'Max',
      animal: 'Dog',
      breed: 'American Staffordshire',
    }),
    React.createElement(Pet, {
      name: 'Max',
      animal: 'Dog',
      breed: 'French bulldog',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));

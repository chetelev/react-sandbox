import { Animal } from './models/APIResponsesTypes';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet: FunctionComponent<IProps> = ({
  animal,
  breed,
  id,
  images,
  location,
  name,
}) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block ">
      <div className="w-11/12">
        {' '}
        <img src={hero} alt={name}></img>
      </div>
      <div
        className="
        absolute bottom-0 
        left-0 
        bg-gradient-to-tr 
        from-white 
        to-transparent
        pr-2 pt-2"
      >
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

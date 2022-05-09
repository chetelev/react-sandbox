import Results from './Results';
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';
import { Animal, Pet, PetAPIResponse } from './models/APIResponsesTypes';
import {
  FunctionComponent,
  useContext,
  useEffect,
  useState
  } from 'react';

const ANIMALS: Animal[] = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams: FunctionComponent = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('' as Animal);
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    void requestPets();
  }, []); // eslint-disable-line

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;
    setPets(json.pets);
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
            className="w-60 mb-5 block"
          />
        </label>
        <label htmlFor="animal">
          {' '}
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value as Animal)}
            onBlur={(e) => setAnimal(e.target.value as Animal)}
            className="w-60 mb-5 block"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {' '}
                {animal}{' '}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          {' '}
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            className="w-60 mb-5 block disabled:opacity-30"
            disabled={!breeds.length}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed.breed} key={breed.id}>
                {' '}
                {breed.breed}{' '}
              </option>
            ))}
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-80 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

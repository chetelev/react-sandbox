import { useState, useEffect } from 'react';
import { Animal, BreedListAPIResponse } from './models/APIResponsesTypes';

const localCache: { [index: string]: string[] } = {};

type Status = 'unloaded' | 'Loading' | 'Loaded';

export default function useBreedList(animal: Animal) {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState('unloaded' as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('Loading');

      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}`
      );

      const json = (await res.json()) as BreedListAPIResponse;
      localCache[animal] = json.pets || [];
      setBreedList(localCache[animal]);
      setStatus('Loaded');
    }
  }, [animal]);

  return [breedList, status] as [string[], Status];
}

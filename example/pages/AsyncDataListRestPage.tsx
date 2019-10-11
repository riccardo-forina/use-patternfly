import * as React from 'react';
import { useFetch } from 'react-async';
import { useHistory, useLocation } from 'react-router-dom';
import { useA11yRouteChange, useDocumentTitle } from 'use-patternfly';
import { AsyncDataListRestHeader, IStarWarsPerson, StarWarsPeople } from '../components';

export interface IStarWarsRestPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface IStarWarsPeopleResponse {
  count: number;
  next: string;
  previous?: string;
  results: IStarWarsRestPerson[];
}

export default function AsyncDataListRestPage() {
  useDocumentTitle('Async Data List (REST)');
  useA11yRouteChange();
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page') || '', 10) || 1;

  const handlePageChange = React.useCallback(
    (newPage: number) => {
      searchParams.set('page', newPage.toString());
      history.push({
        search: searchParams.toString(),
      });
    },
    [searchParams, history]
  );

  const { data, isPending } = useFetch<IStarWarsPeopleResponse>(
    `https://swapi.co/api/people/?page=${page}`,
    { headers: { Accept: 'application/json' } }
  );

  const { results = [], count: total = 0 } = data || {};

  const people = results.map(person => ({
    name: person.name,
    mass: person.mass,
    gender: person.gender,
    films: person.films.length,
    vehicles: person.vehicles.length,
    starships: person.starships.length,
    updatedAt: person.edited,
  }));

  return (
    <>
      <AsyncDataListRestHeader />
      <StarWarsPeople
        page={page}
        perPage={people.length || 10}
        people={people}
        total={total}
        onPageChange={handlePageChange}
        onPerPageChange={() => alert('Sorry, SWApi doesn\'t support this')}
        loading={isPending}
      />
    </>
  );
}

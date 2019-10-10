import * as React from 'react';
import { useFetch } from 'react-async';
import { useHistory, useLocation } from 'react-router-dom';
import { useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';
import { IStarWarsPerson, StarWarsPeople } from '../components';

interface IStarWarsPeopleResponse {
  count: number;
  next: string;
  previous?: string;
  results: IStarWarsPerson[]
}

export default function AsyncDataList() {
  useDocumentTitle('Async Data List');
  const a11yContainerProps = useA11yRouteContainer();
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page') || '', 10) || 1;
  const { data, isPending } = useFetch<IStarWarsPeopleResponse>(
    `https://swapi.co/api/people/?page=${page}`,
    { headers: { Accept: 'application/json' } }
  );
  const handlePageChange = React.useCallback((newPage: number) => {
    searchParams.set('page', newPage.toString());
    history.push({
      search: searchParams.toString()
    })
  }, [searchParams, history]);
  return (
    <StarWarsPeople
      page={page}
      perPage={data ? data.results.length : 10}
      people={data ? data.results : []}
      total={data ? data.count : 0}
      onPageChange={handlePageChange}
      loading={isPending}
      {...a11yContainerProps}
    />
  );
}

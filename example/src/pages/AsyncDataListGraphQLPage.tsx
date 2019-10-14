import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { useA11yRouteChange, useDocumentTitle } from 'use-patternfly';
import {
  AsyncDataListGraphQLHeader,
  IStarWarsPerson,
  StarWarsPeople,
} from '../components';

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
});

const SW_PEOPLE = gql`
  query People($first: Int, $skip: Int) {
    allPersons(first: $first, skip: $skip) {
      name
      gender
      mass
      _filmsMeta {
        count
      }
      _vehiclesMeta {
        count
      }
      _starshipsMeta {
        count
      }
      updatedAt
    }
    _allPersonsMeta {
      count
    }
  }
`;

interface IPeopleData {
  allPersons: Array<{
    name: string;
    gender: string;
    mass: string;
    _filmsMeta: {
      count: number;
    };
    _vehiclesMeta: {
      count: number;
    };
    _starshipsMeta: {
      count: number;
    };
    updatedAt: string;
  }>;
  _allPersonsMeta: {
    count: number;
  };
}

interface IPeopleVars {
  first: number;
  skip: number;
}

interface IStarWarsPeopleResponse {
  count: number;
  next: string;
  previous?: string;
  results: IStarWarsPerson[];
}

function AsyncDataListGraphQL() {
  useDocumentTitle('Async Data List (GraphQL)');
  useA11yRouteChange();
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page') || '', 10) || 0;
  const perPage = parseInt(searchParams.get('perPage') || '', 10) || 10;

  const { loading, data } = useQuery<IPeopleData, IPeopleVars>(SW_PEOPLE, {
    variables: {
      first: perPage,
      skip: page * perPage,
    },
  });

  const setSearchParam = React.useCallback(
    (name: string, value: string) => {
      searchParams.set(name, value.toString());
    },
    [searchParams]
  );

  const handlePageChange = React.useCallback(
    (newPage: number) => {
      setSearchParam('page', (newPage - 1).toString());
      history.push({
        search: searchParams.toString(),
      });
    },
    [setSearchParam, history, searchParams]
  );

  const handlePerPageChange = React.useCallback(
    (newPerPage: number) => {
      setSearchParam('page', '0');
      setSearchParam('perPage', newPerPage.toString());
      history.push({
        search: searchParams.toString(),
      });
    },
    [setSearchParam, history, searchParams]
  );

  const {
    allPersons = [],
    _allPersonsMeta: { count: total },
  } = data || { _allPersonsMeta: { count: 0 } };
  const people = allPersons.map(person => ({
    name: person.name,
    mass: person.mass,
    gender: person.gender,
    films: person._filmsMeta.count,
    vehicles: person._vehiclesMeta.count,
    starships: person._starshipsMeta.count,
    updatedAt: person.updatedAt,
  }));

  return (
    <>
      <AsyncDataListGraphQLHeader />
      <StarWarsPeople
        page={page + 1}
        perPage={perPage}
        people={people}
        total={total}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
        loading={loading}
      />
    </>
  );
}

export default function AsyncDataListGraphQLPage() {
  return (
    <ApolloProvider client={client}>
      <AsyncDataListGraphQL />
    </ApolloProvider>
  );
}

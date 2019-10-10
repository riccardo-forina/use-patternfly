import * as React from 'react';
import {
  DataList,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  PageSection, Pagination, Text,
  TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants,
  Title,
} from '@patternfly/react-core';
import { InfoIcon } from '@patternfly/react-icons';
import { Loading } from 'use-patternfly';
import { ExampleLink } from './ExampleLink';

export interface IStarWarsPerson {
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

export interface IStarWarsPeopleProps {
  people: IStarWarsPerson[];
  perPage: number;
  page: number;
  total: number;
  loading: boolean;
  onPageChange: (page: number) => void
}

export const StarWarsPeople: React.FunctionComponent<IStarWarsPeopleProps> = ({
  people,
  page,
  perPage,
  total,
  loading,
  onPageChange,
  ...props
}) => {
  const onPerPageSelect = () => false;
  const paginationProps = {
    itemCount: total,
    page: page,
    perPage: perPage,
    onSetPage: (_, page) => onPageChange(page),
    onPerPageSelect: onPerPageSelect,
    perPageOptions: [{ title: `Sorry, SWApi doesn't support this`, value: perPage }],
  };
  return (
    <>
      <PageSection variant={'light'}>
        <TextContent>
          <Title size={'3xl'} headingLevel={'h1'}>Async Data List</Title>
          <Text>
            A common pattern is to call an API, wait for its results and show
            the data in a data list. In this example we use the
            <a href={'https://swapi.co'}>SWApi</a> as a sample backend service
            to show the list of characters in the Star Wars universe.
          </Text>
          <Text><ExampleLink filename={'StarWarsPeople.tsx'}>Source for this example</ExampleLink>.</Text>
        </TextContent>
      </PageSection>
      <PageSection {...props}>
        <Pagination
          {...paginationProps}
          variant={'top'}
        />
        <DataList aria-label="List of Star Wars people">
          {loading ? <Loading /> : people.map(person => {
            const itemId = `sw-person-${person.name}`;
            return (
              <DataListItem aria-labelledby={itemId} key={itemId}>
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isIcon key="icon">
                        <InfoIcon />
                      </DataListCell>,
                      <DataListCell key="name">
                        <TextContent>
                          <Title size={'lg'} headingLevel={'h2'}>{person.name}</Title>
                          <Text>Gender: {person.gender} Mass: {person.mass}</Text>
                        </TextContent>
                      </DataListCell>,
                      <DataListCell key="films">
                        <TextContent>
                          <TextList component={TextListVariants.dl}>
                            <TextListItem component={TextListItemVariants.dt}>Films</TextListItem>
                            <TextListItem component={TextListItemVariants.dd}>
                              {person.films.length}
                            </TextListItem>
                          </TextList>
                        </TextContent>
                      </DataListCell>,
                      <DataListCell key="vehicles">
                        <TextContent>
                          <TextList component={TextListVariants.dl}>
                            <TextListItem component={TextListItemVariants.dt}>Vehicles</TextListItem>
                            <TextListItem component={TextListItemVariants.dd}>
                              {person.vehicles.length}
                            </TextListItem>
                          </TextList>
                        </TextContent>
                      </DataListCell>,
                      <DataListCell key="starships">
                        <TextContent>
                          <TextList component={TextListVariants.dl}>
                            <TextListItem component={TextListItemVariants.dt}>Starships</TextListItem>
                            <TextListItem component={TextListItemVariants.dd}>
                              {person.starships.length}
                            </TextListItem>
                          </TextList>
                        </TextContent>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            );
          })}
        </DataList>
        <Pagination
          {...paginationProps}
          variant={'bottom'}
        />
      </PageSection>
    </>
  );
}

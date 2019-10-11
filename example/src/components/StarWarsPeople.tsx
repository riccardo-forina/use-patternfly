import React from 'react';
import {
  DataList,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Flex,
  FlexItem,
  PageSection,
  Pagination,
  Text,
  TextContent,
  Title,
  Tooltip,
  TooltipPosition,
} from '@patternfly/react-core';
import {
  InfoIcon,
  VirtualMachineIcon,
  VideoIcon,
  SpaceShuttleIcon,
} from '@patternfly/react-icons';
import { Loading, FormatRelative } from 'use-patternfly';
import '@patternfly/react-styles/css/components/Toolbar/toolbar.css';

export interface IStarWarsPerson {
  name: string;
  mass: string;
  gender: string;
  films: number;
  vehicles: number;
  starships: number;
  updatedAt: string;
}

export interface IStarWarsPeopleProps {
  people: IStarWarsPerson[];
  perPage: number;
  page: number;
  total: number;
  loading: boolean;
  onPageChange: (page: number) => void;
  onPerPageChange: (page: number) => void;
}

export const StarWarsPeople: React.FunctionComponent<IStarWarsPeopleProps> = ({
  people,
  page,
  perPage,
  total,
  loading,
  onPageChange,
  onPerPageChange,
}) => {
  const paginationProps = {
    itemCount: total,
    page: page,
    perPage: perPage,
    onSetPage: (_: any, page: number) => onPageChange(page),
    onPerPageSelect: (_: any, page: number) => onPerPageChange(page),
  };
  return (
    <PageSection>
      <div className="pf-c-toolbar">
        <Pagination {...paginationProps} variant={'top'} />
      </div>
      <DataList aria-label="List of Star Wars people">
        {loading ? (
          <Loading />
        ) : (
          people.map(person => {
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
                          <Title size={'lg'} headingLevel={'h2'}>
                            {person.name}
                          </Title>
                          <Text>
                            Gender: {person.gender} Mass: {person.mass}
                          </Text>
                          <Flex>
                            <FlexItem>
                              <Tooltip
                                position={TooltipPosition.top}
                                content={<>Films</>}
                              >
                                <VideoIcon />
                              </Tooltip>
                              &nbsp;
                              {person.films}
                            </FlexItem>
                            <FlexItem>
                              <Tooltip
                                position={TooltipPosition.top}
                                content={<>Vehicles</>}
                              >
                                <VirtualMachineIcon />
                              </Tooltip>
                              &nbsp;
                              {person.vehicles}
                            </FlexItem>
                            <FlexItem>
                              <Tooltip
                                position={TooltipPosition.top}
                                content={<>Starships</>}
                              >
                                <SpaceShuttleIcon />
                              </Tooltip>
                              &nbsp;
                              {person.starships}
                            </FlexItem>
                            <FlexItem>
                              Updated <FormatRelative date={person.updatedAt} />
                            </FlexItem>
                          </Flex>
                        </TextContent>
                      </DataListCell>,
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            );
          })
        )}
      </DataList>
      <div className="pf-c-toolbar">
        <Pagination {...paginationProps} variant={'bottom'} />
      </div>
    </PageSection>
  );
};

import * as React from 'react';

import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableSortLabel,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import Toolbar from './Toolbar';
import FilterDialog from './FilterDialog';

import { Participant, FilterState, FilterData } from './types';
import { reducer, initialState } from './reducer';
import { genParticipant, strToListItem, toCamelCase } from './help';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
  }),
);

const LIST_COLUMNS = [
  {
    key: ['firstName', 'lastName'],
    label: 'Name',
  },
  {
    key: 'mi',
    label: 'MI',
  },
  {
    key: 'email',
    label: 'E-Mail',
  },
  {
    key: 'phoneNumber',
    label: 'Phone',
  },
  {
    key: 'country',
    label: 'Country',
  },
  {
    key: 'city',
    label: 'City',
  },
];

const DEFAULT_FILTER_STATE: FilterState = {
  country: [],
  city: [],
  mi: [],
}

const getFilterData = (list: Participant[]): void => {

  const countrySet = {};
  const citySet = {};
  const miSet = {};

  list.forEach(participant => {

    const { country, city, mi } = participant;
    console.log('country, city, mi: ', country, city, mi);

    const lcCountry = toCamelCase(country);
    const lcCity = toCamelCase(city);
    const lcMi = toCamelCase(mi);
    
    if (!countrySet[lcCountry]) {
      countrySet[lcCountry] = strToListItem(country);
    }
    
    if (!citySet[lcCity]) {
      citySet[lcCity] = strToListItem(city);
    }
    
    if (!miSet[lcMi]) {
      miSet[lcMi] = strToListItem(mi);
    }

  });

  // setTimeout(console.log('country: ', Object.values(countrySet)));
  // setTimeout(console.log('city: ', Object.values(citySet)));
  // console.log('mi: ', miSet);

  // return {
  //   country: Object.values(countrySet),
  //   city: Object.values(citySet),
  //   mi: Object.values(miSet),
  // };
}

function ParticipantsList() {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const classes = useStyles({});

  const pushParticipant = (participant: Participant) => {
    dispatch({ type: 'push', payload: participant});
  }

  const sortParticipantsListBy = (key: string) => {
    dispatch({ type: 'sort', payload: key });
  }

  const setFilterOpen = (payload: boolean) => {
    dispatch({ type: 'open-filter', payload });
  }

  const handlePush = () => pushParticipant(genParticipant());

  const handleSort = key => sortParticipantsListBy(key);
  
  const handleOpenFilter = () => setFilterOpen(true);
  
  const handleFilterConfirm = key => {}
  
  const handleFilterCancel = () => setFilterOpen(false);
  
  const {
    list,
    sortColumn,
    sortDirectionAsc,
  } = state;

  // const filterData = getFilterData(list);
  // console.log('filterData: ', filterData);

  return (
    <>
      <Paper className={classes.root}>
        <Toolbar onOpenFilter={handleOpenFilter} onPush={handlePush} />
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {
                LIST_COLUMNS.map(({ key, label }) => (
                  <TableCell key={`TableCell-${key}`}>
                      <TableSortLabel
                        active={sortColumn === key}
                        direction={sortDirectionAsc ? 'asc' : 'desc'}
                        onClick={() => handleSort(key)}>
                        {label}
                      </TableSortLabel>
                    </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              list.map((p: Participant) => (
                <TableRow hover key={p.id}>
                  <TableCell>{p.firstName} {p.lastName}</TableCell>
                  <TableCell>{p.mi}</TableCell>
                  <TableCell>{p.email}</TableCell>
                  <TableCell>{p.phoneNumber}</TableCell>
                  <TableCell>{p.country}</TableCell>
                  <TableCell>{p.city}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>

      {state.filterOpened && <FilterDialog
        opened={state.filterOpened}
        data={filterData}
        filterState={DEFAULT_FILTER_STATE}
        onConfirm={handleFilterConfirm}
        onCancel={handleFilterCancel} />}
    </>
  );
}

ParticipantsList.displayName = 'ParticipantsList'

ParticipantsList.propTypes = {};

ParticipantsList.defaultProps = {};


export default ParticipantsList;

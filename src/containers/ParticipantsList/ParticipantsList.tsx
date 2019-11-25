import * as React from 'react';
import sty from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

import Toolbar from './Toolbar/Toolbar';
import HeaderCell from './HeaderCell/HeaderCell';

import { Participant } from './types.model';
import { reducer, initialState } from './reducer';
import { genParticipant } from './help';

const StyledPaper = sty(Paper)`
  & {
    margin: 20px;
  }
`;

const LIST_COLUMNS = [
  {
    key: 'fullName',
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

interface RowProps {
  p: Participant;
}

const Row = ({ p }: RowProps) => (
  <TableRow hover={true}>
    <TableCell>{p.firstName} {p.lastName}</TableCell>
    <TableCell>{p.mi}</TableCell>
    <TableCell>{p.email}</TableCell>
    <TableCell>{p.phoneNumber}</TableCell>
    <TableCell>{p.country}</TableCell>
    <TableCell>{p.city}</TableCell>
  </TableRow>
);

const ParticipantsList = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const pushParticipant = (participant: Participant) => {
    dispatch({ type: 'push', payload: participant });
  };

  const sortParticipantsListBy = (key: string | string[]) => {
    dispatch({ type: 'sort', payload: key });
  };

  const handlePush = () => pushParticipant(genParticipant());

  const handleSort = (key: string | string[]) => sortParticipantsListBy(key);

  const {
    list,
    sortColumn,
    sortDirectionAsc,
  } = state;

  return (
    <StyledPaper>
      <Toolbar onPush={handlePush} />
      <Table stickyHeader={true}>
        <TableHead>
          <TableRow>
            {
              // tslint:disable-next-line: jsx-no-multiline-js
              LIST_COLUMNS.map(({ key, label }) => (
                <HeaderCell
                  key={`TableHeaderCell-${key}`}
                  cellKey={key}
                  label={label}
                  isActive={sortColumn === key}
                  direction={sortDirectionAsc ? 'asc' : 'desc'}
                  onSort={handleSort}
                />
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((p: Participant) => <Row key={p.id} p={p} />)}
        </TableBody>
      </Table>
    </StyledPaper>
  );
};

export default ParticipantsList;

import * as React from 'react';
import sty from 'styled-components';

import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';

import FilterListIcon from '@material-ui/icons/FilterList';

const StyledHeaderCell = sty(TableCell)`
  & {
    .filter-button {
      position: absolute;
      top: 14px;
      right: 7px;
    }
  }
`;

interface HeaderCellProps {
  cellKey: string;
  label: string;
  direction: 'asc' | 'desc';
  isActive: boolean;
  onSort: (key: string) => void;
}

function HeaderCell({
  cellKey,
  label,
  direction,
  isActive,
  onSort,
}: HeaderCellProps) {

  const [hover, setHover] = React.useState(false);

  const handleSort = () => onSort(cellKey);

  const handleMouseEnter = () => setHover(true);

  const handleMouseLeave = () => setHover(false);

  return (
    <StyledHeaderCell
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TableSortLabel
        active={isActive}
        direction={direction}
        onClick={handleSort}
      >
        {label}
      </TableSortLabel>
      <Fade in={hover}>
        <IconButton size="small" className="filter-button">
          <FilterListIcon fontSize="inherit" />
        </IconButton>
      </Fade>
    </StyledHeaderCell>
  );
}

export default HeaderCell;

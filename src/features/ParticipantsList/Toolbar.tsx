import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import AddBoxIcon from '@material-ui/icons/AddBox';
import FilterListIcon from '@material-ui/icons/FilterList';

function CustomToolbar({ onPush, onOpenFilter }) {

  const handlePush = () => onPush();

  const handleOpenFilter = () => onOpenFilter();

  return (
    <Toolbar>
      
      <IconButton onClick={handlePush}>
        <AddBoxIcon />
      </IconButton>
      
      <IconButton onClick={handleOpenFilter}>
        <FilterListIcon />
      </IconButton>

    </Toolbar>
  )
}


export default CustomToolbar;
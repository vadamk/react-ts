import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import AddBoxIcon from '@material-ui/icons/AddBox';

interface CustomToolbarProps {
  onPush: () => void;
}

function CustomToolbar({ onPush }: CustomToolbarProps) {

  const handlePush = () => onPush();

  return (
    <Toolbar variant="dense">

      <IconButton onClick={handlePush}>
        <AddBoxIcon />
      </IconButton>

    </Toolbar>
  );
}

export default CustomToolbar;

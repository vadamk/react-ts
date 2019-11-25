import * as React from 'react';
import sty from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { logout } from 'store/actions/loginActions';

const StyledToolbar = sty(Toolbar)`
  & {
    .right-section {
      margin-left: auto;
    }
  }
`;

const StyledLink = sty(Link)`
  & {
    color: #fff;
    text-decoration: none;
  }
`;

function Navigation() {

  const dispatch = useDispatch();

  const handleLogoutClick = () => dispatch(logout());

  return (
    <AppBar position="static">
      <StyledToolbar variant="dense">
        <StyledLink to="/participants">Participants</StyledLink>
        <div className="right-section">
          <Button color="inherit" onClick={handleLogoutClick}>Logout</Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navigation;

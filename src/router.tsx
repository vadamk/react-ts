import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PurePage, PortalPage } from 'HOCs';

import { RootState } from 'store/reducers';

import ParticipantsList from 'containers/ParticipantsList';
import SignUp from 'containers/SignUp';
import SignIn from 'containers/SignIn';

const AuthContext = React.createContext(false);

const AppRouter = () => {

  const loginState = useSelector((state: RootState) => state.login);

  return (
    <AuthContext.Provider value={!!loginState.token}>
      <Router>
        <Redirect from="/" to="/participants" />
        <PrivateRoute path="/participants" component={PortalPage(ParticipantsList)} />
        <PublicRoute path="/login" component={PurePage(SignIn)} />
        <PublicRoute path="/registration" component={PurePage(SignUp)} />
      </Router>
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ component: Component, ...rest }: any) => {

  const isAuth = React.useContext(AuthContext);

  const PrivateTarget = (props: RouteComponentProps) => {
    return isAuth
      ? <Component {...props} />
      : <Redirect to="/login" />;
  };

  return <Route {...rest} render={PrivateTarget} />;
};

const PublicRoute = ({ component: Component, ...rest }: any) => {

  const isAuth = React.useContext(AuthContext);

  const PublicTarget = (props: RouteComponentProps) => {
    return isAuth
      ? <Redirect to="/participants" />
      : <Component {...props} />;
  };

  return <Route {...rest} render={PublicTarget} />;
};

export default AppRouter;

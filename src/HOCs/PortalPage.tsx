import * as React from 'react';
import sty from 'styled-components';

import Navigation from 'containers/Navigation';

const StyledWrap = sty.div`
	background-color: #f9f9f9;
	position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

const PortalPage = (Component: React.ComponentType) => () => (
  <StyledWrap>
    <Navigation />
    <Component />
  </StyledWrap>
);

export default PortalPage;

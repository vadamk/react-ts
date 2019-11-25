import * as React from 'react';
import sty from 'styled-components';

const StyledWrap = sty.div`
	background-color: #f9f9f9;
	position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

const PurePage = (Component: React.ComponentType) => () => (
  <StyledWrap>
    <Component />
  </StyledWrap>
);

export default PurePage;
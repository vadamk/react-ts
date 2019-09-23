import * as React from 'react';
import styled from 'styled-components';

// import ParticipantsList from '~/features/ParticipantsList';

const StyledContainer = styled.div`
  width: 100%;
`;

const App = () => {

  Object.keys({ a: 1, b: 2 });
  Object.keys({ c: 1, d: 2 });

  return (
    <StyledContainer>
      <h1>Hello</h1>
      {/* <ParticipantsList /> */}
    </StyledContainer>
  );
}

export default App;

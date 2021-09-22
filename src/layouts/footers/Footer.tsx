import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { lightGray, darkGray } from 'styles/colors';
import { Container, FlexWrapper, H5 } from 'components';

export const Footer: React.FC<RouteComponentProps> = () => {
  return (
    <Wrapper>
      <Container>
        <FlexWrapper justifyContent='center' padding='1rem 0'>
          <H5 color={darkGray} textAlign='center'>
            All rights reserved &copy; Andrius Dulevicius 2021.
          </H5>
        </FlexWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: ${lightGray};
`;

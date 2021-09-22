import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { blue, white } from 'styles/colors';
import { Container, FlexWrapper, H5, Timer } from 'components';

export const BannerDiscount: React.FC<RouteComponentProps> = () => {
  console.log('banner');
  return (
    <Wrapper>
      <Container>
        <FlexWrapper justifyContent='center'>
          <H5 color={white} textAlign='center'>
            50% discount is reserved for <Timer />
          </H5>
        </FlexWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  background-color: ${blue};
`;

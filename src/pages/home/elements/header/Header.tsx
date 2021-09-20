import React from 'react';
import styled from 'styled-components';
import { H1, BoldedSpan, RegularText } from 'components';

export const Header = () => {
  return (
    <MainHeader>
      <RegularText>
        Over <BoldedSpan>52150</BoldedSpan> plans ordered.
      </RegularText>
      <H1 fontWeight={700}>Get access to your yoga program now!</H1>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  text-align: center;
`;

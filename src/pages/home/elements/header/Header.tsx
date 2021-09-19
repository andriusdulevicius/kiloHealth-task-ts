import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../../../components/texts/Headings';

export const Header = () => {
  return (
    <MainHeader>
      <span>
        Over <strong>52150</strong> plans ordered.
      </span>
      <H1 fontWeight={600}>Get access to your yoga program now!</H1>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  padding-top: 0.4rem;
`;

import React from 'react';
import styled from 'styled-components';
import { Svg } from 'components';
import { lightGray } from 'styles/colors';

export const Logo = () => {
  return (
    <LogoContainer>
      <Svg src='logo' />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  padding-top: 1rem;
  text-align: center;
  border-bottom: 1px solid ${lightGray};
`;

import React from 'react';
import styled from 'styled-components';
import { icons } from 'utils/icons';
import { Icon } from 'components';
import { lightGray } from 'styles/colors';

export const Logo = () => {
  return (
    <LogoContainer>
      <Icon background={icons.logo}></Icon>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  padding-top: 0.8rem;
  height: 2.5rem;
  font-size: 1rem;
  border-bottom: 1px solid ${lightGray};
  & span {
    width: 5rem;
    margin: 0 auto;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { icons } from 'utils/icons';
import { Icon } from '../../components/icons/Icon';
import { lightGray } from '../../styles/colors';

export const Logo = () => {
  return (
    <LogoContainer>
      <Icon background={icons.logo}></Icon>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  height: 2.5rem;
  padding-top: 0.8rem;
  font-size: 1rem;
  border-bottom: 1px solid ${lightGray};
  & span {
    width: 5rem;
    margin: 0 auto;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/wrappers/FlexWrapper';
import { Icon } from '../../../../../components/icons/Icon';
import { icons } from 'utils/icons';
import { darkGray } from 'styles/colors';

interface Perk {
  perk: { icon: string; title: string; subtitle: string };
}

export const PerkItem = ({ perk }: Perk) => {
  return (
    <StyledPerkItem>
      <FlexWrapper justifyContent='start' flexWrap='no-wrap'>
        <Icon width='4.2rem' height='4rem' margin={'0 1.3rem 0 0'} background={icons[perk.icon]}></Icon>
        <div>
          <h4>{perk.title}</h4>
          <span>{perk.subtitle}</span>
        </div>
      </FlexWrapper>
    </StyledPerkItem>
  );
};

const StyledPerkItem = styled.li`
  margin-bottom: 0.5rem;

  & div:last-child {
    width: 100%;
  }

  & h4 {
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }

  & span {
    font-size: 0.8rem;
    color: ${darkGray};
  }
`;

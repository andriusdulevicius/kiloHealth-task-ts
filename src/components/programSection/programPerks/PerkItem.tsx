import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../wrappers/Wrapper';
import { Icon } from '../../icons/Icon';
import { icons } from 'utils/icons';
import { darkGray } from 'styles/colors';

interface Perk {
  perk: { icon: string; title: string; subtitle: string };
}

export const PerkItem = ({ perk }: Perk) => {
  return (
    <StyledPerkItem>
      <FlexWrapper justifyContent='start'>
        <Icon width='3rem' height='3rem' background={icons[perk.icon]}></Icon>
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

  & h4 {
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }

  & span {
    font-size: 0.8rem;
    color: ${darkGray};
  }
`;

import React from 'react';
import styled from 'styled-components';
import { icons } from 'utils/icons';
import { TextBase, TextBaseBold, Icon, FlexWrapper } from 'components';
import { darkGray } from 'styles/colors';

interface Perk {
  perk: { icon: string; title: string; subtitle: string };
}

export const PerkItem = ({ perk }: Perk) => {
  return (
    <StyledPerkItem>
      <FlexWrapper justifyContent='start' flexWrap='no-wrap' gap='1rem' padding='0'>
        <Icon width='4rem' height='4rem' background={icons[perk.icon]}></Icon>
        <PerkInfoContainer>
          <TextBaseBold margin='0' fontSize='1rem'>
            {perk.title}
          </TextBaseBold>
          <TextBase margin='0' color={darkGray} fontSize='0.9rem'>
            {perk.subtitle}
          </TextBase>
        </PerkInfoContainer>
      </FlexWrapper>
    </StyledPerkItem>
  );
};

const StyledPerkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const PerkInfoContainer = styled.div`
  max-width: 70%;
`;

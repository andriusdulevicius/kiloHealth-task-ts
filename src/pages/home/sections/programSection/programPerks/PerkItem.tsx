import React from 'react';
import styled from 'styled-components';
import { TextBase, TextBaseBold, Svg, FlexWrapper } from 'components';
import { darkGray } from 'styles/colors';
import { icons } from 'utils/icons';

interface Perk {
  perk: { icon: keyof typeof icons; title: string; subtitle: string };
}

export const PerkItem: React.FC<Perk> = ({ perk: { title, subtitle, icon } }) => {
  return (
    <StyledPerkItem>
      <FlexWrapper justifyContent='start' flexWrap='no-wrap' gap='1rem' padding='0'>
        <Svg src={icon} width='3rem' />
        <PerkInfoContainer>
          <TextBaseBold margin='0' fontSize='1rem'>
            {title}
          </TextBaseBold>
          <TextBase margin='0' color={darkGray} fontSize='0.9rem'>
            {subtitle}
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

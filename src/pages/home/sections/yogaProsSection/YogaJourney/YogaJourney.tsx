import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { H3, Image } from 'components';

export const YogaJourney: React.FC = () => {
  const { isLaptop } = useQuery();
  return (
    <StyledYogaJourney isLaptop={isLaptop}>
      <H3 fontWeight={700}>Start your yoga journey now!</H3>
      <Image src='phone' />
    </StyledYogaJourney>
  );
};

const StyledYogaJourney = styled.div<{ isLaptop: boolean }>`
  width: ${({ isLaptop }) => (!isLaptop ? '50%' : '100%')};
`;

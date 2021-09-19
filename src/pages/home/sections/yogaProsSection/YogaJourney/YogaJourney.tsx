import React from 'react';
import styled from 'styled-components';
import { H2, Image } from 'components';
import { useQuery } from 'styles/breakpoints';

export const YogaJourney: React.FC = () => {
  const { isLaptop } = useQuery();
  return (
    <StyledYogaJourney isLaptop={isLaptop}>
      <H2 fontWeight={600}>Start your yoga journey now!</H2>
      <Image src='phone' />
    </StyledYogaJourney>
  );
};

const StyledYogaJourney = styled.div<{ isLaptop: boolean }>`
  width: ${({ isLaptop }) => (!isLaptop ? '50%' : '100%')};
`;

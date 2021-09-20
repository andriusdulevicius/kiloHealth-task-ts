import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { PlanSelection } from './planSelection/PlanSelection';
import { ProgramPerksList } from './programPerks/ProgramPerkList';

export const ProgramSection: React.FC = () => {
  const { isLaptop } = useQuery();

  return (
    <ProgramSec isLaptop={isLaptop}>
      <PlanSelection />
      <ProgramPerksList />
    </ProgramSec>
  );
};

const ProgramSec = styled.div<{ isLaptop: boolean }>`
  display: ${({ isLaptop }) => (!isLaptop ? 'flex' : 'block')};
  gap: 2rem;
  margin: 0 auto;
  max-width: 50rem;
`;

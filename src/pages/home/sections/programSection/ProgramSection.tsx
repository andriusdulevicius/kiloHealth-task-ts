import React from 'react';
import styled from 'styled-components';
import { PlanSelection } from './planSelection/PlanSelection';
import { ProgramPerksList } from './programPerks/ProgramPerkList';
import { useQuery } from 'styles/breakpoints';

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
`;

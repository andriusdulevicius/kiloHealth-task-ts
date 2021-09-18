import React from 'react';
import styled from 'styled-components';
import { PlanSelection } from './planSelection/PlanSelection';
import { ProgramPerksList } from './programPerks/ProgramPerkList';
import { useQuery } from 'styles/breakpoints';

export const ProgramSection: React.FC = () => {
  const { isLaptop } = useQuery();
  const ProgramSec = styled.div`
    display: ${!isLaptop ? 'flex' : 'block'};
  `;
  return (
    <ProgramSec>
      <PlanSelection />
      <ProgramPerksList />
    </ProgramSec>
  );
};

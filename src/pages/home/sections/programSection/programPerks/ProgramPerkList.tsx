import React from 'react';
import styled from 'styled-components';
import { PerkItem } from './PerkItem';
import { useQuery } from 'styles/breakpoints';
import { Container, H3 } from 'components';

// sample data
const PERKS = [
  {
    icon: 'plan',
    title: 'A personalized yoga program',
    subtitle: 'Completely safe and focused on your key goals',
  },
  {
    icon: 'exercise',
    title: 'Easy and enjoyable yoga workouts for your level',
    subtitle: 'Program ajusts to your level and pace',
  },
  {
    icon: 'shoe',
    title: 'No special preparation needed',
    subtitle: 'Perfect for begginners! Requires no special preparation or equipment',
  },
  {
    icon: 'diet',
    title: 'Daily motivation and accountability',
    subtitle: 'Track your progress, develop a healthy routine, reach goals faster',
  },
  {
    icon: 'whistle',
    title: 'Browse from various yoga challenges',
    subtitle: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
  },
  {
    icon: 'smartwatch',
    title: 'Easy access on any device',
    subtitle: 'Do your yoga anywhere across all types of devices',
  },
  {
    icon: 'bookcheck',
    title: 'A complete guide to get started',
    subtitle: 'Best tips, guidelines, advice, and recommendations for successful practice',
  },
];

export const ProgramPerksList: React.FC = () => {
  const { isLaptop } = useQuery();
  return (
    <Container maxWidth='25rem' padding='0'>
      <H3 fontWeight={700}>Whats in our program? </H3>
      <StyledList isLaptop={isLaptop}>
        {PERKS.map((perk) => (
          <PerkItem perk={perk} key={perk.title} />
        ))}
      </StyledList>
    </Container>
  );
};

const StyledList = styled.ul<{ isLaptop: boolean }>`
  margin: 0;
  margin-top: ${({ isLaptop }) => (!isLaptop ? '0' : '1rem')};
  padding: 0;
  list-style: none;
`;

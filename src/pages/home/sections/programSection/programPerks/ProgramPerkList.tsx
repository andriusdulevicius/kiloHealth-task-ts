import React from 'react';
import styled from 'styled-components';
import { PerkItem } from './PerkItem';
import { Container, H3 } from 'components';
import { icons } from 'utils/icons';

interface Perk {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
}

// sample data
const PERKS: Perk[] = [
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
  return (
    <Container maxWidth='25rem' padding='0' margin='1rem 0'>
      <H3 fontWeight={700}>Whats in our program? </H3>
      <StyledList>
        {PERKS.map((perk) => (
          <PerkItem perk={perk} key={perk.title} />
        ))}
      </StyledList>
    </Container>
  );
};

const StyledList = styled.ul`
  margin-top: '1rem';
  padding: 0;
  list-style: none;
`;

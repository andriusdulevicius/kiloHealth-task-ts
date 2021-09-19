import React from 'react';
import styled from 'styled-components';
import { H2 } from 'components';
import { useQuery } from 'styles/breakpoints';
import { PerkItem } from './PerkItem';

export const ProgramPerksList: React.FC = () => {
  const { isLaptop } = useQuery();
  // sample data
  const perks = [
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
  return (
    <StyledList isLaptop={isLaptop}>
      <H2 fontWeight={600}>Whats in our program? </H2>
      <ul>
        {perks.map((perk) => (
          <PerkItem perk={perk} key={perk.title} />
        ))}
      </ul>
    </StyledList>
  );
};

const StyledList = styled.div<{ isLaptop: boolean }>`
  min-width: ${({ isLaptop }) => (!isLaptop ? '50%' : '100%')};
  & ul {
    margin: ${({ isLaptop }) => (!isLaptop ? '0 0' : '1rem 0 0 0')};
    padding: 0;
    list-style: none;
  }
`;

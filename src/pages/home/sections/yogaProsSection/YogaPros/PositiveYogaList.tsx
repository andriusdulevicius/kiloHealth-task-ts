import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { FlexWrapper, H3, Svg, H4, TextBase, Container } from 'components';

const YOGA_PROS = [
  'Each program adapts to your age or fitness level',
  'Mindful way to exercise and get real results',
  'Effective and long-term lasting results',
  'Suited activities that benefit both the mind and body',
  'Low-intensity but highly-effective workouts',
  'Extra attention to muscle, joint and back health',
];

export const PositiveYogaList: React.FC = () => {
  const { isLaptop } = useQuery();

  return (
    <Container maxWidth='25rem' padding='0'>
      <H3 fontWeight={700}>Is Positive Yoga right for me?</H3>
      <StyledList>
        {YOGA_PROS.map((oneAdv, index: number) => (
          <StyledListItem key={index} isLaptop={isLaptop}>
            <FlexWrapper justifyContent='left' flexWrap='no-wrap' padding='0rem'>
              <Svg src='check_circle_outline' />
              <TextBase fontSize={!isLaptop ? '1.1rem' : '1rem'} margin='0.5rem'>
                {oneAdv}
              </TextBase>
            </FlexWrapper>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
};

const StyledList = styled.ul`
  margin-top: 1rem;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li<{ isLaptop: boolean }>`
  line-height: ${({ isLaptop }) => (!isLaptop ? '1.5rem' : '1.1rem')};
`;

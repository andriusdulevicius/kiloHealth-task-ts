import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { YogaJourney } from './YogaJourney/YogaJourney';
import { PositiveYogaList } from './YogaPros/PositiveYogaList';
import { Container, FlexWrapper } from 'components';

export const YogaProsSection: React.FC = () => {
  const { isLaptop } = useQuery();
  return (
    <Container maxWidth='50rem' padding='0'>
      <FlexWrapper
        flexDirection={!isLaptop ? 'row-reverse' : 'row'}
        alignItems='start'
        flexWrap={!isLaptop ? 'no-wrap' : 'wrap'}
        gap='2rem'
        padding='0'
      >
        <PositiveYogaList />
        <YogaJourney />
      </FlexWrapper>
    </Container>
  );
};

import React from 'react';
import { YogaJourney } from './YogaJourney/YogaJourney';
import { PositiveYogaList } from './YogaPros/PositiveYogaList';
import { FlexWrapper } from 'components';
import { useQuery } from 'styles/breakpoints';

export const YogaProsSection: React.FC = () => {
  const { isLaptop } = useQuery();
  return (
    <FlexWrapper
      flexDirection={!isLaptop ? 'row-reverse' : 'row'}
      alignItems='start'
      flexWrap={!isLaptop ? 'no-wrap' : 'wrap'}
      gap='2rem'
    >
      <PositiveYogaList />
      <YogaJourney />
    </FlexWrapper>
  );
};

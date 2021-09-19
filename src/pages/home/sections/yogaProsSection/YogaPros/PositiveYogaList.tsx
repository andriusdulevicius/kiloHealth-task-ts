import React from 'react';
import styled from 'styled-components';
import { FlexWrapper, H2, Icon } from 'components';
import { icons } from 'utils/icons';
import { useQuery } from 'styles/breakpoints';

export const PositiveYogaList: React.FC = () => {
  const { isLaptop } = useQuery();
  // sample data
  const yogaPros = [
    'Each program adapts to your age or fitness level',
    'Mindful way to exercise and get real results',
    'Effective and long-term lasting results',
    'Suited activities that benefit both the mind and body',
    'Low-intensity but highly-effective workouts',
    'Extra attention to muscle, joint and back health',
  ];

  return (
    <YogaList isLaptop={isLaptop}>
      <H2 fontWeight={600}>Is Positive Yoga right for me?</H2>
      <ul>
        {yogaPros.map((oneAdv, index) => (
          <li key={index}>
            <FlexWrapper justifyContent='left' flexWrap='no-wrap' padding='0rem'>
              <Icon
                background={icons.check_circle_outline}
                width='1.4rem'
                height='1.4rem'
                padding='0 1.5rem 0 0'
              ></Icon>
              <h5>{oneAdv}</h5>
            </FlexWrapper>
          </li>
        ))}
      </ul>
    </YogaList>
  );
};

const YogaList = styled.div<{ isLaptop: boolean }>`
  width: ${({ isLaptop }) => (!isLaptop ? '50%' : '100%')};
  & ul {
    list-style: none;
    margin-top: 1rem;
    padding: 0;
  }
  & li {
    line-height: ${({ isLaptop }) => (!isLaptop ? '2.3rem' : '2rem')};

    & h5 {
      font-weight: normal;
      font-size: ${({ isLaptop }) => (!isLaptop ? '1.5rem' : '1.3rem')};
      margin: 0.5rem;
    }
  }
`;

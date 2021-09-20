import React from 'react';
import styled from 'styled-components';
import { Ratings } from 'pages/home/elements';
import { useQuery } from 'styles/breakpoints';
import { ContainerSmall, H4, Image, RegularText, TextBase } from 'components';
import { lightGray, darkGray } from 'styles/colors';

interface IProps {
  story: {
    name: string;
    age: number;
    location: string;
    rating: number;
    imgUrl: string;
    story: string;
  };
}

export const StoryCard: React.FC<IProps> = ({ story: { name, age, location, rating, imgUrl, story } }) => {
  const { isLaptop } = useQuery();
  return (
    <ContainerSmall>
      <Card isLaptop={isLaptop}>
        <H4 fontWeight={600} margin='0'>
          {name}, {age}
        </H4>
        <TextBase margin='0 0 1rem 0' color={darkGray}>
          {location}
        </TextBase>
        <Ratings rating={rating} />
        <Image src={imgUrl} />
        <RegularText>{story}</RegularText>
      </Card>
    </ContainerSmall>
  );
};

const Card = styled.div<{ isLaptop: boolean }>`
  margin: 2rem auto;
  padding: 1rem;
  min-height: ${({ isLaptop }) => (!isLaptop ? '44rem' : '')};
  border-radius: 0.8rem;
  box-shadow: 0.35rem 0.35rem 0.35rem 0.35rem ${lightGray};
  text-align: left;

  & img {
    margin: 1rem 0;
    height: 15rem;
    object-fit: cover;
  }
`;

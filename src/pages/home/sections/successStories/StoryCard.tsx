import React from 'react';
import styled from 'styled-components';
import { lightGray } from 'styles/colors';
import { ContainerSmall, H3, Image, RegularText } from 'components';
import { Ratings } from 'pages/home/elements';
import { useQuery } from 'styles/breakpoints';

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

export const StoryCard: React.FC<IProps> = (props) => {
  const { isLaptop } = useQuery();
  const { name, age, location, rating, imgUrl, story } = props.story;
  return (
    <ContainerSmall>
      <Card isLaptop={isLaptop}>
        <H3>
          {name}, {age}
        </H3>
        <h5>{location}</h5>
        <Ratings rating={rating} />
        <Image height='6.25rem' margin='1rem 0 0 0' src={imgUrl} />
        <RegularText>{story}</RegularText>
      </Card>
    </ContainerSmall>
  );
};

const Card = styled.div<{ isLaptop: boolean }>`
  text-align: left;
  padding: 1rem;
  box-shadow: 0.35rem 0.35rem 0.35rem 0.35rem ${lightGray};
  border-radius: 0.8rem;
  margin: 2rem auto;
  min-height: ${({ isLaptop }) => (!isLaptop ? '44rem' : '')};

  & h5 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: normal;
    font-size: 0.7rem;
  }

  & img {
    height: 15rem;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

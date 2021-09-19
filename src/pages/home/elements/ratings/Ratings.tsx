import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import { lightYellow } from 'styles/colors';

interface IProps {
  rating: number;
}

export const Ratings: React.FC<IProps> = ({ rating }) => {
  return (
    <StyledRating>
      {[...Array(rating)].map((val, index) => (
        <i key={index} className='fa fa-star'></i>
      ))}
    </StyledRating>
  );
};

const StyledRating = styled.div`
  color: ${lightYellow};
  & i {
    font-size: 1.2rem;
    margin: 0 0.3rem 0.5rem 0;
  }
`;

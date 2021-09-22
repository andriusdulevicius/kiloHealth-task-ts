import React from 'react';
import { Svg } from 'components';

interface IProps {
  rating: number;
}

export const Ratings: React.FC<IProps> = ({ rating }) => {
  return (
    <>
      {[...Array(rating)].map((val, index: number) => (
        <Svg src='mdi_star' key={index} />
      ))}
    </>
  );
};

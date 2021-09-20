import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { StoryCard } from './StoryCard';
import { Button, H3 } from 'components';

// sample data
const STORIES = [
  {
    id: 1,
    name: 'Emily',
    age: 28,
    location: 'Delaware, NJ',
    rating: 5,
    imgUrl: 'success_emily',
    story:
      'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.',
  },
  {
    id: 2,
    name: 'Kylie',
    age: 40,
    location: 'Los Angeles, CA',
    rating: 5,
    imgUrl: 'success_kylie',
    story:
      'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
  },
  {
    id: 3,
    name: 'Jesica',
    age: 28,
    location: 'San Francisco, CA',
    rating: 5,
    imgUrl: 'success_jessica',
    story:
      'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.',
  },
];

// Carousel setup
const RESPONSIVE = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const SuccessStories: React.FC = () => {
  const { isLaptop } = useQuery();

  return (
    <StyledStories>
      <H3 fontWeight={700}>Hear success stories from our clients</H3>
      <Carousel responsive={RESPONSIVE}>
        {STORIES.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </Carousel>
      <Button width={!isLaptop ? '26rem' : '100%'}>Get my plan</Button>
    </StyledStories>
  );
};

const StyledStories = styled.div`
  text-align: center;

  & h2 {
    text-align: center;
  }
`;

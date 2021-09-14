import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Link } from 'gatsby';

import { useRouter } from 'apis/history';

import { Button, PrimaryButton, Image } from 'components';

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  // Linka naudojam renderyje, useRouteri naudojame funkcijose

  return (
    <SectionWrapper>
      Checkout
      <Image src='car_image' />
      {isMobile && (
        <Link to='/'>
          <Button background='red'> checkout</Button>
        </Link>
      )}
      {isTablet && (
        <PrimaryButton onClick={goToLanding} background='green'>
          checkout
        </PrimaryButton>
      )}
    </SectionWrapper>
  );
};

export default Checkout;

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: blue;
`;

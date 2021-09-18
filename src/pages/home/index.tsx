import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { primary, lightYellow, darkGray, lightGray } from 'styles/colors';
import {
  MainBody,
  Button,
  Image,
  TextBase,
  TextBaseBold,
  H1,
  H2,
  H3,
  RegularText,
  SmallText,
  CaptionText,
  Container,
  ContainerSmall,
  FlexWrapper,
  MainHeader,
} from 'components';
import { Discount, Logo, Header } from 'elements';

const Home = () => {
  const { isMobile, isTablet } = useQuery();

  // Linka naudojam renderyje, useRouteri naudojame funkcijose

  return (
    <MainBody>
      <Discount />
      <Logo />
      <Container>
        <Header />
      </Container>
    </MainBody>
  );
};

export default Home;

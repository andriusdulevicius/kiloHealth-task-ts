import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Link } from 'gatsby';

import { useRouter } from 'apis/history';

import {
  Button,
  PrimaryButton,
  SecondaryButton,
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
} from 'components';
import { white } from 'styles/colors';

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  // Linka naudojam renderyje, useRouteri naudojame funkcijose

  return (
    <SectionWrapper>
      <Container>
        <H1>Checkouts Page</H1>
        <H2 color={white}>
          <CaptionText>On this page you will find a basic use of styled components</CaptionText>
        </H2>
        <ContainerSmall>
          <Image src='car_image' />
        </ContainerSmall>
        {isMobile && (
          <Link to='/'>
            <Button background='brown'> checkout</Button>
          </Link>
        )}
        {isTablet && (
          <>
            <PrimaryButton onClick={goToLanding} background='green'>
              Checkout Primary
            </PrimaryButton>
            <SecondaryButton> Checkout Secondary </SecondaryButton>
          </>
        )}
        <H3 color='brown'>This is a test of h3 styled component</H3>
        <TextBaseBold>This is the title of a paragraph</TextBaseBold>
        <TextBase>
          <RegularText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente laborum at quod! Quo in
            reprehenderit repellat perferendis minima qui sapiente exercitationem accusamus distinctio quisquam porro
            quod
          </RegularText>
          <SmallText color={white}>
            quis, similique tempora ullam, quae earum laudantium aliquam cum optio vel beatae omnis. Modi asperiores
            quasi voluptatibus. Quia suscipit sunt dolorem dolor maiores!
          </SmallText>
        </TextBase>
        <FlexWrapper flexWrap='no-wrap' justifyContent='space-between'>
          <RegularText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente laborum at quod! Quo in
            reprehenderit repellat perferendis minima qui sapiente exercitationem accusamus distinctio quisquam porro
            quod
          </RegularText>
          <SmallText color={white}>
            quis, similique tempora ullam, quae earum laudantium aliquam cum optio vel beatae omnis. Modi asperiores
            quasi voluptatibus. Quia suscipit sunt dolorem dolor maiores!
          </SmallText>
          <CaptionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum sint at repellat delectus iste eius
            tempore molestiae totam repellendus?
          </CaptionText>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Checkout;

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: yellowgreen;
`;

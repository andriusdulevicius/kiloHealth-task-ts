import React from 'react';
import { Container } from 'components';
import { Discount, Logo, Header } from 'pages/home/elements';
import { SuccessStories, ProgramSection, YogaProsSection, Faq } from 'pages/home/sections';

const Home = () => {
  return (
    <>
      <Discount />
      <Logo />
      <Container>
        <Header />
        <ProgramSection />
        <SuccessStories />
        <YogaProsSection />
        <Faq />
        <ProgramSection />
      </Container>
    </>
  );
};

export default Home;

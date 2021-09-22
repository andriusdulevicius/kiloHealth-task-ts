import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { primary, white, black } from 'styles/colors';
import { Container, FlexWrapper, H5 } from 'components';
import { Link } from 'gatsby';

export const Navigation: React.FC<RouteComponentProps> = () => {
  const PAGES_LINKS = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <Wrapper>
      <Container>
        <FlexWrapper justifyContent='space-around' padding='1rem 0'>
          {PAGES_LINKS.map((p, index: number) => (
            <Link to={p.link} key={index}>
              {p.title}
            </Link>
          ))}
        </FlexWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${primary};

  a {
    text-decoration: none;
    color: ${black};
    font-weight: 700;
    font-size: 1.3rem;
  }
  a:hover {
    color: ${white};
  }
`;

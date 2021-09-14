import React, { useEffect } from 'react';
import LazyLoad, { forceVisible } from 'react-lazyload';
import styled from 'styled-components';

import { images } from 'utils/images';

const Img = styled.img`
  display: block;
  margin: ${(props) => props.margin || ''};
  padding: ${(props) => props.padding || ''};
  max-width: ${(props) => props.maxWidth || ''};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
`;

export const Image = ({ src }) => {
  useEffect(() => {
    forceVisible();
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <picture>
        <Img src={images[src]} alt={images[src]} />
      </picture>
    </LazyLoad>
  );
};

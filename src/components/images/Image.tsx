import React, { useEffect } from 'react';
import LazyLoad, { forceVisible } from 'react-lazyload';
import styled from 'styled-components';
import { images } from 'utils/images';

interface Styles {
  margin?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
  height?: string;
}

interface Props extends Styles {
  src: string;
}

const Img = styled.img<Styles>`
  display: block;
  margin: ${({ margin }) => margin || ''};
  padding: ${({ padding }) => padding || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-width: ${({ minWidth }) => minWidth || ''};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;

export const Image: React.FC<Props> = ({ src, ...rest }) => {
  useEffect(() => {
    forceVisible();
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <picture>
        <Img src={images[src]} alt={images[src]} {...rest} />
      </picture>
    </LazyLoad>
  );
};

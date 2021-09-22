import styled from 'styled-components';
import { TextBase } from './TextBase';
import { mobile } from 'styles/breakpoints';
import { TextBaseBold } from './TextBase';

export const H1 = styled(TextBase).attrs({ as: 'h1' })`
  font-size: 2.5rem;
  line-height: 3.5rem;
`;
export const H2 = styled(TextBase).attrs({ as: 'h2' })`
  font-size: 2rem;
  line-height: 2.75rem;
`;
export const H3 = styled(TextBase).attrs({ as: 'h3' })`
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const H4 = styled(TextBase).attrs({ as: 'h4' })`
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

export const H5 = styled(TextBaseBold).attrs({ as: 'h5' })`
  font-size: 1rem;
  @media ${mobile} {
    font-size: 0.938rem;
  }
`;

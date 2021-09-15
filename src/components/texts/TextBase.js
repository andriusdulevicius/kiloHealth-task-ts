import styled from 'styled-components';

import { black } from 'styles/colors';

export const TextBase = styled.p`
  margin: ${(props) => props.margin || ''};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || black};
  text-align: ${(props) => props.textAlign || ''};
  text-decoration: ${(props) => props.textDecoration || ''};
  text-transform: ${(props) => props.textTransform || ''};
  line-height: ${(props) => props.lineHeight || 'inherit'};
`;

export const TextBaseBold = styled(TextBase).attrs(({ fontWeight }) => ({
  fontWeight: fontWeight || 700,
}))``;

import styled from 'styled-components';
import { black } from 'styles/colors';

interface Styles {
  margin?: string;
  fontSize?: string;
  fontWeight?: number;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  lineHeight?: string;
}

export const TextBase = styled.p<Styles>`
  margin: ${({ margin }) => margin || ''};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || black};
  text-align: ${({ textAlign }) => textAlign || ''};
  text-decoration: ${({ textDecoration }) => textDecoration || ''};
  text-transform: ${({ textTransform }) => textTransform || ''};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
`;

export const TextBaseBold = styled(TextBase).attrs(({ fontWeight }: Styles) => ({
  fontWeight: fontWeight || 700,
}))``;

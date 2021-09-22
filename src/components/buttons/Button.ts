import styled from 'styled-components';
import { white, primary } from 'styles/colors';

interface Styles {
  display?: string;
  margin?: string;
  marginBottom?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
}

export const Button = styled.button<Styles>`
  display: ${({ display }) => display || 'inline-block'};
  margin: ${({ margin }) => margin || 'auto'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '1rem'};
  padding: ${({ padding }) => padding || '0.8rem 1.5rem'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  min-width: ${({ minWidth }) => minWidth || 'none'};
  width: ${({ width }) => width || 'none'};
  background-color: ${({ background }) => background || primary};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  color: ${({ color }) => color || white};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  cursor: 'pointer';
`;

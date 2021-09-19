import styled from 'styled-components';

interface Styles {
  background?: string;
  display?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

export const Icon = styled.span<Styles>`
  display: ${({ display }) => display || 'block'};
  background: url(${({ background }) => background || ''}) no-repeat;
  margin: ${({ margin }) => margin || ''};
  padding: ${({ padding }) => padding || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-width: ${({ minWidth }) => minWidth || ''};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
`;

import styled from 'styled-components';

interface Styles {
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
}

export const RegularText = styled.span<Styles>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
`;

export const SmallText = styled.span<Styles>`
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.25rem'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;
export const CaptionText = styled.span<Styles>`
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.125rem'};
`;

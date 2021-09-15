import styled from 'styled-components';

export const RegularText = styled.span`
  font-size: ${(props) => props.fontSize || '1rem'};
  line-height: ${(props) => props.lineHeight || '1.5rem'};
`;

export const SmallText = styled.span`
  font-size: ${(props) => props.fontSize || '0.875rem'};
  line-height: ${(props) => props.lineHeight || '1.25rem'};
`;
export const CaptionText = styled.span`
  font-size: ${(props) => props.fontSize || '0.75rem'};
  line-height: ${(props) => props.lineHeight || '1.125rem'};
`;

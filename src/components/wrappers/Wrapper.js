import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: 'flex';
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || '1rem'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  margin: ${(props) => props.margin || 'auto'};
  padding: ${(props) => props.padding || '0 1rem'};
`;

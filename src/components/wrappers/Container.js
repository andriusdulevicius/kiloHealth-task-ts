import styled from 'styled-components';

export const Container = styled.div`
  margin: ${(props) => props.margin || '0 auto'};
  padding: ${(props) => props.padding || '0 1rem'};
  max-width: ${(props) => props.maxWidth || '72rem'};
`;

export const ContainerSmall = styled(Container)`
  position: ${(props) => props.position || 'relative'};
  display: ${(props) => props.display || 'block'};
  margin: auto;
  padding: ${(props) => props.padding || '0 1rem'};
  max-width: 48rem;
`;

export const FlexWrapper = styled.div`
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || '1rem'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  margin: ${(props) => props.margin || 'auto'};
  padding: ${(props) => props.padding || '0 1rem'};
`;

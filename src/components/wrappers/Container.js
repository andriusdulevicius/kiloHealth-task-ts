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

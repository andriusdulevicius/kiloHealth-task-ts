import styled from 'styled-components';
import { white } from 'styles/colors';

interface Styles {
  backgroundColor?: string;
  padding?: string;
}

export const MainHeader = styled.div<Styles>`
  margin: 0;
  text-align: center;
  color: ${({ color }) => color || white};
  padding: ${({ padding }) => padding || '0.8rem 0'};
  background-color: ${({ backgroundColor }) => backgroundColor || white};
`;

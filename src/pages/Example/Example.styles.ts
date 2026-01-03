import styled from 'styled-components';
import type { StyledExamplePageContainerProps } from './Example.types';

export const ExamplePageContainer = styled.div<StyledExamplePageContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.$bgColor};
`;

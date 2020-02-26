import styled from "styled-components";

export const Wrapper = styled.div`
  & > svg {
    width: ${({ size }) => `${size * 1}px`};
    height: ${({ size }) => `${size * 1}px`};
    ${props => props.theme.mq.atTablet`
      width: ${({ size }) => `${size * 1.1}px`};
      height: ${({ size }) => `${size * 1.1}px`};
    `}
    ${props => props.theme.mq.atDesktop`
      width: ${({ size }) => `${size * 1.15}px`};
      height: ${({ size }) => `${size * 1.15}px`};
    `}
  }
`;

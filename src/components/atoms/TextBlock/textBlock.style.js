import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.text.bm}
  width: 100%;
  ${props => props.theme.mq.atTablet`

    `}
`;

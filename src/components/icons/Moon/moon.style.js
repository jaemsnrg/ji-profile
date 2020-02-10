import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  ${(props) => props.theme.mq.atTablet`
    width: 400px;
  `}
  ${(props) => props.theme.mq.atDesktop`
    width: 400px;
  `}
`

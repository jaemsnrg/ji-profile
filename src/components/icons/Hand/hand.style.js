import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  transform: scale(1.25);
  ${props => props.theme.mq.atTablet`
    width: 400px;
  `}
  ${props => props.theme.mq.atDesktop`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    transform: scale(1.1);
  `}

  .st1 {
    fill: none;
    stroke: #494949;
    stroke-width: 3;
    stroke-miterlimit: 10;
  }
`;

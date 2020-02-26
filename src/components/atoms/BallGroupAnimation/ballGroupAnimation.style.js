import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ width }) => width};

  ${props => props.theme.mq.atTablet`
  `}
  ${props => props.theme.mq.atDesktop`
  `}

  & > ul {
    margin: 0;
    padding: 0;
    // width: 100%;
    list-style: none;
    line-height: 0;
  }

  & li {
    display: inline-block;
    height: 5px;
    width: 5px;
    margin: 2px;
    background-color: black;
    border-radius: 50%;
    list-style: none;
  }
`;

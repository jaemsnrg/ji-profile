import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => theme.text.t2};
    color: ${({ theme }) => theme.colours.greyDark};
    font-weight: 300;
    width: auto;
`
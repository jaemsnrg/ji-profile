import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => theme.text.t1};
    color: ${({ theme }) => theme.colours.greyDark};
    font-weight: 800;
    width: auto;
`
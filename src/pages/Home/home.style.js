import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => theme.text.bm}
    color: ${({ theme }) => theme.colours.greyDark};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

`;

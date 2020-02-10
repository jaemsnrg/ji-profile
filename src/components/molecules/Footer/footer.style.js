import styled from "styled-components";

export const Wrapper = styled.div`
    
    ${({ theme }) => theme.text.t2};
    background-color: ${({ theme }) => theme.colours.greyDark};
    color: white;
    width: 100%;
    height: 130px;

`

export const InnerWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
`

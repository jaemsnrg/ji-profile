import styled from "styled-components";

export const Wrapper = styled.div`
`

export const InfoTitle = styled.div`
    ${({theme}) => theme.text.bsm}
    color: ${({theme}) => theme.colours.greyLight};
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
    letter-spacing: 3px;
    word-spacing: 6px;
`
 
export const InfoDetail = styled.div`
    ${({theme}) => theme.text.bm}
    color: ${({theme}) => theme.colours.greyDark};
    font-weight: 400;
    margin: 0;
`
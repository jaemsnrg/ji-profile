import styled from "styled-components";

export const Wrapper = styled.div`

    & h1 {
        ${({theme}) => theme.text.t1}
        font-weight: 500;
        margin: 0 0 10px 0;
        white-space: nowrap;
    }

    & h2 {
        ${({theme}) => theme.text.bsm}
        color: ${({theme}) => theme.colours.greyLight};
        text-transform: uppercase;
        font-weight: 400;
        margin: 0;
        letter-spacing:3px;
        word-spacing: 4px;
    }

    ${(props) => props.theme.mq.atTablet`

    `}
`
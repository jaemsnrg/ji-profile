import styled from "styled-components";

export const Wrapper = styled.div`
    ${({theme}) => theme.text.bsm}
    width: 100%;
    ${(props) => props.theme.mq.atTablet`

    `}
`
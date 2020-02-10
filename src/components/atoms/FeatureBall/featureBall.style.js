import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.colours.darkGrey};
    ${({theme}) => theme.mq.atTablet`
        height: 200px;
        width: 200px;
    `}}
    & > span {
        text-align: center;
    }
}
`

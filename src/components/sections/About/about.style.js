import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 75vh;
    width: calc(100% - 80px);
    margin: 0 20px 0;
    ${({theme}) => theme.mq.atTablet`
        margin: 30vh auto 0;
        width: 600px;
    `}}
`


export const TitleBox = styled.div`
    margin: 15vh auto 0;
    
    max-width: 1000px;
    text-align: left;
    ${({theme}) => theme.mq.atTablet`
        margin: 30vh auto 0;
        width: 600px;
    `}}
`

export const TextBox = styled.div`
    margin: 40px auto;
    max-width: 1000px;
    text-align: left;
    ${({theme}) => theme.mq.atTablet`
        margin: 40px auto 0;
        width: 600px;
    `}}
    & > div {
        margin-bottom: 40px;
    }
`

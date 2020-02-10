import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 110vh;
    width: calc(100% - 40px);
    margin: 15vh auto 0;
    ${({theme}) => theme.mq.atTablet`
        margin: 30vh auto 0;
        width: 100%;
        height: 130vh;
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

export const Grid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 100px 0;
    width: 100%;
    max-width: 1000px;
    text-align: left;
    & > div {
        margin-bottom: 40px;
    }
`

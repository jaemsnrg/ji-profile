import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    
    width: 100%;
    padding: 20px;
    ${({theme}) => theme.mq.atTablet`
        height: 100vh;
    `}}
`

export const LargeLayout = styled.div`
    
    display: flex;
    height: 100%;
    align-items: center;
    
    & > div:nth-child(1) {
        width: calc(100% - 40px);
        float: left;
        ${({theme}) => theme.mq.atTablet`TitleWrapper
            width: 50%;
        `}}
    }
    & > div:nth-child(2) {
        float: right;
        ${({theme}) => theme.mq.atTablet`TitleWrapper
            display: none;
        `}}
    }


`

export const TitleWrapper = styled.div`
    margin-bottom: 40px;
    margin-top: 20px;
    ${({theme}) => theme.mq.atTablet`
    margin-bottom: 60px;
    `}}
`

export const InfoBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    // & > div {
    //     margin-right: 40px;
    // }
    ${({theme}) => theme.mq.atTablet`

    `}}
`

export const TextBlockWrapper = styled.div`
    // margin: 60px 0 60px 0;
    width: 100%;
    ${({theme}) => theme.mq.atTablet`
        margin: 60px 0 60px 0;
    `}}
`

export const MobileHandWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({theme}) => theme.mq.atTablet`
        display: none;
    `}}
`
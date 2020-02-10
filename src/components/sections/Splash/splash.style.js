import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: calc(100vh - 84px);
    width: 100%;
`

export const MoonWrapper = styled.div`
    position: absolute;
    top: 55%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 0;
    // ${({theme}) => theme.mq.atTablet`
    //     left: 40%;
    // `}}
`

export const TitleBox = styled.div`
    position: absolute;
    top: 35%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 120px;
    z-index: 10;
`

export const BallWrapper = styled.div`
    position: relative;
    height: 100%;

    & > div:nth-child(1) {
        position: absolute;
        left: 65%;
        top: 0%;
        z-index: 20;
        // ${({theme}) => theme.mq.atTablet`
        //     left: 75%;
        // `}}
    }
    & > div:nth-child(2) {
        position: absolute;
        left: 25%;
        top: 3%;
        z-index: -10;
        transform: scale(.5);
    //     ${({theme}) => theme.mq.atTablet`
    //     left: 35%;
    // `}}
    }
    & > div:nth-child(3) {
        position: absolute;
        left: 20%;
        top: 50%;
        z-index: 20;
    //     ${({theme}) => theme.mq.atTablet`
    //     left: 30%;
    // `}}
    }
    & > div:nth-child(4) {
        position: absolute;
        left: 80%;
        top: 20%;
        z-index: -10;
        transform: scale(.5);
    //     ${({theme}) => theme.mq.atTablet`
    //     left: 90%;
    // `}}
    }
    & > div:nth-child(5) {
        position: absolute;
        left: 65%;
        top: 40%;
        z-index: -10;
        transform: scale(.5);
    //     ${({theme}) => theme.mq.atTablet`
    //     left: 75%;
    // `}}
    }
    & > div:nth-child(6) {
        position: absolute;
        left: 50%;
        top: 69%;
        z-index: 20;
    //     ${({theme}) => theme.mq.atTablet`
    //     left: 60%;
    // `}}
    }
`
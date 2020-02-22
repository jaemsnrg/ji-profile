import React from 'react'
import { Wrapper, InfoTitle, InfoDetail } from './infoBox.style'

const InfoBox = (props) => {
    const {infoTitle,infoDetail} = props

    return (
        <Wrapper>
            <InfoTitle>{infoTitle}</InfoTitle>
            <InfoDetail>{infoDetail}</InfoDetail>
        </Wrapper>
    )
}


export default InfoBox

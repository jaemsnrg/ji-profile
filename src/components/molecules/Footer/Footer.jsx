import React from 'react';
import { AltLogo, DetailText } from '@atoms';
import { Wrapper, InnerWrapper } from './footer.style';

const Footer = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <AltLogo />
                <div>
                <DetailText>JI Digital Limited</DetailText> 
                <DetailText>10426354</DetailText>
                </div>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Footer;
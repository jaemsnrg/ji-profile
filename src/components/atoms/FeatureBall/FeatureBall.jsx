import React from 'react';
import { Wrapper } from './featureBall.style';

const FeatureBall = ({children}) => {
    return (
    <Wrapper>
       <span>{children}</span>
    </Wrapper>
    )
}

export default FeatureBall;